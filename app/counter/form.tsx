'use client';

import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn-primary btn btn-sm" disabled={pending}>
      +1
    </button>
  );
}

export function Form({ addCount }: { addCount: () => Promise<void> }) {
  return (
    <form className="flex gap-x-2" action={addCount}>
      <SubmitButton />
      useFormStatus
    </form>
  );
}
