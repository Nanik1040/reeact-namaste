const Logo = () => (
  <a href="/">
    <img
      alt="logo"
      src="https://10619-2.s.cdn12.com/rests/original/109_511243776.jpg"
      className="logo"
    ></img>
  </a>
);
export const HeaderComponent = () => {
  return (
    <div className="header" style={{ backgroundColor: "white" }}>
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
