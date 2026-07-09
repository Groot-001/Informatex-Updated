import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";

const pages = [
  {
    index: true,
    element: <HomePage />,
  },
  //   {
  //     path: "services",
  //     element: <ServicesPage />,
  //   },
  //   {
  //     path: "products",
  //     element: <ProductsPage />,
  //   },
  //   {
  //     path: "about",
  //     element: <AboutPage />,
  //   },
  //   {
  //     path: "contact",
  //     element: <ContactPage />,
  //   },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: pages,
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,

//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },

//       //   {
//       //     path: "services",
//       //     element: <ServicesPage />,
//       //   },

//       //   {
//       //     path: "products",
//       //     element: <ProductsPage />,
//       //   },

//       //   {
//       //     path: "about",
//       //     element: <AboutPage />,
//       //   },

//       //   {
//       //     path: "contact",
//       //     element: <ContactPage />,
//       //   },
//     ],
//   },
// ]);
