import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="section">
                <h1>
                    <a className="title is-1" href="#">Savepong - ReactJS</a>
                </h1>
                <h2 className="subtitle is-3">Playing with React</h2>
            </div>
        )
    }
}

export default Header