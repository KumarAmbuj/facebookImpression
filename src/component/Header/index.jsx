import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header ">
      <Link to="/">Facebook Post Impressions</Link>
    </div>
  );
}
export default Header;
