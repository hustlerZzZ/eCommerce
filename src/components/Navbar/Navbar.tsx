import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex bg-black text-white px-8 py-2 items-center justify-between">
      <div>
        <ul className="flex gap-4 cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories" className="flex items-center justify-center">
              Categories <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li>
            <Link to="/deals">Deals</Link>
          </li>
          <li>
            <Link to="/rewards">CB Rewards</Link>
          </li>
        </ul>
      </div>
      <div>
        <img src="/logo.png" alt="logo" className="w-12" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex relative">
          <input
            type="text"
            className="pl-4 py-1 rounded-full focus:outline-0 text-black"
            placeholder="Search Here..."
          />
          <FiSearch className="absolute text-black text-xl right-3 top-1.5" />
        </div>
        <div>
          <Link to="/cart">
            <CiShoppingCart className="text-2xl cursor-pointer" />
          </Link>
        </div>
        <div>
          <Link to="/account">
            <MdAccountCircle className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
