import Link from 'next/link';
import { RefreshButton } from './refresh-button';
import { RevalidatePathButton, RevalidateTagButton } from './revalidate-button';

type TableRowProps = {
  name: string;
  options: RequestInit;
};
async function TableRow({ name, options }: TableRowProps) {
  const res = await fetch(
    `http://localhost:3000/revalidate/api?${JSON.stringify(options)}`,
    options
  );

  return (
    <tr>
      <th>{name}</th>
      <td>{await res.text()}</td>
      <td>
        <code>{JSON.stringify(options)}</code>
      </td>
    </tr>
  );
}

export default async function Revalidate() {
  const requests: Record<string, RequestInit> = {
    staticData: { cache: 'force-cache' },
    dynamicData: { cache: 'no-store' },
    staticData2: { next: { revalidate: false } },
    dynamicData2: { next: { revalidate: 0 } },
    revalidatedData: { next: { revalidate: 3 } },
    // revalidatedData2: { cache: 'force-cache', next: { revalidate: 3 } }, // revalidate と cache を同時に指定すると warning になる
    taggedNone: { next: { revalidate: false, tags: [] } },
    taggedFoo: { next: { revalidate: false, tags: ['foo'] } },
    taggedBar: { next: { revalidate: false, tags: ['bar'] } },
    taggedFooBar: { next: { revalidate: false, tags: ['foo', 'bar'] } },
  };

  return (
    <>
      <h1 className="mb-2">Revalidate</h1>
      <div>DevTools の Disable cache は OFF に</div>

      <table className="w-auto font-mono">
        <thead>
          <tr>
            <th>name</th>
            <th>data</th>
            <th>fetch options</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(requests).map(([name, options]) => (
            <TableRow key={name} name={name} options={options} />
          ))}
        </tbody>
      </table>

      <div className="space-x-2">
        <Link href="revalidate/nested">refresh</Link>
        <RefreshButton />
        <p>
          revalidatedDataは期限の後にアクセスすると古い値を返してから、データ再取得+キャッシュ更新する。
          <br />
          revalidatePath, revalidateTag はルーターキャッシュが破棄される。
          <br />
        </p>
      </div>

      <ul className="text-sm">
        <li>
          <RevalidatePathButton path="/" />
          ルート URL クリア。下層はクリアされないので static は変わらない
        </li>
        <li>
          <RevalidatePathButton path="/" type="layout" />
          ルートレイアウトクリア。下層にも影響するのですべてクリアされる
        </li>
        <li>
          <RevalidatePathButton path="/revalidate" />
          このページをクリア。すべてクリアされる
        </li>
        <li>
          <RevalidatePathButton path="/revalidate" type="layout" />
          このページのレイアウトをクリア。この場合はルートレイアウトのクリアと同じ
        </li>
        <li>
          <RevalidatePathButton path="/foo" />
          存在しないページクリア。static は変わらない
        </li>
        <li>
          <RevalidateTagButton tag="" />
          空のタグをクリア。どれもクリアされない
        </li>
        <li>
          <RevalidateTagButton tag="あああ" />
          存在しないタグをクリア。同上
        </li>
        <li>
          <RevalidateTagButton tag="foo" />
          タグ foo をクリア。Foo, FooBar がクリアされる
        </li>
        <li>
          <RevalidateTagButton tag="bar" />
          タグ bar をクリア。Bar, FooBar がクリアされる
        </li>
      </ul>
    </>
  );
}
