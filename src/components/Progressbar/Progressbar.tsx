import React from "react";

export default function Progressbar() {
    return (
        <div className="progress" style={{height: "4px"}}>
            <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{width: "60%"}} aria-valuenow={50}
                 aria-valuemin={0} aria-valuemax={100}></div>
        </div>
    );
}