import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login.js";
import { Layout } from "./components/Layout.js";
import { Knowledge } from "./pages/Knowledge.js";
import { BrainChat } from "./pages/BrainChat.js";
import { ModulePage } from "./pages/ModulePage.js";
import { Admin } from "./pages/Admin.js";
import { Activity } from "./pages/Activity.js";
import { useAuth } from "./state/auth.js";
import "./index.css";

function Guard({ children }: { children: React.ReactNode }) {
  const token = useAuth((s) => s.token);
  return token ? <>{children}</> : <Navigate to="/login" replace />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Guard>
              <Layout />
            </Guard>
          }
        >
          <Route index element={<Knowledge />} />
          <Route path="chat" element={<BrainChat />} />
          <Route path="modules/:slug" element={<ModulePage />} />
          <Route path="admin" element={<Admin />} />
          <Route path="activity" element={<Activity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
