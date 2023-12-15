'use client';

import { useOptimistic, useTransition } from 'react';

export function OptimisticButton({
  count,
  addCount,
}: {
  count: number;
  addCount: () => Promise<void>;
}) {
  const [pending, startTransition] = useTransition();
  const [optimisticCount, addOptimisticCount] = useOptimistic(count);

  function handleClick() {
    addOptimisticCount((state) => state + 1);
    startTransition(addCount);
  }

  return (
    <div className="flex gap-x-2">
      <button
        type="button"
        className="btn-primary btn btn-sm"
        onClick={handleClick}
        disabled={pending}
      >
        +1
      </button>
      useOptimistic {optimisticCount}
    </div>
  );
}
