import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import styles from "./styles/app.css"
import headerstyles from "./components/banner/styles.css"
import publicitystyles from "./components/confiance/styles.css"
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: headerstyles },
    { rel: "stylesheet", href: publicitystyles },
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "SRD Lab  |  Website",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@500&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
