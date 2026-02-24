import "./globals.css";


import Navbar from "./components/Navbar";
import PayoneerFooter from "./components/PayoneerFooter";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
    
          
          <Navbar />
          
          {children}
      <PayoneerFooter /> 
      </body>
      
    </html>
  );
}
