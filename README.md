# eonet

Etched into my brain after solved frustrations:
- Next.js only loads environment variables that start with `NEXT_PUBLIC_` on the *client-side* to prevent accidentally exposing sensitive data to the client. Otherwise, to fetch env vars on the server-side, you can use the traditional `process.env` object directly.
-
