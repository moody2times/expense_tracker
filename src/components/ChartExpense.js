import Chart from "./Chart.js";

const ChartExpense = (props) => {
	//dummy calendar data for the chart
	const chartData = [
		{ month: "jan", value: 0 },
		{ month: "feb", value: 0 },
		{ month: "mar", value: 0 },
		{ month: "apr", value: 0 },
		{ month: "may", value: 0 },
		{ month: "jun", value: 0 },
		{ month: "jul", value: 0 },
		{ month: "aug", value: 0 },
		{ month: "sep", value: 0 },
		{ month: "oct", value: 0 },
		{ month: "nov", value: 0 },
		{ month: "dec", value: 0 },
	];

	//loop through the dummy calendar data and map them
	//to the chartExp component
	chartData.forEach((data) => {
		props.chartExp.forEach(
			(item) => item.date.includes(data.month) && (data.value += item.amount)
		);
	});

	const maxData = chartData.map((item) => item.value);
	const maxValue = maxData.reduce((prev, curr) => (prev += curr), 0);

	return chartData.map((c) => (
		<Chart label={c.month} value={c.value} key={c.month} max={maxValue} />
	));
};

export default ChartExpense;
