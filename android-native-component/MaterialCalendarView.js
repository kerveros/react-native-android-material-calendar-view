import React, { Component, PropTypes } from 'react';
import { NativeModules, requireNativeComponent, View, Text } from 'react-native';

class MaterialCalendarComponent extends Component {

	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
	}

	_onChange(event) {
		if(!this.props.onChangeMessage) {
			return;
		}
		this.props.onChangeMessage(event.nativeEvent);
	}

	render() {
		return <MaterialCalendarView {...this.props} onChange={this._onChange} />;
	}
}

MaterialCalendarComponent.propTypes = {
	day: PropTypes.number,
	month: PropTypes.number,
	year: PropTypes.number,
	onChangeMessage: PropTypes.func,
	...View.propTypes,
}

const MaterialCalendarView = requireNativeComponent(`MaterialCalendarView`, MaterialCalendarComponent, {
	nativeOnly: { 
		onChange: true,
	},
});

export default MaterialCalendarComponent;
