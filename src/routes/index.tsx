import React from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

// const HomePage = lazy(() => import("../pages/HomePage"));
// const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const RootRouter: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default RootRouter;
