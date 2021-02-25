import React, { Component } from 'react'
import { getCharacters } from '../api.utils.js'
import Spinner from '../MyComponents/Spinner.js'
import { Link } from 'react-router-dom'


export default class ListPage extends Component {
    state = {
        characters: [],
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({ loading: true })

        const characters = await getCharacters();

        this.setState({
            characters: characters,
            loading: false,
        });
    }

    render() {
        console.log(this.state.characters);
        return (
            <div className='list-container'>
                {this.state.loading && <Spinner />}
                {this.state.characters.map(character => <Link className='links' to={`/characters/${character.id}`} key={character.id}><div>
                    <img className='img' alt='disney character' src={`${character.url}`} />
                    <p>{character.character_name} was created in {character.created}. The character {character.wears_clothes
                        ? 'wears clothes'
                        : 'does not wear clothes'}.</p>
                </div>
                </Link>)
                }
            </div>
        )
    }
}
