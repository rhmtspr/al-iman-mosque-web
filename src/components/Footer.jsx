// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Al-Iman Mosque</h2>
          <p className="text-gray-400 text-sm">
            A peaceful place to learn, pray, and grow together in the light of Qur'an & Sunnah.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Programs</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services or Info */}
        <div>
          <h3 className="font-semibold mb-2">Programs</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Prayer Times</a></li>
            <li><a href="#" className="hover:text-white">Islamic Classes</a></li>
            <li><a href="#" className="hover:text-white">Community Events</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#"><FaFacebook className="hover:text-white" size={20} /></a>
            <a href="#"><FaInstagram className="hover:text-white" size={20} /></a>
            <a href="#"><FaTwitter className="hover:text-white" size={20} /></a>
            <a href="#"><FaYoutube className="hover:text-white" size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Al-Iman Mosque. All rights reserved.<br /> Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=42914">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=42914">Pixabay</a>
      </div>
    </footer>
  );
}
