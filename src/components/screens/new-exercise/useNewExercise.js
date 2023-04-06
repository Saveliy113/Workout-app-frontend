import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import exerciseService from '../../../services/exercise/exercise.service';

export const useNewExercise = () => {
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		(body) => exerciseService.create(body),
		{
			onSuccess: () => {
				reset();
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
		mutate(data);
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
