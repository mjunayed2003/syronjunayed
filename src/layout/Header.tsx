import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full py-2 border-b your-element-class text-white">
      <div className="container mx-auto px-10 flex justify-between items-center">
        
        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
        </div>

        {/* Internal Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/about">About Us</Link>
          <span>-</span>
          <Link to="/story">Our Story</Link>
          <span>-</span>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
