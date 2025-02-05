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
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the function is async
  //  The problem is that the function can only return one of three things: a string, an array of strings, or an object with a single string key and value.  If you try to return something else, you will get an error.
  //   To fix this, you can either return a string, an array of strings, or an object with a single string key and value. Or you could change the function to be async
  return {
    props: {
      message: 'This is the about page',
    },
  };
}
```