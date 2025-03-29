import TextInput from './TextInput';
import DateInput from './DateInput';
import { useState } from 'react';

export default function CardForm() {
	const [name, setName] = useState('');
	const [ccNumber, setCcNumber] = useState(0);
	const [cvcNumber, setCvcNumber] = useState(0);
	const [expData, setExpDate] = useState('');

	return (
		<form className='w-full flex flex-col gap-8 justify-center items-center'>
			<div className='p-8 flex flex-col'>
				<TextInput
					label='Card Holder Name'
					placeholder='e.g. Jane Appleseed'
					type='text'
					name='name'
					setData={setName}
				/>
				<TextInput
					label='Card Number'
					placeholder=''
					type='number'
					name='cc-number'
					setData={setCcNumber}
				/>
				<div className='flex'>
					<DateInput setData={setExpDate} />
					<TextInput
						label='CVC'
						placeholder=''
						type='number'
						name='cvc-number'
						setData={setCvcNumber}
						// inputWidth={24}
					/>
				</div>
				<button type='submit' className='self-center bg-red-950 text-white'>
					Confirm
				</button>
			</div>
		</form>
	);
}
