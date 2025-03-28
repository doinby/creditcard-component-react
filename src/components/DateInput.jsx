import { useState } from 'react';

export default function DateInput() {
	const [monthInput, setMonthInput] = useState('');
	const [yearInput, setYearInput] = useState('');
	const [errMsg, setErrMsg] = useState('');

	function handleMonthChange(e) {
		const numberRegex = /^\d+$/;
		const value = e.target.value;
		setErrMsg('');

		if (!numberRegex.test(value)) {
			return setErrMsg('not a number');
		}

		return setMonthInput(value);
	}

	function handleYearChange(e) {
		const numberRegex = /^\d+$/;
		const value = e.target.value;
		setErrMsg('');

		if (!numberRegex.test(value)) {
			return setErrMsg('not a number');
		}

		return setYearInput(value);
	}

	return (
		<div className='grid grid-cols-2'>
			<label className='col-span-2'>EXP. Date (MM/YY)</label>
			<input
				// type='number'
				name='month'
				className='w-16'
				onChange={handleMonthChange}
			/>
			<input
				// type='number'
				name='year'
				className='w-16'
				onChange={handleYearChange}
			/>
			<p className={`${errMsg ? 'opacity-100' : 'opacity-0'} col-span-2`}>
				{errMsg ? errMsg : 'placeholder'}
			</p>
		</div>
	);
}
