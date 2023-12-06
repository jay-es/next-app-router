'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Post } from '@/app/posts/[slug]/_components/post';
import type { PageProps } from '@/app/posts/[slug]/types';

export default function PostModal({ params }: PageProps) {
  const router = useRouter();
  const postId = Number(params.slug);

  return (
    <dialog className="modal modal-open">
      <div className="modal-box w-5/6 max-w-none rounded-none">
        <Post postId={postId} />
        <div className="space-x-4">
          <Link href={`/posts/${postId}/edit`}>edit</Link>
        </div>

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
