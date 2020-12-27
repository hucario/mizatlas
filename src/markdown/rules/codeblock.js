import SimpleMarkdown, { anyScopeRegex } from 'simple-markdown'
import CodeBlock from '../components/codeblock.js'
import React from 'react'
/* Stolen from discohook a _tad_ but we're open source so stealing is fine, right??????? */

const codeBlockRule = {
	order: SimpleMarkdown.defaultRules.codeBlock.order,
	match: anyScopeRegex(/^```(?:([\w+.-]+?)\n)?\n*([^\n][\S\s]*?)\n*```/i),
	parse: capture => {
		const [, language = "", content] = capture
		return {
		  language,
		  content,
		}
	},
	react: function(node, output) {
		return <CodeBlock
			language={node.language ?? ""}
		>{node.content}</CodeBlock>;
	},
};
export default codeBlockRule;