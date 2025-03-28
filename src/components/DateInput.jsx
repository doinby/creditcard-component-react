export default function DateInput() {
	return (
		<div className='grid grid-cols-2'>
			<label className='col-span-2'>EXP. Date (MM/YY)</label>
			<input type='number' name='month' className='w-16' />
			<input type='number' name='year' className='w-16' />
		</div>
	);
}
