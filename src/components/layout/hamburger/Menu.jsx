import styles from './Hamburger.module.scss';

const Menu = () => {
  return (
    <nav className={`${styles.menu} ${isComponentVisible ? styles.show : ''}`}>
      <ul>
        {menu.map((item, index) => (
          <li key={`_menu_${index}`}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        <li>
          <button onClick={handleLogout}></button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
