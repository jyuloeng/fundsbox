import React, { lazy } from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Layout from "../layout";
import PageLoading from "../components/PageLoading";

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const RootRouter: React.FC = () => {
  return (
    <React.Suspense fallback={<PageLoading />}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </React.Suspense>
  );
};

export default RootRouter;
