import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Kyle Schoenberger</h1>
      <img src={coverImage} alt="image of a phone"></img>
      {props.children}
    </header>
  );
}

export default Header;
