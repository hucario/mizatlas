import React from 'react'
import EmbedHeader from './header.js'
import EmbedGallery from './gallery.js'
import EmbedFooter from './footer.js'
import md from '../../markdown/md.js'
function toColor(num) {
    let x = Number(num).toString(16);
    while (x.length < 6) {
        x = "0" + x;
    }
    return "#" + x;
}
export default class Embed extends React.Component {
	render() {
		let fields = [];
		if (this.props.data.fields) {
			let df = this.props.data.fields;
			for (let i = 0; i < df.length; i++) {
				fields.push(
					<div key={i+1}
						className="embedField" 
					><div 
						key={(i+1)*(df.length+1)}
						className="embedFieldName"
					>{df[i].name}</div><div
						key={(i+1)*(df.length+2)}
						className="embedFieldValue"
					>{md(df[i].value)}</div></div>)
			}
		}
		return (<div 
				className="embedWrapper embedFull embed markup" 
				aria-hidden="false" 
				style={{
					borderColor: (this.props?.data?.color ? toColor(this.props.data.color):"rgb(255, 255, 255)")
				}}
			><div 
				className={"grid"+((this.props?.data?.thumbnail)?" hasThumbnail":"")}
			><EmbedHeader
				name={this.props?.data?.author?.name}
				link={this.props?.data?.author?.url}
				icon={this.props?.data?.author?.icon_url}
			/>{this.props?.data?.title && <div 
				className="embedTitle embedMargin"
			>{this.props?.data?.url && <a 
				className="anchor anchorUnderlineOnHover embedTitleLink embedLink embedTitle" 
				tabIndex="0" 
				href={this.props?.data?.url}
				rel="noreferrer noopener" 
				target="_blank" 
				role="button"
			>{this.props?.data?.title}</a>}{
				!this.props?.data?.url && this.props?.data?.title
			}</div>}{this.props?.data?.description && <div 
				className="embedDescription embedMargin"
			>{md(this.props.data.description)}</div>}<div 
				className="embedFields"
			>{fields}</div><EmbedGallery
				imgs={this.props?.data?.images}
			/>{this.props?.data?.thumbnail && <a 
				className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedThumbnail" 
				tabIndex="0" 
				href={this.props?.data?.thumbnail.url}
				rel="noreferrer noopener" 
				target="_blank" 
				role="button" 
				style={{
					width: "80px",
					height: "80px"
				}}
			><img 
				alt="" 
				src={this.props?.data?.thumbnail.url} 
				style={{
					width: "80px",
					height: "80px"
				}}
			/></a>}<EmbedFooter
			
			/></div></div>)
	}
}