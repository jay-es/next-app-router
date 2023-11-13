import { getPost, getUser } from '@jay-es/jsonplaceholder-client';
import { Suspense } from 'react';
import { PostComments, PostCommentsSkelton } from './post-comments';

type Props = {
  postId: number;
};

export async function Post({ postId }: Props) {
  const post = await getPost(postId);
  const author = await getUser(post.userId);

  return (
    <article>
      <h1>{post.title}</h1>
      <h2 className="-mt-6">by: {author.name}</h2>
      <p>{post.body}</p>

      <h3>Comments</h3>
      <Suspense fallback={<PostCommentsSkelton />}>
        <PostComments postId={postId} />
      </Suspense>
    </article>
  );
}
