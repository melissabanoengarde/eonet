import "./globals.css";

export const metadata = {
  title: "eonet",
  description:
    "Integration of the Earth Observatory Natural Event Tracker API by NASA. Developed by Melissa Banoen-Garde.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
