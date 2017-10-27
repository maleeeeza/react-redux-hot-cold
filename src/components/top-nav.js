import React from 'react';
import {connect} from 'react-redux';
import {newGame, showInfoModal} from '../actions';

import './top-nav.css';

export class TopNav extends React.Component {
    newGame(event) {
        event.preventDefault();
        this.props.dispatch(newGame());
    }

    showInfoModal(event) {
        event.preventDefault();
        this.props.dispatch(showInfoModal());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#what" onClick={e => this.showInfoModal(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#new" onClick={e => this.newGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);
