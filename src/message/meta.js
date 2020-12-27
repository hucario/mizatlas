import React from 'react'
export default class MessageMeta extends React.Component {
	render() {
		return (<><img 
			src={this.props.avatar} 
			aria-hidden="true" 
			className="avatar clickable" 
			alt=" "
		/><h2 
			className="header"
		><span 
			className="headerText"
		><span 
			className="username clickable" 
			aria-expanded="false" 
			role="button" 
			tabIndex="0"
		>{this.props.name}</span>{this.props.bot && (<span 
			className="botTagCozy botTag botTagRegular botTag rem"
		><span className="botText">BOT</span></span>)}</span><span className="timestamp"><span aria-label={this.props.time}>{this.props.time}</span></span></h2>
		
		</>)
	}
}