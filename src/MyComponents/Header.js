import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <nav className='nav-container'>

                {this.props.location.pathname !== '/characters' && <NavLink className='nav-link' exact activeClassName='link' to="/characters">Characters</NavLink>
                }

                {
                    this.props.location.pathname !== '/create' && <NavLink className='nav-link' exact activeClassName='link' to='/create'>Create</NavLink>
                }
            </nav>
        )
    }
})
