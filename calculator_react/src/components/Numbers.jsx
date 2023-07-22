
function Numbers(props) {

	const nums = [];
	const class_name = "nums bg-secondary text-light";

	for (let i = 0; i < 10; i++) {
		nums.push(<button className={class_name} onClick={() => props.onClick(i)}>{i}</button>);
	}
	nums.reverse();
	nums.push(<button className={class_name} onClick={() => props.onClick(".")}>.</button>);

	nums.push(<button className={class_name} onClick={props.onEqual}>=</button>);

	return <div id="nums">{nums}</div>;
}

export default Numbers;