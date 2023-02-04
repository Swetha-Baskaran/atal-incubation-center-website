"use client";
import {useEffect, useState, useRef} from "react";
import numberData from "@/Constants/animCount";
import classes from "./style.module.scss";
import "./countBorderStyles.css"

const Number = ({start = 0, end, timer = 50, text, border}: any) => {
	const [state, setState] = useState(0);
	const ref = useRef(start);
	const accumulator = end / 200;
	const updateCounterState = () => {
		if (ref.current < end) {
			const result = Math.ceil(ref.current + accumulator);
			if (result > end) return setState(end);
			setState(result);
			ref.current = result;
		}
		setTimeout(updateCounterState, timer);
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			updateCounterState();
		}
		isMounted = false
	}, [end, start]);

	return (
		<div className={`${classes.items} ${border}`} >
			<span className={classes["span"]}>{state}+</span>
			<p className={classes["p"]}>{text}</p>
		</div>
	);
};

const Incubation = () => {
	return (
		<>
			<div className={classes["wave-container"]}>
				<div className={classes["wave-container-content"]}>
					<h3 className={classes["h3"]}>Incubation Number</h3>
					<div className={classes["box"]}>
						{numberData.map((item, index) => (
							<Number
								end={item.number}
								start={0}
								timer={10}
								text={item.text}
								key={item.number + index}
								border={item.border}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Incubation;
