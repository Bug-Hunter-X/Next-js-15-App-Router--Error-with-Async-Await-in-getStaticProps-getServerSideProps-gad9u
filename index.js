```javascript
// pages/about.js
import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return NextResponse.json({ data });
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```