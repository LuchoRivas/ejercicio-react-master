import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { MarkStyle, SliderConfigStyle } from '../../constants/SliderConfig';
import { CurrencyHelper } from '../../helpers/CurrencyHelper';

const SliderInput = (props) => {
	const { value, minValue, maxValue, label, currency = false, onChange } = props;

	const marks = {
		[minValue]: {
			style: MarkStyle,
			label: <span>{`${currency ? CurrencyHelper.numberFormat(minValue) : minValue}`}</span>
		},
		[maxValue]: {
			style: MarkStyle,
			label: <span>{`${currency ? CurrencyHelper.numberFormat(maxValue) : maxValue}`}</span>
		}
	};

	return (
		<div className="slider-input">
			{label && <label className="slider-input-label">{label}</label>}
			<div className="slider-input-container">
				{currency && <i className="currency-simbol">$</i>}
				<input
					className="styled-input"
					onChange={(ev) => onChange(ev.target.value <= maxValue ? ev.target.value : maxValue)}
					value={value}
					type={'number'}
				/>
			</div>
			<Slider
				className="slider-styles"
				marks={marks}
				value={value}
				onChange={(val) => onChange(val)}
				min={minValue}
				max={maxValue}
				dotStyle={SliderConfigStyle.dotStyle}
				railStyle={SliderConfigStyle.railStyle}
				handleStyle={SliderConfigStyle.handleStyle}
			/>
		</div>
	);
};

export default SliderInput;
