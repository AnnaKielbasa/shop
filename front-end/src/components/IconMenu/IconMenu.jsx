import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import { Link } from "react-router-dom";

export function IconMenu() {
  return (
    <ul>
      <li>
        <Link to="/ulubione">
          <img src={HEART_ICON} />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} />
        </Link>
      </li>
    </ul>
  );
}
