import React from "react";
import Props from "./Props";
export default function Card({topic, description, id, links,name} : Props) {

    // Function to generate a random RGB color
    const generateRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

// Function to calculate the contrast color (black or white) based on the luminance of the background color
    const calculateContrastColor = (color:any) => {
        const hexColor = color.replace(/rgb\(|\)|rgba\(|\)/g, '').split(',').map(Number);
        const luminance = (0.299 * hexColor[0] + 0.587 * hexColor[1] + 0.114 * hexColor[2]) / 255;
        return luminance > 0.5 ? '#000000' : '#ffffff';
    };

// Generate a pair of colors with contrasting text colors
    const generateColorPair = () => {
        const backgroundColor = generateRandomColor();
        const textColor = calculateContrastColor(backgroundColor);
        return { backgroundColor, textColor };
    };

    // const headerColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // const colorPair = generateColorPair();
    const colorPair = {
        backgroundColor : '#ddd',
        textColor : 'black'
    }
    const headerColor = 'black';
    return (
        <>
            <div className="card mb-3" style={{maxWidth: "25rem", color: headerColor, backgroundColor : colorPair.backgroundColor}}>
                <div className="card-header" style={{color: 'black' , textAlign : 'left'}}>
                    {/*<span className="p-2 border-2 text-light">{topic[0]}</span>*/}
                    {topic}
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{color: 'black'}} >{name}</h5>
                    <p className="card-text" style={{color: colorPair.textColor, textAlign:'left'}}>{description}</p>
                </div>
                <div className="card-footer">
                    <a href={links} style={{textDecoration:'none', width:'100%', height:"100%",padding:'0', margin:'0'}}>Link</a>
                </div>
            </div>
        </>
    )
}