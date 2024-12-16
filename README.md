# React Router v6 Navigation Issue
This repository demonstrates an unexpected behavior in React Router v6 when using `window.location.href` for navigation instead of React Router's programmatic navigation methods.

## Problem
Using `window.location.href` to navigate between routes in a React Router v6 application bypasses React Router's internal mechanisms.  This can lead to issues with components that rely on React Router's features such as `useParams`, `useLocation`, `useNavigate` and data fetching using `useLoaderData` or similar.