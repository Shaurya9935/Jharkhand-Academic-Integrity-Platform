
import "./globals.css";
import PublicNavbar from "@/components/PublicNavbar"; // Create this component

export const metadata = {
  title: "Jharkhand Academic Integrity Platform",
  description: "This is a platform to ensure academic integrity in Jharkhand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"/>
      </head>
      <body>
        {/* <PublicNavbar /> */}
        {children}
      </body>
    </html>
  );
}