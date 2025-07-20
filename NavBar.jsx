import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black shadow-md">
      <img src="/logo.png" alt="MetaMindset Labs" className="h-10" />
      <ul className="flex space-x-6 text-sm font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/join">Join</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
