import React from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

import Loader from '../../ui/Loader';

import { useGetExercises } from './useGetExercises';

const ExercisesSelect = ({ control }) => {
	const { data, isLoading } = useGetExercises();

	if (isLoading) 	return <Loader />;

	return (
		<Controller
			name="exerciseIds"
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					classNamePrefix="select2-selection"
					placeholder="Exercises..."
					options={data.map((exercise) => ({
						value: exercise.id,
						label: exercise.name
					}))}
					value={value}
					onChange={onChange}
					isMulti
				/>
			)}
		/>
	);
};

export default ExercisesSelect;
