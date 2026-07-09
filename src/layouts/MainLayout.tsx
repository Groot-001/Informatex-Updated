import { Outlet } from "react-router-dom";

import Navbar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
