'use client';

import { useEffect, useOptimistic, useTransition } from 'react';

export function OptimisticButton({
  count,
  addCount,
}: {
  count: number;
  addCount: () => Promise<void>;
}) {
  const [pending, startTransition] = useTransition();
  const [optimisticCount, setOptimisticCount] = useOptimistic(count);

  // 他のコンポーネントでも prop を変更するので、更新しないと表示がずれる
  useEffect(() => {
    startTransition(() => setOptimisticCount(count));
  }, [count, setOptimisticCount]);

  async function handleClick() {
    startTransition(async () => {
      setOptimisticCount((state) => state + 1);
      await addCount();
    });
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
