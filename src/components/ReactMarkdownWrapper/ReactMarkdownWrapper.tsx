import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
const MarkdownRenderer = ({ path } : {path : string}) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        const fetchMarkdownContent = async () => {
            try {
                const response = await fetch(path);
                const content = await response.text();
                setMarkdownContent(content);
            } catch (error) {
                console.error('Error fetching Markdown content:', error);
            }
        };

        fetchMarkdownContent();
    }, [path]);

    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>;
};

export default MarkdownRenderer;
