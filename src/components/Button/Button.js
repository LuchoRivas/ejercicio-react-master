const Button = (props) => {
	const { text = 'TEXT_VALUE', secondaryVariant = false } = props;

	return (
		<button type="button" className={`${secondaryVariant ? 'secondary-btn' : 'main-btn'} styled-btn`}>
			{text}
		</button>
	);
};

export default Button;
