import { Logo } from "components";
import { WELCOME } from "navigation/routes";
import { Link } from "react-router-dom";

import "./header.css";

const Header = ({ time }) => {
  return (
    <nav>
      <Link to={WELCOME}>
        <Logo />
      </Link>
      <div>
        {time && (
          <p>
            Time: {time.hours > 0 && time.hours + "h:"}
            {time.minutes && time.minutes}m:
            {time.seconds && time.seconds}s
          </p>
        )}
      </div>
    </nav>
  );
};

export default Header;
