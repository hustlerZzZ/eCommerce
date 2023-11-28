import Navbar from "./components/Navbar/Navbar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import Categories from "./Pages/Categories/Categories.tsx";
import Rewards from "./Pages/Rewards/Rewards.tsx";
import Deals from "./Pages/Deals/Deals.tsx";
import Cart from "./Pages/Cart/Cart.tsx";
import Account from "./Pages/Account/Account.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
