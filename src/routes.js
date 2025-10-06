import AboutPage from './pages/About';
import CharactersPage from './pages/Characters';
import CharacterDetailPage from './pages/CharacterDetailPage';
import ContactPage from './pages/Contact';
import Layout from './Layout';
import NotFoundPage from './pages/NotFound';
import { getCharacters, getCharacterById } from './api/characters-api';

// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        loader: async () => {
          // return characters data from API
          return { characters: getCharacters() };
        },
        Component: CharactersPage
      },
      {
        // character detail page
        path: "/characters/:id",
        loader: async ({ params }) => {
          // get character id from URL params and fetch character details
          const character = getCharacterById(params.id);
          return { character };
        },
        Component: CharacterDetailPage
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