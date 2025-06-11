'use client'

import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function ClientProviders() {
  return (
    <>
      <GoogleAnalytics trackPageViews />
    </>
  )
}
