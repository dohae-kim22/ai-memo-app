import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <NoteList />,
      },
      {
        path: "/notes/:id",
        element: <NoteDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
