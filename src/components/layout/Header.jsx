const Header = ({ title = "Furever Friends Rescue", imageUrl }) => {
  return (
    <header
      className="header"
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
    >
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
