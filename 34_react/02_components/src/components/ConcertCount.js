import React from 'react';
import '../stylesheets/ui.scss';

export const ConcertCount = React.createClass({
	render() {
		return (
			<div className="concert-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="heatwave-days">
					<span>{this.props.heatwave}</span>
					<span>days</span>
				</div>
				<div className="rainy-days">
					<span>{this.props.rainy}</span>
					<span>days</span>
				</div>
				<div>
					<span>{this.props.goal}</span>
				</div>
			</div>
		);
	}
});