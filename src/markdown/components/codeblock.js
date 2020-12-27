// https://github.com/highlightjs/highlight.js/issues/925#issuecomment-471272598

import React, { Component } from 'react';
import hljs from 'highlight.js';

export default class CodeBlock extends Component {
    constructor(props) {
        super(props);                
        // create a ref to highlight only the rendered node and not fetch all the DOM
        this.codeNode = React.createRef();
    }

    componentDidMount() {
		this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    highlight = () => {
        this.props.language && this.codeNode && this.codeNode.current && hljs.highlightBlock(this.codeNode.current);
    }

    render() {
        const { language, children } = this.props;
        return <pre>
            <code ref={this.codeNode} className={language}>{children}</code>
        </pre>;
    }
}