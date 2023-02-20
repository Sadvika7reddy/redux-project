import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../store/index';
const Header = () => {
  const dispatch=useDispatch();
  const userLoggin=useSelector(state=>state.auth.isAuthenticated)
  const Eventhandler=(event)=>{
    event.preventDefault();
    dispatch(AuthAction.logout());

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {userLoggin&&
      <nav>
       
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={Eventhandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
