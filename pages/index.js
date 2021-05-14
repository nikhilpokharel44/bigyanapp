/** @format */
import Link from "next/link";

export default function Home() {
  return (
    <div className='_home_contents'>
      <h2>Hello World</h2>
      <Link href='/ad/create'>Create New Ad</Link>
    </div>
  );
}
