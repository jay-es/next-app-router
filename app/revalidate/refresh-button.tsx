'use client';
import { useRouter } from 'next/navigation';

export function RefreshButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="btn-primary btn btn-sm"
      onClick={() => router.refresh()}
    >
      refresh
    </button>
  );
}
