import { CurrencyHelper } from '../../helpers/CurrencyHelper';

const FixedFeeCalculator = (props) => {
	const { value, text } = props;

	return (
		<div className="fee-container">
			<span className="fee-text">{text}</span>
			<span className="fee-value">{`${CurrencyHelper.numberFormat(value, 2)}`}</span>
		</div>
	);
};

export default FixedFeeCalculator;
