
function ClearDel (props) {

	const buttons = [];
	const op = ["AC", "CE"];
	const functions = [props.onAC, props.onCE];

	for (let i = 0; i < 2; i++) {
		buttons.push(<button className='clearDel bg-dark text-light' onClick={functions[i]}>
			{op[i]}
		</button>);
	}

	return <div id="clearDel">{buttons}</div>;
}

export default ClearDel;