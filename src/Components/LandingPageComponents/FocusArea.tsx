import React from "react";
import FocusAreaData from "@/Constants/FocusArea";

const FocusArea = () => {
	return (
		<>
			{FocusAreaData.map((item: any, index: number) => {
				return (
					<div key={index}>
						<p>{item.name}</p>
					</div>
				);
			})}
		</>
	);
};

export default FocusArea;
