import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Blog, Contact } from "./pages";

function App() {
  useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
