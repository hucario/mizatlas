import React from 'react'
export default class EmbedHeader extends React.Component {
	render() {
		return (<div 
			className={"embedAuthor embedMargin"}
			>{this.props.icon && <img 
				alt="" 
				className="embedAuthorIcon" 
				src={this.props.icon}
				/>}{this.props.link && <a 
					className="anchor anchorUnderlineOnHover embedAuthorNameLink embedLink embedAuthorName" 
					tabIndex="0" 
					href={this.props.link}
					rel="noreferrer noopener" 
					target="_blank" 
					role="button"
				>{this.props.name}</a>}{!this.props.link && <span className="embedAuthorName">{this.props.name}</span>}</div>)
	}
}