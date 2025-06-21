// src/pages/api/reviews.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { placeId } = req.query;

  if (!placeId || typeof placeId !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid placeId' });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Server API error:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
