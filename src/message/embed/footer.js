import React from 'react'
export default class EmbedFooter extends React.Component {
	render() {
		return (<div 
			className="embedFooter embedMargin"
		>{this.props.icon && <img 
			alt="" 
			className="embedFooterIcon" 
			src={this.props.icon}
		/>}<span 
			className="embedFooterText"
		>{this.props.text}{this.props.text && this.props.time && <span 
			className="embedFooterSeparator"
		>•</span>}{this.props.time}</span></div>)
	}
}