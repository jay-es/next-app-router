import Link from 'next/link';
import { RefreshButton } from './refresh-button';

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
    </tr>
  );
}

export default async function Revalidate() {
  const requests: Record<string, RequestInit> = {
    staticData: { cache: 'force-cache' },
    dynamicData: { cache: 'no-store' },
    staticData2: { next: { revalidate: false } },
    dynamicData2: { next: { revalidate: 0 } },
    revalidatedData: { next: { revalidate: 5 } },
  };

  return (
    <>
      <h1>Revalidate</h1>

      <table className="w-auto">
        <tbody>
          {Object.entries(requests).map(([name, options]) => (
            <TableRow key={name} name={name} options={options} />
          ))}
        </tbody>
      </table>

      <div className="space-x-2">
        <Link href="revalidate/nested">refresh</Link>
        <RefreshButton />
      </div>
    </>
  );
}
