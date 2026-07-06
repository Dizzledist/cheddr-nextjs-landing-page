import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Cheddr",
  description: "Image-led landing page for Cheddr collections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EHGVEHBJLZ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-EHGVEHBJLZ", {
              cookie_domain: "auto"
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
