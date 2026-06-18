import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import MainLayout from "../layout/MainLayout";
import UserDetails from "../pages/UserDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* Root route (Vercel fix) */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users/:id" element={<UserDetails />} />

      </Route>
    </Routes>
  );
}