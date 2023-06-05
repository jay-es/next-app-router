'use client';

import { type Post, patchPost } from '@jay-es/jsonplaceholder-client';
import { useRouter } from 'next/navigation';
import { FC, FormEventHandler, useState } from 'react';

export const Form: FC<{ post: Post }> = ({ post }) => {
  const router = useRouter(); // useRouter only works in Client Components.
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await patchPost(post.id, { title, body });

    router.push(`/posts/${post.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>title</legend>
        <input
          className="input input-bordered w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>body</legend>
        <textarea
          className="textarea textarea-bordered w-full"
          value={body}
          rows={6}
          onChange={(e) => setBody(e.target.value)}
        />
      </fieldset>

      <div>
        <button className="btn btn-sm btn-primary" type="submit">
          save
        </button>
      </div>
    </form>
  );
};
