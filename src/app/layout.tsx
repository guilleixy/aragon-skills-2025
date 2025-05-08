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
import Stars from "@/components/global/Stars/Stars";
export const metadata = {
  title: "Araǵon Skills",
  description: "La página perfecta para conocer todo sobre las Aragón Skills",
};
import { SessionProvider } from "next-auth/react";

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
        <Stars />
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
