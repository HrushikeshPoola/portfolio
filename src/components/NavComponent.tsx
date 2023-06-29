import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

interface Button {
    label: string;
    onClick: (label : string) => void;
}

interface ButtonListProps {
    buttons: Button[];
    activeButtonIndex: number;
}

const ButtonList: React.FC<ButtonListProps> = ({ buttons, activeButtonIndex }) => {
    return (
        <ButtonGroup>
            {
                buttons.map((button:Button, index:number)=> {
                    return <Button className='p-2' variant={index === activeButtonIndex ? 'secondary active' : 'secondary'} onClick={() => button.onClick(button.label)}>{button.label}</Button>
                })
            }
        </ButtonGroup>
    );
};



const NavComponent: React.FC = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0)
    const buttons = [
        {
            label: 'Frontend',
            onClick: (label:string) => {
                setActiveButtonIndex(0)
            },
        },
        {
            label: 'Backend',
            onClick: (label:string) => {
                setActiveButtonIndex(1)
            },
        },
        {
            label: 'Machine Learning',
            onClick: (label:string) => {
                setActiveButtonIndex(2)
            },
        },
    ];

    return <Container className='mt-4'><ButtonList buttons={buttons} activeButtonIndex={activeButtonIndex}/></Container>;
};

export default NavComponent;
