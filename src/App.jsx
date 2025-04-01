import { useState } from 'react';
import CardForm from './components/CardForm';
import bg from './assets/images/bg-main-desktop.png';
import ccFront from './assets/images/bg-card-front.png';
import ccBack from './assets/images/bg-card-back.png';
import cardLogo from './assets/images/card-logo.svg';

export default function App() {
	const [name, setName] = useState('First Last Name');
	const [ccNumber, setCcNumber] = useState('0000 0000 0000 0000');
	const [cvcNumber, setCvcNumber] = useState(123);
	const [expData, setExpDate] = useState('00/00');

	return (
		<>
			<div className='relative w-[40%] flex'>
				<div className='absolute right-[-10em] flex flex-col gap-y-6 items-start self-center'>
					<div className='relative justify-self-start'>
						<div className='absolute bottom-0 w-full text-white'>
							<p>{ccNumber}</p>
							<div className='flex justify-between'>
								<p>{name}</p>
								<p>{expData}</p>
							</div>
						</div>
						<img className='absolute top-0 m-5 h-[36px]' src={cardLogo} />
						<img className='max-h-[180px]' src={ccFront} />
					</div>
					<div className='relative pl-16 flex items-center'>
						<p className='absolute right-10 text-white'>{cvcNumber}</p>
						<img className='max-h-[180px]' src={ccBack} />
					</div>
				</div>
				<img className='w-full' src={bg} />
			</div>
			<CardForm
				setName={setName}
				setCcNumber={setCcNumber}
				setCvcNumber={setCvcNumber}
				setExpDate={setExpDate}
			/>
		</>
	);
}
