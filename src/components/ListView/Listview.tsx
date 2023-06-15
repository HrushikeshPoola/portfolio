import React from "react";
import {componentsMap} from '../utils/componentsMap';
import Props from "../Card/Props";
import {ListViewTopics} from '../../Content/topics'
import {Container, Row, Col} from "react-bootstrap";

export default function Listview() {
    const type = 'Card';
    let Component : (props: Props) => JSX.Element = componentsMap[type];
    return (
        <>
            <h1>Topics Learned</h1>
            <Container>
            <div style={{display:'flex', flexDirection:'row', alignItems:'self-start',justifyContent : 'space-evenly' , flexWrap:'wrap'}}>
                {ListViewTopics.map((topicObj, index)=> {
                    const buildProps : Props = topicObj;
                    buildProps["id"] = index;
                    buildProps["links"] = '/about/' + index;
                    return (
                        <div style={{padding:'3px'}}>
                            <Component {...topicObj}/>
                        </div>
                    );
                })}
            </div>
                <iframe srcDoc='<Component {...ListViewTopics[0]}'></iframe>
            </Container>
        </>
    )
}