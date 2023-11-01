import {json, type LoaderArgs, type MetaFunction} from "@remix-run/node";
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
import {useChangeLanguage} from "remix-i18next";
import {useTranslation} from "react-i18next";
import '@radix-ui/themes/styles.css';
import i18next from "~/i18next.server";
import {Theme} from '@radix-ui/themes';

export function links() {
    return [
        {rel: "stylesheet", href: styles},
        {rel: "stylesheet", href: headerstyles},
        {rel: "stylesheet", href: publicitystyles},
    ];
}

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "SRD Lab  |  Website",
    viewport: "width=device-width,initial-scale=1",
});

export async function loader({request}: LoaderArgs) {
    let locale = await i18next.getLocale(request);
    return json({locale});
}

export let handle = {
    // In the handle export, we can add a i18n key with namespaces our route
    // will need to load. This key can be a single string or an array of strings.
    // TIP: In most cases, you should set this to your defaultNS from your i18n config
    // or if you did not set one, set it to the i18next default namespace "translation"
    i18n: "common",
};

export default function App() {
    let {locale} = useLoaderData<typeof loader>();
    let {i18n} = useTranslation();
    useChangeLanguage(locale);
    return (
        <html lang={locale} dir={i18n.dir()}>
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Heebo:wght@500&family=Poppins:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />
            <Meta/>
            <Links/>
        </head>
        <body>
        <Theme>
            <Outlet/>
            <LiveReload/>
            <Scripts/>
        </Theme>
        </body>
        </html>
    );
}
