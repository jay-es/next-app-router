'use client';

import { useRouter } from 'next/navigation';
import { Post } from '../../[slug]/_components/post';
import type { PageProps } from '../../[slug]/types';

export default function PostModal({ params }: PageProps) {
  const router = useRouter();
  const postId = Number(params.slug);

  return (
    <dialog className="modal modal-open">
      <div className="modal-box w-5/6 max-w-none rounded-none">
        <Post postId={postId} />

        <button
          className="btn-ghost btn btn-sm btn-circle absolute right-2 top-2"
          type="button"
          onClick={router.back}
        >
          ✕
        </button>
      </div>
      <div className="modal-backdrop" onClick={router.back} />
    </dialog>
  );
}
