import React from 'react';
import BlogCard from "../Card/BlogCard";
import {CardProps} from "../ListView/CardProps";

function CardWrapper({content} : { content : CardProps[] }) {

    return (
        <div className="container pt-4">
            <div className="row">
                {content.map((card, index) => (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                        <BlogCard {...card} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardWrapper;