import { revalidatePath, revalidateTag } from 'next/cache';
import { Button } from './button';

type PathProps = {
  path: string;
  type?: 'layout' | 'page';
};
export function RevalidatePathButton({ path, type }: PathProps) {
  async function handleClick() {
    'use server';
    revalidatePath(path, type);
  }

  return (
    <div className="mr-2 inline-block w-80">
      <Button className="btn-info" onClick={handleClick}>
        revalidatePath
      </Button>
      <code>
        ({JSON.stringify(path)}, {JSON.stringify(type)})
      </code>
    </div>
  );
}

type TagProps = {
  tag: string;
};
export function RevalidateTagButton({ tag }: TagProps) {
  async function handleClick() {
    'use server';
    revalidateTag(tag);
  }

  return (
    <div className="mr-2 inline-block w-80">
      <Button className="btn-success" onClick={handleClick}>
        revalidateTag
      </Button>
      <code>({JSON.stringify(tag)})</code>
    </div>
  );
}
