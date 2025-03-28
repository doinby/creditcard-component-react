import { useState } from 'react';

export default function FormInput({
	label = 'Input',
	placeholder = '',
	type = 'text',
	name = 'input',
	inputWidth,
}) {
	const [input, setInput] = useState('');
	console.log('input:', input);
	const [errMsg, setErrMsg] = useState('');
	const hasErrMsg = errMsg ? 'opacity-100' : 'opacity-0';

	const numberRegex = /^\d+$/;

	function handleOnChange(e) {
		if (name === 'cc-number' || name === 'cvc-number') {
			return validateNumber(e.target.value);
		}

		return setInput(e.target.value);
	}

	function validateNumber(value) {
		if (!numberRegex.test(value)) {
			return setErrMsg('not number');
		}
	}

	return (
		<div className='flex flex-col relative pb-6'>
			<label>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				className={`w-${inputWidth}`}
				onChange={handleOnChange}
			/>
			<p className={`${hasErrMsg} absolute bottom-0`}>
				{errMsg ? errMsg : 'placeholder'}
			</p>
		</div>
	);
}
