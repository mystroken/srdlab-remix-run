import { json, type LoaderArgs, type MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import styles from "./styles/app.css";
import headerstyles from "./components/banner/styles.css";
import publicitystyles from "./components/confiance/styles.css";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import "@radix-ui/themes/styles.css";
import i18next from "~/i18next.server";
import { Theme } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import Spinner from "./components/spinner";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: headerstyles },
    { rel: "stylesheet", href: publicitystyles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title:
    "Laboratory for Survey & Research",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  let locale = await i18next.getLocale(request);
  return json({ locale });
}

export let handle = {
  i18n: "common",
};

export default function App() {
  let { locale } = useLoaderData<typeof loader>();
  let { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);
  useChangeLanguage(locale);
  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@500&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <Meta />
        <meta name="description" content="Laboratory for Survey & Research" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Laboratory for Survey & Research" />
        <meta
          property="og:description"
          content="Laboratory for Survey & Research"
        />
        <meta property="og:url" content="https://srd-lab.com" />
        <meta property="og:site_name" content="SrdLab" />
        <meta property="article:publisher" content="https://srd-lab.com" />
        <meta property="article:tag" content="Statistic" />
        <meta property="article:tag" content="Development" />
        <meta property="article:tag" content="Laboratory" />
        <meta property="article:section" content="Statistic" />

        <Links />
      </head>
      <body>
        <Theme>
          {isLoading ? <Spinner /> : <Outlet />}
          <LiveReload />
          <Scripts />
        </Theme>
      </body>
    </html>
  );
}
