# Next.js 15 App Router Async/Await Bug

This repository demonstrates a bug encountered in Next.js 15's App Router when using `async/await` within `getStaticProps` or `getServerSideProps`.  The error is misleading, pointing to the return value's structure rather than the asynchronous operation itself.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You should encounter an error related to the return value of `getServerSideProps` in `pages/about.js`.  This only occurs when using the App Router and not when using the pages router.

## Solution

The solution is to either remove the async/await or refactor the code to return a valid value.  For large applications, refactoring might not be practical.  In the solution branch, we use the async/await while returning data from the API call