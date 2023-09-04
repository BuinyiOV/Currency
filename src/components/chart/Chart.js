import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {

	render() {

		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				fontFamily: "Libre Baskerville",
				text: `${this.props.chartData}` //`${this.props.mvpCurrency.mvpCurrency}`
			},
			axisX:{
				valueFormatString: "DD MM",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				valueFormatString: "0.00",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return CanvasJS.formatNumber(e.value, "0.00");
					}
				}
			},
			data: [{
				color: "#0d6efd",
				type: "area",
				xValueFormatString: "DD MMM",
				yValueFormatString: "0.00",
				dataPoints: this.props.chartData
			}]
		}

		return (
			<div>
				<CanvasJSChart options = {options}
									// mvpCurrency={this.props.mvpCurrency}
									chartData={this.props.chartData}
									/>
			</div>
		);
	}
}

export default Chart;