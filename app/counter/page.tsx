import { revalidatePath } from 'next/cache';

let count = 0;

export default function Counter() {
  const addCount = async () => {
    'use server';

    count++;
    console.log(count);

    // これがないとリロードするまで表示が更新されない
    revalidatePath('/counter');
  };

  return (
    <>
      <h1>Counter</h1>
      <form action={addCount}>
        <p>{count}</p>
        <button className="btn-primary btn-sm btn" type="submit">
          +1
        </button>
      </form>
    </>
  );
}
