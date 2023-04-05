import { IoMdArrowBack } from 'react-icons/io';
import { TfiUser } from 'react-icons/tfi';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import Hamburger from '../hamburger/Hamburger';

import styles from './Header.module.scss';

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button
					onClick={() => {
						navigate(isAuth ? backLink : '/auth');
					}}
				>
					<IoMdArrowBack />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile');
					}}
				>
					<TfiUser />
				</button>
			)}

			{isAuth && <Hamburger />}
		</header>
	);
};

export default Header;
