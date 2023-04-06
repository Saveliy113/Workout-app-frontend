import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import WorkoutService from '../../../services/workout/workout.service';

export const useNewWorkout = () => {
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create workout'],
		(body) => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exerciseIds: []
				});
			}
		}
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	});

	const onSubmit = (data) => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map((exercise) => exercise.value)
		});
	};

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			isLoading,
			isSuccess,
			error,
			control,
			onSubmit
		}),
		[errors, error, isLoading, isSuccess]
	);
};
