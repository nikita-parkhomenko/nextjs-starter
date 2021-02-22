import Link from 'next/link';

export function Header() {
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
            <Link href="/post/5"><a>Post number 5</a></Link>
        </nav>
    )
}