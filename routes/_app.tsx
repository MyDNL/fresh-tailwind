// import { Head } from "https://deno.land/x/fresh@1.6.1/runtime.ts";
// import { pwa-update } from  "npm:@pwabuilder/pwaupdate";
import { type PageProps } from "$fresh/server.ts";
import { NavBar } from "../components/NavBar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>Countdown 2024</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="manifest" href="manifest.json" />
      </head>
      <body>
        <NavBar />
        <Component />
      </body>
    </html>
  );
}
