import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useCompleteLog } from './hooks/useCompleteLog';
import { useExerciseLog } from './hooks/useExerciseLog';
import { useUpdateLogTime } from './hooks/useUpdateLogTime';

import Loader from '../../ui/Loader';
import Alert from '../../ui/alert/Alert';

import Header from '../../layout/header/Header';

import ExerciseErrors from './ExerciseErrors';
import styles from './ExerciseLog.module.scss';
import HeaderExerciseLog from './HeaderExerciseLog';
import TableHeader from './table/TableHeader';
import TableRow from './table/TableRow';

const ExerciseLog = () => {
	const {
		exerciseLog,
		isSuccess,
		isLoading,
		error,
		onChangeState,
		getState,
		toggleTime
	} = useExerciseLog();

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseErrors errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map((item) => (
							<TableRow
								onChangeState={onChangeState}
								getState={getState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
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
