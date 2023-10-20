import { revalidatePath } from 'next/cache';
import { TransitionButton } from './transition-button';
import { Form } from './form';
import { OptimisticButton } from './optimistic-button';

let count = 0;

export default function Counter() {
  const addCount = async () => {
    'use server';

    count++;
    console.log(count);

    // これがないとリロードするまで表示が更新されない
    revalidatePath('/counter');

    // （revalidatePath の直後ではなく）このウェイトが終わってから更新される
    await new Promise((resolve) => setTimeout(resolve, 400));
  };

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <div className="space-y-2">
        <Form addCount={addCount} />
        <TransitionButton addCount={addCount} />
        <OptimisticButton count={count} addCount={addCount} />
      </div>
    </>
  );
}
