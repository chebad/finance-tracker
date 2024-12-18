import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "@/compontents/Header";

config.autoAddCss = false;
library.add(fas);

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Simple finance trancker app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <main className="relative h-screen overflow-hidden bg-neutral">
          <div className="flex items-start justify-between">
            <div className="flex w-full flex-col md:space-y-4">
              <Header />
              <div className="h-screen overflow-auto px-4 pb-24 md:px-6">
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
