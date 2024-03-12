import { Routes,Route, Navigate } from "react-router-dom"


// import Home from "./pages/Home"
// import Pricing from "./pages/Pricing"
// import AppLayout from "./pages/AppLayout"
// import Login from "./pages/Login"
// import Product from "./pages/Product"


import NavBar from "./component/NavBar"
import CityList from "./component/CityList"
import CountryList from "./component/CountryList"
import City from "./component/City"
import SpinnerFullPage from "./component/SpinnerFullPage"
import Form from "./component/Form"
import { CityProvider } from "../context/CityProvider"
import { AuthProvider } from "../context/AuthProvider"
import ProtectedRoutes from "./pages/ProtectedRoutes"
import { Suspense, lazy } from "react"

const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));


function App() {

  return (
    <AuthProvider>
      <CityProvider>
        <NavBar />
        <Suspense fallback={<SpinnerFullPage/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/app"
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
              </Suspense>
      </CityProvider>
    </AuthProvider>
  );
}

export default App

