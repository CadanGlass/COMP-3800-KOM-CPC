import { Link } from 'react-router-dom';
import './SysButton.css';

export default function SysButton(title, link) {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <button className="sys-btn">
        <span>{title}</span>
      </button>
    </Link>
  );
}
