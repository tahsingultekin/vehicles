import About from "../Pages/About";
import Home from "../Pages/Home";
import Models from "../Pages/Models";
import TestimonialsPage from "../Pages/TestimonialsPage";
import Team from "../Pages/Team";
import Contact from "../Pages/Contact";

export const CustomRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/models",
    element: <Models />,
  },
  {
    path: "/testimonials",
    element: <TestimonialsPage />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
