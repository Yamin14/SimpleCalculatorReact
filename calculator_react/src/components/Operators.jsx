
function Operators (props) {

	const basics = ["+", "-", "×", "÷"];

	const buttons = [];

	for (let i = 0; i < basics.length; i++) {
		buttons.push(<button className='operators bg-warning text-dark' onClick={() => props.onClick(basics[i])}>{basics[i]}</button>);
	}

	return <div id="operators">{buttons}</div>;
}

export default Operators;