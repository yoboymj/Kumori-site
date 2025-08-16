import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import AdminPanel from "./admin/AdminPanel";
import OwnerPanel from "./owner/OwnerPanel";
import { AuthProvider } from "./context/AuthContext";
import { RBACProvider } from "./context/RBACContext";
import { SiteLiveProvider } from "./context/SiteLiveContext";
import PopUpDisplay from "./components/PopUpDisplay";

export default function App() {
  return (
    <AuthProvider>
      <RBACProvider>
        <SiteLiveProvider>
          <Router>
            <div className="bg-black text-white min-h-screen flex flex-col">
              <Navbar />
              <PopUpDisplay />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/admin/*" element={<AdminPanel />} />
                  <Route path="/owner/*" element={<OwnerPanel />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </SiteLiveProvider>
      </RBACProvider>
    </AuthProvider>
  );
}