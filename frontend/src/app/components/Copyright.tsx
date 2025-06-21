'use client';

import { useEffect, useState } from 'react';

export default function Copyright() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) return null; // Optional: Return a loader or empty state

  return <p style={{ color: 'white' }}>© {year} Mboweezy Hub - A Division of Mboweni Trading Solutions (Pty) Ltd. All rights reserved.</p>;
}
