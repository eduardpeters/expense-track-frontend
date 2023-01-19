import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Access from "./Access";
import UserHome from "./UserHome";
import "../styles/App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Access />
    },
    {
        path: "/home",
        element: <UserHome />
    }
]);

function App() {
  return (
    <div className="App">
      <h1>Expense Tacking App</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
