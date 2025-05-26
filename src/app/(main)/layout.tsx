import "@/css/satoshi.css";
import "@/css/style.css";
import "@/style/index.scss"
import "@/style/dialog.scss"

import { Sidebar } from "@/components/Layouts/sidebar";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: "%s | N-One Data",
    default: "N-One Data",
  },
  description:
    "N-One Data",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader color="#5750F1" showSpinner={false} />

          <div className="flex min-h-screen">
            <Sidebar />

            <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
              <Header />

              <main className="isolate mx-auto w-full max-w-screen-3xl overflow-hidden px-2 pt-2" style={{height:"calc(100vh - 58px)"}}>
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
