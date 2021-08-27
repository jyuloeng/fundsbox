import React, { lazy } from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Layout from "../layout";
import PageLoading from "../components/PageLoading";

const HomePage = lazy(() => import("../pages/HomePage"));
const SelfSelectedPage = lazy(() => import("../pages/SelfSelectedPage"));
const MarketPage = lazy(() => import("../pages/MarketPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const RootRouter: React.FC = () => {
  return (
    <React.Suspense fallback={<PageLoading />}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="self" element={<SelfSelectedPage />} />
            <Route path="market" element={<MarketPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </React.Suspense>
  );
};

export default RootRouter;
