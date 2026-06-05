import "./globals.css";

export const metadata = {
  title: "Cheddr",
  description: "Image-led landing page for Cheddr collections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
