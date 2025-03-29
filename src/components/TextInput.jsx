import { useState } from 'react';

export default function FormInput({
	label = 'Input',
	placeholder = '',
	type = 'text',
	name = 'input',
	inputWidth,
	setData,
}) {
	const [errMsg, setErrMsg] = useState('');

	function handleChange(e) {
		return setData(e.target.value);
	}

	return (
		<div className='flex flex-col relative'>
			<label>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				className={`w-${inputWidth}`}
				onChange={handleChange}
				required
			/>
			<p className={`${errMsg ? 'opacity-100' : 'opacity-0'} text-red-400`}>
				{errMsg ? errMsg : 'placeholder'}
			</p>
		</div>
	);
}
