import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages';
import About from './pages/about.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
