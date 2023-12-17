'use client';

import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  onClick: () => void;
}>;

export function Button({ children, className = '', onClick }: Props) {
  return (
    <button
      type="button"
      className={'btn btn-sm ' + className}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
