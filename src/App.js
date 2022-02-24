import './App.css';
import { useState } from 'react';
import { Values } from './constants/Values';
import SliderInput from './components/SliderInput';
import Button from './components/Button';
import FixedFeeCalculator from './components/FixedFeeCalculator';

function App() {
	const [creditAmountValue, setCreditAmountValue] = useState(Values.MIN_CREDIT_AMOUNT_VALUE);
	const [creditMonthTerm, setCreditMonthTerm] = useState(Values.MIN_CREDIT_MONTH_TERM);
	const fixedFeePerMonth = (creditAmountValue / creditMonthTerm).toFixed(2);

	return (
		<main className="App">
			<div className="container">
				<h1 className="title">Simulá tu crédito</h1>
				<SliderInput
					currency
					label={'monto total'}
					onChange={setCreditAmountValue}
					value={creditAmountValue}
					minValue={Values.MIN_CREDIT_AMOUNT_VALUE}
					maxValue={Values.MAX_CREDIT_AMOUNT_VALUE}
				/>
				<SliderInput
					label={'plazo'}
					onChange={setCreditMonthTerm}
					value={creditMonthTerm}
					minValue={Values.MIN_CREDIT_MONTH_TERM}
					maxValue={Values.MAX_CREDIT_MONTH_TERM}
				/>
				<FixedFeeCalculator text="cuota fija por mes" value={fixedFeePerMonth} />
				<div className="button-container">
					<Button text="obtené crédito" />
					<Button secondaryVariant text="ver detalle de cuotas" />
				</div>
			</div>
		</main>
	);
}

export default App;
