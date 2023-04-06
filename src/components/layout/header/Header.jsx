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
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
							onClick={() => {
								navigate('/profile');
							}}
						>
							<TfiUser />
						</button>
					) : (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth');
							}}
						>
							<IoMdArrowBack />
						</button>
					)}

					<Hamburger />
				</>
			)}
		</header>
	);
};

export default Header;
