import TextInput from './TextInput';
import DateInput from './DateInput';

export default function Form() {
	return (
		<form className='w-full flex flex-col gap-8 justify-center items-center'>
			<div className='p-8 flex flex-col'>
				<TextInput
					label='Card Holder Name'
					placeholder='e.g. Jane Appleseed'
					// type='text'
					name='name'
				/>
				<TextInput
					label='Card Number'
					placeholder=''
					// type='number'
					name='cc-number'
				/>
				<div className='flex'>
					<DateInput />
					<TextInput
						label='CVC'
						placeholder=''
						// type='number'
						name='cvc-number'
						inputWidth={24}
					/>
				</div>
				<button type='submit' className='self-center bg-red-950 text-white'>
					Confirm
				</button>
			</div>
		</form>
	);
}
