import { useState } from 'react';

export default function FormInput({
	label = 'Input',
	placeholder = '',
	type = 'text',
	name = 'input',
	inputWidth,
}) {
	const [input, setInput] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const onChangeParameter = name.includes('number')
		? handleNumberChange
		: handleTextChange;

	function handleTextChange(e) {
		return setInput(e.target.value);
	}

	function handleNumberChange(e) {
		const numberRegex = /^\d+$/;
		const value = e.target.value;
		setErrMsg('');

		if (!numberRegex.test(value)) {
			return setErrMsg('not a number');
		}

		return setInput(value);
	}

	return (
		<div className='flex flex-col relative'>
			<label>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				className={`w-${inputWidth}`}
				onChange={onChangeParameter}
			/>
			<p className={`${errMsg ? 'opacity-100' : 'opacity-0'}`}>
				{errMsg ? errMsg : 'placeholder'}
			</p>
		</div>
	);
}
