// import { Outlet } from "react-router-dom";

// import Navbar from "@/components/layout/navbar/NavBar";
// import Footer from "@/components/layout/footer/Footer";

// export default function MainLayout() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <Navbar />

//       <main className="flex-1">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <ScrollToTop />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="flex-1 pt-24"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
