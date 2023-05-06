import Link from 'next/link';
 
function Page() {
  return (
    <ul>
      <li>
        <Link href="/users/1">Go to users/[uid].tsx</Link>
      </li>

    </ul>
  );
}
 
export default Page;