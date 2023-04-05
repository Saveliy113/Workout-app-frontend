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
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink);
					}}
				>
					<IoMdArrowBack />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth');
					}}
				>
					<TfiUser />
				</button>
			)}

			<Hamburger />
		</header>
	);
};

export default Header;
