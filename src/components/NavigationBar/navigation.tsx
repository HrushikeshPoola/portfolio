import React from 'react'
import Avatar from 'react-avatar';
export default function NavigationBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light" style={{boxShadow:'2px 2px 2px #ddd'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {/*<span><Avatar size={'40px'} style={{padding : '2px'}} name="Hrushikesh Poola" round /></span>*/}
                        Hrushikesh Poola
                    </a>
                </div>
            </nav>
        </div>

    );
}