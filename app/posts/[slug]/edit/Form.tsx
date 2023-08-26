'use client';

import { type Post, patchPost } from '@jay-es/jsonplaceholder-client';
import type { FC } from 'react';
import { useState } from 'react';
import { action } from './action';

export const Form: FC<{ post: Post }> = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = async () => {
    await patchPost(post.id, { title, body });
    await action(`/posts/${post.id}`);
  };

  return (
    <form action={handleSubmit}>
      <fieldset>
        <legend>title</legend>
        <input
          className="input-bordered input w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>body</legend>
        <textarea
          className="textarea-bordered textarea w-full"
          value={body}
          rows={6}
          onChange={(e) => setBody(e.target.value)}
        />
      </fieldset>

      <div>
        <button className="btn-primary btn-sm btn" type="submit">
          save
        </button>
      </div>
    </form>
  );
};
