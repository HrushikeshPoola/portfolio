import React from 'react';
import MarkdownRenderer from "../ReactMarkdownWrapper/ReactMarkdownWrapper";
import { useParams } from 'react-router-dom';
function MDWrapper(props : any) {
    const { id } = useParams();
    const path = id?.split("_").join("/") + ".md";
    return (
        <div className="container pt-4">
            <div className="row">
                <MarkdownRenderer path={"/md/" + path} />
            </div>
        </div>
    )
}

export default MDWrapper;