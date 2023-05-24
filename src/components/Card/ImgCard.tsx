import React from "react";
import Props from "./Props";

export default function ImgCard({topic, description, id, links} : Props) {
    return(
        <>
        <div className="card-group">
            <div className="card">
                {/*<img src="..." className="card-img-top" alt="...">*/}
                <div className="card-body">
                    <h5 className="card-title">{topic}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
        </>
    );
}