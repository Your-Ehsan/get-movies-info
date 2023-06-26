import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import MainLayout from "./layout/main_layout";
import {  fetchRequiredReq } from "./api";
import Details from "./components/details";

// import.meta.env.VITE_API_KEY}&s=${title}`
// console.log(import.meta.env.VITE_API_KEY);
function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route element={<MainLayout />}>
              <Route index element={<Home />}/>
              <Route path="about" element={<About />} />
              <Route
                path=":id"
                loader={fetchRequiredReq}
                element={<Details />}
              />
            </Route>
          )
        )}
      />
    </>
  );
}

export default App;
