import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { placeId } = req.query;

    if (!placeId || typeof placeId !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid placeId' });
    }

    if (!process.env.GOOGLE_API_KEY) {
        return res.status(500).json({ error: 'Server misconfiguration - missing API key' });
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${process.env.GOOGLE_API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error(`Google API responded with ${response.status}`);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error: any) {
        console.error('Google API Error:', error);
        return res.status(500).json({ 
            error: 'Failed to fetch data from Google API',
            details: error.message 
        });
    }
}