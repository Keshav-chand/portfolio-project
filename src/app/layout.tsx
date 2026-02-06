import type React from "react";
import "~/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { PostHogProvider } from "./_analytics/provider";
import { Toaster } from "sonner";

// Minimal metadata (not required for deployment)
export const metadata = {
  title: "Keshav Chand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body className="bg-[#070707]">
        <PostHogProvider>
          {children}
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}
