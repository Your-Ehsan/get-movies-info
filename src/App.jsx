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
import { fetchRequiredReq } from "./api";
import Details from "./components/details";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// import.meta.env.VITE_API_KEY}&s=${title}`
// console.log(import.meta.env.VITE_API_KEY);
function App() {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  getPerformance(app);
  return (
    <>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
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
