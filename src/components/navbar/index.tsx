import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE } from "../../routes/configs";
import { useAuth } from "../../hooks/useAuth";

const Navigation = styled.nav`
    height: max-content;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    text-align: center;
    gap: 10px
`

const Button = styled.button`
    width: 140px;
    height: 50px;
    border: 0;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
`

export const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth();

  const handleLogin = () => {
    setIsAuth(!isAuth);
  }

  return (
    <header>
      <Navigation>
        <NavLink className={'link'} to={HOME_ROUTE}>Home</NavLink>
        <NavLink className={'link'} to={ABOUT_ROUTE}>About</NavLink>
        <NavLink className={'link'} to={CONTACTS_ROUTE}>Contacts</NavLink>
        {isAuth && <NavLink className={'link'} to={PRODUCTS_ROUTE}>Products</NavLink>}
        <Button onClick={handleLogin}>{!isAuth ? 'Войти' : 'Выйти'}</Button>
      </Navigation>
    </header>
  )
}