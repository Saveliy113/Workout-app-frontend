import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useExerciseLog } from './hooks/useExerciseLog';

import Loader from '../../ui/Loader';
import Alert from '../../ui/alert/Alert';

import Header from '../../layout/header/Header';

import ExerciseErrors from './ExerciseErrors';
import styles from './ExerciseLog.module.scss';
import HeaderExerciseLog from './HeaderExerciseLog';
import TableHeader from './table/TableHeader';
import TableRow from './table/TableRow';

const ExerciseLog = () => {
	const { exerciseLog, isSuccess, isLoading } = useExerciseLog();

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{/* <ExerciseErrors errors={[errorChange, errorCompleted]} /> */}
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map((item, index) => (
							<TableRow item={item} key={item.id} />
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type="warning" text="Times not found" />
				)}
			</div>
		</>
	);
};

export default ExerciseLog;
