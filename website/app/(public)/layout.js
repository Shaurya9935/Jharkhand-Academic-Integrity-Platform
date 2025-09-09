"use client";
import "../globals.css";
import PublicNavbar from "@/components/PublicNavbar";
import { usePathname } from "next/navigation";

// Define as a component
function PublicNavbarWrapper() {
    const pathname = usePathname();
    const isPublic = pathname === "/" || pathname.startsWith("/login");
    return isPublic ? <PublicNavbar /> : null;
}
export default function PublicLayout({ children }) {
  return (
    <>
      <PublicNavbarWrapper />
      {children}
    </>
  );
}