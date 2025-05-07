// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./globals.css";
import "./stars.css";
import "./reset.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Header from "@/components/global/Header";

export const metadata = {
  title: "Araǵon Skills",
  description: "La página perfecta para conocer todo sobre las Aragón Skills",
};
import { SessionProvider } from "next-auth/react";
import Stars from "@/components/global/Stars/Stars";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Stars />
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
