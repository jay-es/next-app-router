import { getPostComments } from '@jay-es/jsonplaceholder-client';

type Props = {
  postId: number;
};

export async function PostComments({ postId }: Props) {
  const comments = await getPostComments(postId);
  await new Promise((resolve) => setTimeout(resolve, 100));

  return (
    <ul className="space-y-2">
      {comments.map((v) => (
        <li key={v.id}>
          <strong>{v.name}</strong> <small>({v.email})</small>
          <div>{v.body}</div>
        </li>
      ))}
    </ul>
  );
}

export function PostCommentsSkelton() {
  return (
    <ul className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <li key={i} className="space-y-3 pb-1 pt-2">
          <div className="skeleton h-4 w-96" />
          <div className="skeleton h-4" />
          <div className="skeleton h-4" />
        </li>
      ))}
    </ul>
  );
}
