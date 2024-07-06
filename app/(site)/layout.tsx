"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import { Navigation } from "@/components/navigation";
import { NearContext } from "../context";
import { useEffect, useState } from "react";
import { Wallet } from "@/app/(site)/wallets/near";
import { NetworkId, HelloNearContract } from "@/app/(site)/config";
const wallet = new Wallet({
  networkId: NetworkId,
  createAccessKeyFor: HelloNearContract,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [signedAccountId, setSignedAccountId] = useState("");

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <NearContext.Provider value={{ wallet, signedAccountId }}>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
          >
            <Lines />
            <Header />

            <ToasterContext />

            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </NearContext.Provider>
      </body>
    </html>
  );
}
