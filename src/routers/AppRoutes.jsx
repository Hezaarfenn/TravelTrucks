import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));

export const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
