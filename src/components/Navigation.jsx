import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav class="w-full flex justify-between px-md">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/gallery">Gallery</Link>
    </nav>
  );
}
