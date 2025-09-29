import AboutPage from './pages/About';
import CharactersPage from './pages/Characters';
import ContactPage from './pages/Contact';
import Layout from './Layout';
import NotFoundPage from './pages/NotFound';

// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        Component: CharactersPage
      },
      {
        // about page
        path: "/about",
        Component: AboutPage
      },
      {
        // contact page
        path: "/contact",
        Component: ContactPage
      },
      {
        // 404 page
        path: "*",
        Component: NotFoundPage
      }
    ],
  },
]

export default routes;