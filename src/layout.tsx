import { Outlet, Link } from 'react-router-dom';
import NavList from './components/NavList/NavList';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Art tools</Link>
        <NavList />
      </header>
      <main><Outlet /></main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout;