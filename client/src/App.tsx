import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
