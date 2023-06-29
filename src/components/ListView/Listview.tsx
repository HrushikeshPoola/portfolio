import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {CardProps} from "./CardProps";

const Card: React.FC<CardProps> = ({ date, title, subtitle, description, timeToRead, link }) => {
    return (
        <div className="card mb-4 custom-card"> {/* Add custom-card class */}
            <p className="card-text mt-1 pt-1 custom-date">{date}</p>
            <div className="card-body">
                <div className="d-flex flex-column justify-content-between mb-3 text-start">
                    <h3 className="card-title custom-title text-start">{title}</h3> {/* Add custom-title class */}
                    <small className="card-subtitle mb-2 text-muted custom-subtitle text-start custom-date">{subtitle}</small> {/* Add custom-subtitle class */}
                </div>
                <p className="card-text custom-description text-start">{description}</p> {/* Add custom-description class */}
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <a href={link} className="card-link custom-link">{/* Add custom-link class */}
                    Read more
                </a>
                <small className="text-muted">{`${timeToRead} min read`}</small>
            </div>
        </div>
    );
};

const ListView = ({content} : { content : CardProps[] }) => {
    return (
        <div className="container pt-4">
            <div className="row">
                {content.map((card, index) => (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListView;


