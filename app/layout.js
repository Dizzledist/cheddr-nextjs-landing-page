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
      <body>
        {children}
        <Script id="cheddr-store-click-tracking" strategy="afterInteractive">
          {`
            (function () {
              function attachCheddrLinkTracking() {
                var cheddrLinks = document.querySelectorAll(
                  'a[href^="https://cheddr.co"], a[href^="https://www.cheddr.co"]'
                );
                cheddrLinks.forEach(function (link) {
                  link.addEventListener("click", function () {
                    gtag("event", "landing_to_store_click", {
                      link_url: link.href,
                      link_text: link.innerText.trim() || "Unlabeled link",
                      landing_page: window.location.pathname
                    });
                  });
                });
              }
              if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", attachCheddrLinkTracking);
              } else {
                attachCheddrLinkTracking();
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
