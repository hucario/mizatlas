import React from 'react'

export default class EmbedGallery extends React.Component {
	prevent = (e) => {
		e.preventDefault();
	}
	render() {
		if (!this.props?.imgs || this.props.imgs.length === 0) {
			return <></>
		}
		let imgs = this.props.imgs;
		if (this.props.imgs.length > 4) {
			imgs = this.props.imgs.splice(0, 4);
		}
		if (imgs.length === 4) {
			return (<div 
				className="embedGalleryImagesWrapper" 
				style={{
					height: "300px"	
				}}
				onClick={this.prevent}
				><div 
						className="embedGallerySide"
					><a
						className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
						tabIndex="0" 
						href={imgs[0].url} 
						rel="noreferrer noopener" 
						target="_blank" 
						role="button" 
						style={{
							width: "221px",
							height: "221px"
						}}
						><img 
								className="embedGalleryImageElement" 
								alt="" 
								src={imgs[0].image.url}
					/></a><a 
						className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
						tabIndex="0" 
						href={imgs[1].url} 
						rel="noreferrer noopener" 
						target="_blank" 
						role="button" 
						style={{
							width: "221px",
							height: "221px"
						}}
					><img 
						className="embedGalleryImageElement" 
						alt="" 
						src={imgs[1].image.url}
					/></a></div><div 
						className="embedGallerySide"
						><a 
							className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
							tabIndex="0" 
							href={imgs[2].url} 
							rel="noreferrer noopener" 
							target="_blank" 
							role="button" 
							style={{
								width: "221px",
								height: "221px"
							}}
						><img 
							className="embedGalleryImageElement" 
							alt="" 
							src={imgs[2].image.url}
						/></a><a 
							className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
							tabIndex="0" 
							href={imgs[3].url} 
							rel="noreferrer noopener" 
							target="_blank" 
							role="button" 
							style={{
								width: "221px",
								height: "221px"
							}}
							><img 
								className="embedGalleryImageElement" 
								alt="" 
								src={imgs[3].image.url}
								/></a></div>
	
	
					
			</div>)
		}
		if (imgs.length === 3) {
			return (<div 
				className="embedGalleryImagesWrapper" 
				style={{
					height: "300px"	
				}}
				onClick={this.prevent}
				><div 
						className="embedGallerySide"
					><a
						className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
						tabIndex="0" 
						href={imgs[0].url} 
						rel="noreferrer noopener" 
						target="_blank" 
						role="button" 
						style={{
							width: "221px",
							height: "221px"
						}}
						><img 
								className="embedGalleryImageElement" 
								alt="" 
								src={imgs[0].image.url}
					/></a></div><div 
						className="embedGallerySide"
						><a 
							className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
							tabIndex="0" 
							href={imgs[1].url} 
							rel="noreferrer noopener" 
							target="_blank" 
							role="button" 
							style={{
								width: "221px",
								height: "221px"
							}}
						><img 
							className="embedGalleryImageElement" 
							alt="" 
							src={imgs[1].image.url}
						/></a><a 
							className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
							tabIndex="0" 
							href={imgs[2].url} 
							rel="noreferrer noopener" 
							target="_blank" 
							role="button" 
							style={{
								width: "221px",
								height: "221px"
							}}
							><img 
								className="embedGalleryImageElement" 
								alt="" 
								src={imgs[2].image.url}
								/></a></div>
			</div>)
		}
		if (imgs.length === 2) {
			return (<div 
				className="embedGalleryImagesWrapper" 
				style={{
					height: "300px"	
				}}
				onClick={this.prevent}
				><div 
						className="embedGallerySide"
					><a
						className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
						tabIndex="0" 
						href={imgs[0].url} 
						rel="noreferrer noopener" 
						target="_blank" 
						role="button" 
						style={{
							width: "221px",
							height: "221px"
						}}
						><img 
								className="embedGalleryImageElement" 
								alt="" 
								src={imgs[0].image.url}
					/></a></div><div 
						className="embedGallerySide"
						><a 
							className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
							tabIndex="0" 
							href={imgs[1].url} 
							rel="noreferrer noopener" 
							target="_blank" 
							role="button" 
							style={{
								width: "221px",
								height: "221px"
							}}
						><img 
							className="embedGalleryImageElement" 
							alt="" 
							src={imgs[1].image.url}
						/></a></div>
			</div>)
		}
		if (imgs.length === 1) {
			return (<a 
				onClick={this.prevent}
				className="anchor anchorUnderlineOnHover imageWrapper imageZoom clickable embedWrapper" 
				tabIndex="0" 
				href={imgs[0].url} 
				rel="noreferrer noopener" 
				target="_blank" 
				role="button" 
				style={{
					width: "221px",
					height: "221px"
				}}
			><img 
				className="embedGalleryImageElement" 
				alt="" 
				src={imgs[0].image.url}
			/></a>)
		}
		return <></>
	}
}