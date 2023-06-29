import React, { useState, useRef } from 'react';
import {Container} from "react-bootstrap";

interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const codeRef = useRef<HTMLPreElement>(null);
    const [isCopied, setIsCopied] = useState(false);

    const copyCodeToClipboard = () => {
        if (codeRef.current) {
            const range = document.createRange();
            range.selectNode(codeRef.current);
            window.getSelection()?.removeAllRanges();
            window.getSelection()?.addRange(range);

            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    setIsCopied(true);
                    setTimeout(() => {
                        setIsCopied(false);
                    }, 1500);
                }
            } catch (err) {
                console.error('Failed to copy code to clipboard', err);
            }

            window.getSelection()?.removeAllRanges();
        }
    };

    return (
        <div className="code-block-container">
      <pre ref={codeRef} className="code-block dark-theme text-start">
        {code}
      </pre>
        <button className="copy-button" onClick={copyCodeToClipboard}>
            {isCopied ? 'Copied!' : 'Copy'}
        </button>
        </div>
    );
};

export default CodeBlock;
