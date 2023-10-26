import { LOGO_URL } from "../utils/imgUrl";

const HeaderComponent = () => {
  return (
    <div className="Header">
      <div className="app-logo-container">
        <img className="logo" src={LOGO_URL} /> {/* // using named url  */}
      </div>
      <div className="nav-items">
        <ul>
          <li>Home 🏠</li>
          <li>About ❔</li>
          <li>Contact 📞</li>
          <li>Cart 🗑️ </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
