import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./site-header";

export const metadata: Metadata = {
  title: "Sarah Szu",
  description: "Personal site of Sarah Szu, a senior at UH Mānoa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
