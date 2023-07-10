import React from 'react';
import BlogCard from "../Card/BlogCard";
import ReactMarkdownWrapper from "../ReactMarkdownWrapper/ReactMarkdownWrapper";
import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "../ReactMarkdownWrapper/ReactMarkdownWrapper";

function MDWrapper(props : any) {
    return (
        <div className="container pt-4">
            <div className="row">
                <MarkdownRenderer path="/md/test.md" />
            </div>
        </div>
    )
}

export default MDWrapper;