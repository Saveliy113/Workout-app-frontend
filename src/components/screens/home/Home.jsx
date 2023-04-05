import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import Button from '../../ui/button/Button';

import Layout from '../../layout/Layout';

import styles from './Home.module.scss';

function Home() {
	const navigate = useNavigate();
	const { isAuth } = useAuth();
	return (
		<Layout bgImage="/images/home-bg.jpg">
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/* Counters */}
		</Layout>
	);
}

export default Home;
