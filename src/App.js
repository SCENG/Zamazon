import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Newsletter from './components/Newsletter/Newsletter'
import Login from './container/Login/Login'



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Newsletter />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  ]);
  

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
