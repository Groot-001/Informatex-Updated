import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/layout/navbar/NavBar";

export default function RootLayout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            min-h-screen
            pt-24
            overflow-x-hidden
          "
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </>
  );
}
