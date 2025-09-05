import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getLoggedInUser } from "@/lib/auth";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jharkhand Academic Integrity Platform",
  description: "This is a platform to ensure academic integrity in Jharkhand",
};

export default async function RootLayout({ children }) {

  const user = await getLoggedInUser();
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-300 opacity-20 blur-[100px]"></div>
        </div>
        {/* Navbar at the top */}
        <Navbar user={user} />
        <div className="flex h-[calc(100vh-64px)] overflow-hidden">
          <div className="w-1/5 h-full">
            <Sidebar />
          </div>
          <div className="flex-1 h-full overflow-auto">
            {children}
          </div>
        </div>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
