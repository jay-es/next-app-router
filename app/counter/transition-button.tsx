'use client';

import { useTransition } from 'react';

export function TransitionButton({
  addCount,
}: {
  addCount: () => Promise<void>;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex gap-x-2">
      <button
        type="button"
        className="btn-primary btn-sm btn"
        onClick={() => startTransition(addCount)}
        disabled={pending}
      >
        +1
      </button>
      useTransition
    </div>
  );
}
