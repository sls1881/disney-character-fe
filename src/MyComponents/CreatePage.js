import React, { Component } from 'react'
import { makeCharacter } from '../api.utils'

export default class CreatePage extends Component {
    state = {
        character_name: '',
        created: '',
        wears_clothes: true,
        species_id: 1,
        url: '',
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

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        await makeCharacter(this.state)
        this.props.history.push('./characters')
    }

    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
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
                    <button>Create</button>
                </form>
            </div>
        )
    }
}
