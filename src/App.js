import Message from './message/message.js'
import React from 'react'

let exampleCommandThingy = [
	{
		"embed": {
			"thumbnail": {
				"url": "https://cdn.discordapp.com/avatars/668999031359537205/6e74595fa98e9c52e2fab6ece4639604.png?size=4096"
			}, 
			"author": {
				"name": "Miza#3214", 
				"url": "https://github.com/thomas-xin/Miza", 
				"icon_url": "https://cdn.discordapp.com/avatars/668999031359537205/6e74595fa98e9c52e2fab6ece4639604.png?size=4096"
			}, 
			"fields": [
				{
					"inline": 0, 
					"name": "User ID", 
					"value": "`668999031359537205`"
				}, 
				{
					"inline": 1, 
					"name": "Creation time", 
					"value": "2020-01-21 02:03:18.477000\n11 months 3 days 22 hours 16 minutes 37.40629 seconds ago"
				}, {
					"inline": 1, 
					"name": "Status", 
					"value": "Online\n`\ud83d\udfe2\ud83d\udd78\ufe0f\ud83d\udfe1\ud83d\udcf1\ud83d\udd34\ud83d\udda5\ufe0f`"
				}, {
					"inline": 1, 
					"name": "Last seen", 
					"value": "Sending a message, The CSMC (Cave Story Modding Community), 13.50097 seconds ago"
				}
			], 
			"color": 6899575, 
			"type": "rich", 
			"description": "<@668999031359537205>\n*```\nStreaming live to \ud835\udfd2\ud835\udfd7 servers, from \ud835\udcfd\ud835\udd01\ud835\udcf2\ud835\udcf7's place!```*  **```css\nMyself \ud83d\ude43\nBot \ud83e\udd16```**"
		}
	}
],
help = [{"content": "", "embed": {"author": {"name": "\u2753 Help \u2753"}, "fields": [{"inline": false, "name": "~Translate", "value": "```ini\n[Aliases] TR, Translate\n[Effect] Translates a string into another language.```"}, {"inline": false, "name": "~Math", "value": "```ini\n[Aliases] \ud83d\udd22, M, PY, Sympy, Plot, Calc, Math\n[Effect] Evaluates a math formula.```"}, {"inline": false, "name": "~Uni2Hex", "value": "```ini\n[Aliases] U2H, HexEncode, Uni2Hex\n[Effect] Converts unicode text to hexadecimal numbers.```"}, {"inline": false, "name": "~Hex2Uni", "value": "```ini\n[Aliases] H2U, HexDecode, Hex2Uni\n[Effect] Converts hexadecimal numbers to unicode text.```"}, {"inline": false, "name": "~ID2Time", "value": "```ini\n[Aliases] I2T, CreateTime, Timestamp, ID2Time\n[Effect] Converts a discord ID to its corresponding UTC time.```"}, {"inline": false, "name": "~Time2ID", "value": "```ini\n[Aliases] T2I, RTimestamp, Time2ID\n[Effect] Converts a UTC time to its corresponding discord ID.```"}, {"inline": false, "name": "~SHA256", "value": "```ini\n[Aliases] SHA, SHA256\n[Effect] Computes the SHA256 hash of a string.```"}, {"inline": false, "name": "~Fancy", "value": "```ini\n[Aliases] FancyText, Fancy\n[Effect] Creates translations of a string using unicode fonts.```"}, {"inline": false, "name": "~Zalgo", "value": "```ini\n[Aliases] Chaos, ZalgoText, Zalgo\n[Effect] Generates random combining accent symbols between characters in a string.```"}, {"inline": false, "name": "~Format", "value": "```ini\n[Aliases] FormatText, Format\n[Effect] Creates neatly fomatted text using combining unicode characters.```"}, {"inline": false, "name": "~UnFancy", "value": "```ini\n[Aliases] UnFormat, UnZalgo, UnFancy\n[Effect] Removes unicode formatting and diacritic characters from inputted text.```"}, {"inline": false, "name": "~OwOify", "value": "```ini\n[Aliases] UwU, OwO, UwUify, OwOify\n[Effect] Applies the owo/uwu text filter to a string.```"}, {"inline": false, "name": "~AltCaps", "value": "```ini\n[Aliases] AltCaps\n[Effect] Alternates the capitalization on characters in a string.```"}, {"inline": false, "name": "~Char2Emoj", "value": "```ini\n[Aliases] C2E, Char2Emoj\n[Effect] Makes emoji blocks using a string.```"}, {"inline": false, "name": "~Time", "value": "```ini\n[Aliases] \ud83d\udd70\ufe0f, \u23f0, \u23f2\ufe0f, UTC, GMT, T, Time\n[Effect] Shows the current time at a certain GMT/UTC offset, or the current time for a user. Be sure to check out http://27.33.133.250:9801/time!```"}, {"inline": false, "name": "~Timezone", "value": "```ini\n[Aliases] Timezone\n[Effect] Shows the current time in a certain timezone. Be sure to check out http://27.33.133.250:9801/time!```"}, {"inline": false, "name": "~TimeCalc", "value": "```ini\n[Aliases] TimeDifference, TimeCalc\n[Effect] Computes the difference between two times, or the Unix timestamp of a datetime string.```"}, {"inline": false, "name": "~Follow", "value": "```ini\n[Aliases] \ud83d\udeb6, follow_url, Redirect, Follow\n[Effect] Follows a discord message link and/or finds URLs in a string.```"}, {"inline": false, "name": "~Match", "value": "```ini\n[Aliases] RE, RegEx, RexExp, GREP, Match\n[Effect] matches two strings using Linux-style RegExp, or computes the match ratio of two strings.```"}, {"inline": false, "name": "~Ask", "value": "```ini\n[Aliases] Ask\n[Effect] Ask me any question, and I'll answer it!```"}, {"inline": false, "name": "~Urban", "value": "```ini\n[Aliases] \ud83d\udcd6, UrbanDictionary, Urban\n[Effect] Searches Urban Dictionary for an item.```"}], "color": 65280, "type": "rich"}}],
everything=[{
	"content": null,
	"embeds": [
	  {
		"title": "IdiocySpeening",
		"description": "[yes,](https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif) I really do be spinning :flushed:",
		"url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif",
		"color": 41983,
		"fields": [
		  {
			"name": "idiocy spin?",
			"value": "[yes](https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif)"
		  }
		],
		"author": {
		  "name": "IdiocySpeen",
		  "url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif",
		  "icon_url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif"
		},
		"footer": {
		  "text": "IdiocySpeen",
		  "icon_url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif"
		},
		"timestamp": "2020-12-25T02:37:00.000Z",
		"image": {
		  "url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif"
		},
		"thumbnail": {
		  "url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif"
		}
	  },
	  {
		"url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif",
		"image": {
		  "url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif"
		}
	  },
	  {
		"url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif",
		"image": {
		  "url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif"
		}
	  },
	  {
		"url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif",
		"image": {
		  "url": "https://cdn.discordapp.com/attachments/669066569170550797/791780949259583518/ed8c3106da463b61fd6c957babf06fde.gif"
		}
	  }
	]
  }]



class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			commandValue: 'help string',
			commandData: help[0]
		}
	}
	cmdChange = (e) => {
		this.setState({
			commandValue: e.target.value
		})
	}
	tryIt = () => {
		this.setState({
			loading: true
		})
		fetch('http://27.33.133.250:9801/command/' + encodeURIComponent(this.state.commandValue)).then((e) => {
			e.json().then((b) => {
				this.setState({
					commandData: b[0],
					loading: false
				})
			})
		})
	}
	render() {
		return (
			<>	
				<div
					className="left"
				>
					<input
						className="commandInput"
						value={
							this.state.commandValue
						}
						onChange={
							this.cmdChange
						}
					></input>
					<button
						className="greeny"
						onClick={this.tryIt}
					>Try</button>
				</div>
				<div
					className="right"
				>
					{this.state.loading && <div className="loader">Loading...</div>}
					<Message 
						data={this.state.commandData}
					/>
				</div>
			</>
		);
	}
}

export default App;
