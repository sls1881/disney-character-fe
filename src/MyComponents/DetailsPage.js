import React, { Component } from 'react'
import { updateCharacter, deleteCharacter, getCharacter } from '../api.utils.js'

export default class DetailsPage extends Component {

    state = {
        character_name: '',
        created: '',
        wears_clothes: true,
        species_id: 1,
        url: '',
    }

    componentDidMount = async () => {
        const character = await getCharacter(this.props.match.params.characterId)
        this.setState({
            character_name: character.character_name,
            created: character.created,
            wears_clothes: character.wears_clothes,
            species_id: character.species_id,
            // species_type: character.species_type,
            url: character.url,
            characterId: Number(this.props.match.params.characterId),
        })
    }

    handleUrlChange = (e) => {
        this.setState({
            url: e.target.value
        })
    }

    handleNameChange = (e) => {
        this.setState({
            character_name: e.target.value
        })
    }

    handleCreatedChange = (e) => {
        this.setState({
            created: Number(e.target.value),
        })
    }

    handleBooleanChange = () => {
        this.setState({
            wears_clothes: !this.state.wears_clothes
        })
    }

    handleSpeciesChange = (e) => {
        this.setState({
            species_id: Number(e.target.value)
        })
    }

    handleClickUpdate = async (e) => {
        e.preventDefault();
        await updateCharacter(this.state.characterId, this.state);
        this.props.history.push('/characters');
    }

    handleClickDelete = async (e) => {
        e.preventDefault();
        await deleteCharacter(this.state.characterId, this.state)
        this.props.history.push('/characters')
    }

    render() {
        console.log(this.state);
        return (
            <div className='form-container'>
                <form>
                    <label>
                        Character Name:
                        <input value={this.state.character_name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Creation Year:
                        <input type='number' value={this.state.created} onChange={this.handleCreatedChange} />
                    </label>
                    <label>
                        Does this character wear clothes
                        <input type='checkbox' checked={this.state.wears_clothes} onChange={this.handleBooleanChange} />
                    </label>
                    <label>
                        Add an image URL:
                        <input value={this.state.url} onChange={this.handleUrlChange} />
                    </label>
                    <label>
                        Species Type:
                        <select value={this.state.species_id} onChange={this.handleSpeciesChange}>
                            <option value={1}>Mouse</option>
                            <option value={2}>Duck</option>
                            <option value={3}>Dog</option>
                            <option value={4}>Human</option>
                        </select>
                    </label>
                    <button onClick={this.handleClickUpdate}>Update</button>
                    <button onClick={this.handleClickDelete}>Delete</button>
                </form>
            </div>
        )
    }
}
