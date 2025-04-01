import CardForm from './components/CardForm';
import bg from './assets/images/bg-main-desktop.png';
import ccFront from './assets/images/bg-card-front.png';
import ccBack from './assets/images/bg-card-back.png';
import cardLogo from './assets/images/card-logo.svg';

export default function App() {
	return (
		<>
			<div className='relative w-[40%] flex'>
				<div className='absolute right-[-10em] flex flex-col gap-y-6 items-start self-center'>
					<div className='relative justify-self-start'>
						<div className='absolute bottom-0 w-full text-white'>
							<p>1234567890</p>
							<div className='flex justify-between'>
								<p>First Last Name</p>
								<p>00/00</p>
							</div>
						</div>
						<img className='absolute top-0 m-5 h-[36px]' src={cardLogo} />
						<img className='max-h-[180px]' src={ccFront} />
					</div>
					<div className='relative pl-16'>
						<img className='max-h-[180px]' src={ccBack} />
					</div>
				</div>
				<img className='w-full' src={bg} />
			</div>
			<CardForm />
		</>
	);
}
