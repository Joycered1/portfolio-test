import type { Metadata } from "next";
import { Red_Hat_Display, Epilogue } from "next/font/google";
import { ThemeProvider } from "@/shared/ThemeProvider";
import "./globals.css";

const redHat = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joyce Eboh — Senior Product Designer",
  description:
    "Senior product designer specialising in fintech, SaaS and edtech — crafting intuitive digital experiences through research-led design thinking.",
  openGraph: {
    title: "Joyce Eboh — Senior Product Designer",
    description:
      "Senior product designer specialising in fintech, SaaS and edtech.",
    type: "website",
  },
};

// Prevents flash of wrong theme on first load
const themeScript = `
  (function () {
    var t = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHat.variable} ${epilogue.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
