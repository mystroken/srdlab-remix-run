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
    "SRD Lab  |  Cabinet spécialisé dans la conception approfondie et la réalisation d'études, la collecte de données de haute qualité",
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
    }, 4000);
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
