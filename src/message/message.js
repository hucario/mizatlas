import Embed from './embed/embed.js'
import MessageMeta from './meta.js'
import React from 'react'
import md from '../markdown/md.js'

export default class Messaage extends React.Component {
	render() {
		let d = this.props.data
		let x = new Date()
		let y = `Today at ${x.getHours()%12}:${(x.getMinutes().toString().length < 2?"0" + x.getMinutes():x.getMinutes())} ${x.getHours()<12?"AM":"PM"}`
		let e = []
		console.log(d);
		d.embeds = d.embeds ?? [d.embed] ?? []
		for (let i = 0; i < d.embeds.length; i++) {
			if (!d.embeds[i]) {
				continue;
			}
			if (JSON.stringify(Object.keys(d.embeds[i])) === JSON.stringify(["url", "image"])) {
				e[e.length-1].images = e[e.length-1].images ?? [];
				e[e.length-1].images.push(d.embeds[i]);
				continue;
			}
			e.push(d.embeds[i])
			e.images = [];
		}
		let f = [];
		for (let i = 0; i < e.length; i++) {
			f.push(<Embed
					data={e[i]}
				/>)
		}

		return (<div
			className="message cozyMessage groupStart wrapper cozy zalgo" 
			role="listitem" 
			tabIndex="-1" 
			><MessageMeta
				avatar="https://cdn.discordapp.com/avatars/668999031359537205/6e74595fa98e9c52e2fab6ece4639604.png?size=4096"
				name="Miza"
				bot={true}
				time={y}
			/>
			<div 
				className="contents" 
				role="document"
			><div 
				className="markup messageContent"
			>{md(this.props?.data?.content) || ""}</div></div><div 
				className="container"
			>{f}</div></div>)
	}
}