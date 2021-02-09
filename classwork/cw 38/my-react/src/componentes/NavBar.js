import './css/NavBar.css';


const NavBar = () => {
  return (
    <div className ="NavBar">
      <ul>
        <li className="item"><a href="#">Profile</a></li>
        <li className="item"><a href="#">Message</a></li>
        <li className="item"><a href="#">News</a></li>
        <li className="item"><a href="#">Music</a></li>
        <li className="item"><a href="#">Settings</a></li>
      </ul>
       </div>
  );
}

export default NavBar;
