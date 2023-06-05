import { getPosts, getUsers } from '@jay-es/jsonplaceholder-client';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Posts',
};

export default async function Posts() {
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);

  const getUserName = (userId: number) =>
    users.find(({ id }) => id === userId)?.name;

  return (
    <main>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((v, i) => (
            <tr key={i}>
              <td>{v.id}</td>
              <td>
                <Link href={`/posts/${v.id}`}>{v.title}</Link>
              </td>
              <td>
                <Link href={`/users/${v.userId}`}>{getUserName(v.userId)}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
