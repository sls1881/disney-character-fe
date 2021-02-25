import request from "superagent";

const URL = 'https://damp-ocean-78735.herokuapp.com';

export async function getCharacters() {
    const response = await request.get(`${URL}/characters`)
    return response.body;
}

export async function getSpecies() {
    const response = await request.get(`${URL}/species`)
    return response.body;
}

export async function getCharacter(id) {
    const response = await request.get(`${URL}/characters/${id}`)
    return response.body;
}

export async function makeCharacter(aCharacter) {
    const response = await request.post(`${URL}/characters/`)
        .send(aCharacter);
    return response.body;
}

export async function deleteCharacter(id) {
    const response = await request.delete(`${URL}/characters/${id}`)
    return response.body;
}

export async function updateCharacter(id, aCharacter) {
    const response = await request.put(`${URL}/characters/${id}`)
        .send(aCharacter);
    return response.body;
}