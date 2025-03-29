import { useState } from 'react';

export default function DateInput({ setData = '00/00' }) {
	const [monthInput, setMonthInput] = useState(0);
	// console.log('monthInput:', monthInput);
	const [yearInput, setYearInput] = useState(0);
	const [errMsg, setErrMsg] = useState('');

	function handleMonthChange(e) {
		return setMonthInput(e.target.value);
	}

	function handleYearChange(e) {
		return setYearInput(e.target.value);
	}

	return (
		<div className='grid grid-cols-2'>
			<label className='col-span-2'>EXP. Date (MM/YY)</label>
			<input
				type='number'
				name='month'
				min='1'
				max='12'
				className='w-16'
				onChange={handleMonthChange}
				required
			/>
			<input
				type='number'
				name='year'
				min='1000'
				max='2500'
				className='w-16'
				onChange={handleYearChange}
				required
			/>
			<p className={`${errMsg ? 'opacity-100' : 'opacity-0'} col-span-2`}>
				{errMsg ? errMsg : 'placeholder'}
			</p>
		</div>
	);
}
