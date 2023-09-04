import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {

	render() {

		const options = {
			animationEnabled: true,
			theme: "light2",

			axisX:{
				valueFormatString: "DD MM",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				valueFormatString: "0.0000",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return CanvasJS.formatNumber(e.value, "0.0000");
					}
				}
			},
			data: [{
				color: "#0d6efd",
				type: "area",
				xValueFormatString: "DD MMM",
				yValueFormatString: "0.0000",
				dataPoints: this.props.chartData
			}]
		}

		return (
			<div className='mb-5'>
				<CanvasJSChart options = {options}
									chartData={this.props.chartData}
									chartName={this.props.chartName}
									/>
			</div>
		);
	}
}

export default Chart;