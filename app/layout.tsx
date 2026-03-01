import "./globals.css";
import Navbar from "./components/Navbar";
import PayoneerFooter from "./components/FooterSection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >{children}</main>
        <PayoneerFooter />
      </body>
    </html>
  );
}