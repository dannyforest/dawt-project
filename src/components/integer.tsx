import React from 'react';
interface IntegerProps {
	number: number;
}
export const IntegerComponent = ({ number }: IntegerProps) => {
	let backgroundColor = "lightblue";
	let fontWeight = "normal";
	if (number % 2 === 0) { 
		backgroundColor = "lightgreen";
	}
	if (number > 50) {
		fontWeight = "bold";
	}
    return (
		 <div style={{
			 width: "40px",
			 height: "40px",
			 backgroundColor: backgroundColor,
			 margin: "10px",
			 lineHeight: "40px",
			 fontWeight: fontWeight,
			 display: "inline-block",
		 }}>
			 {number}
        </div>
    )
}
