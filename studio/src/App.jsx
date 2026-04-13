import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import LoadingScreen from "./Components/LoadingScreen";

// ─── Route-level code splitting ──────────────────────────────────────────────
// Each page chunk is only downloaded when the user navigates to that route.
const Body       = lazy(() => import("./Components/Body"));
const AboutUs    = lazy(() => import("./Components/AboutUs"));
const Portfolio  = lazy(() => import("./Components/Portfolio"));
const Contact    = lazy(() => import("./Components/Contact"));
const WeddingBlog = lazy(() => import("./Components/WeddingBlog"));

// Lightweight per-route fallback — Navbar/Footer remain visible
function PageFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.15)",
          borderTopColor: "#fff",
          animation: "ms-spin 1s linear infinite",
        }}
      />
      <style>{`@keyframes ms-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {/* Full-screen splash — hides after ~1.8 s */}
      <LoadingScreen onDone={() => setLoadingDone(true)} />

      {/* App shell — render immediately so fonts/assets start loading */}
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/"              element={<Body />} />
            <Route path="/aboutUs"       element={<AboutUs />} />
            <Route path="/portfolio"     element={<Portfolio />} />
            <Route path="/contact"       element={<Contact />} />
            <Route path="/wedding/:slug" element={<WeddingBlog />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}
