import { Link } from 'react-router-dom';
import './GetYourShieldButton.css';

export default function GetYourShieldButton() {
  return (
    <Link
      to="https://www.canadahelps.org/en/dn/81226"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="sys-btn">
        <span>Get Your Shield</span>
      </button>
    </Link>
  );
}
