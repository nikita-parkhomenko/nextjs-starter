import Link from 'next/link';

export default function Index() {
  return (
      <>
        <h1>Next js index page</h1>
        <Link href='/posts'>
          <a>Go to posts</a>
        </Link>
      </>
  )
}
