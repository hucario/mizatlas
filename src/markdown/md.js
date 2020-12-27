import SimpleMarkdown from 'simple-markdown'
import React from 'react'
import codeBlock from './rules/codeblock'

const rules = {
	...SimpleMarkdown.defaultRules,
	fence: codeBlock,
	codeBlock: codeBlock
}

const rawBuiltParser = SimpleMarkdown.parserFor(rules);
const parse = function(source) {
	var blockSource = source + "\n\n";
	return rawBuiltParser(blockSource, {inline: false});
};
const output = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'))



/** 
 * @returns {ReactNode[]}
 */
export default function render(str) {
	if (!str) {
		return <></>
	}
	return output(parse(str));
}