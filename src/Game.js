import React, {Component} from 'react';

import Stats from './Stats';
import Burger from './Burger';
import Booster from './Booster';


class Game extends React.Component {

        constructor(props) {
                super(props);
                this.state = {
                clicks: 0
                }
            this.mouseClicked = this.mouseClicked.bind(this);
        }
    
        mouseClicked() {
                const clicks = this.state.clicks;
                this.setState ({
                clicks: clicks + 1
            });
        }

    render() {
    return (
    <React.Fragment>
        <div className="header">
        <h1>Burger Clicker</h1>
        </div>
        <div className="content content--justified">
        <Stats count={this.state.clicks} />
        <Burger onClick={this.mouseClicked}/>
        <Booster count={4.5}/>
        </div>
    </React.Fragment>
    );
}
}

export default Game;