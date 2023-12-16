import { type PageProps } from "$fresh/server.ts";
import { NavBar } from "../components/NavBar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-tailwind</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/styles_prebuilt.css" />
      </head>
      <body>
        <NavBar />
        <Component />
      </body>
    </html>
  );
}
