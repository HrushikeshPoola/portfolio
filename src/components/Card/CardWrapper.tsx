import React from 'react';
import BlogCard from "../Card/BlogCard";

function CardWrapper(props : any) {
    const content = [
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },{
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },{
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },{
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
    ]
    return (
        <div className="container pt-4">
            <div className="row">
                {content.map(cardContent =>
                    {
                        return (<div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12"><BlogCard {...cardContent}/></div>);
                    }
                )}
            </div>
        </div>
    )
}

export default CardWrapper;