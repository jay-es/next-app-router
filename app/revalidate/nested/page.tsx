'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Nested() {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return 'refreshed!';
}
