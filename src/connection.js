import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/item',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getItems() {
    await delay(1000);
    return (await instance.get()).data;
}

export async function getItemById(id) {
    await delay(1000);
    return (await instance.get(`/${id}`)).data;
}

export async function getFilteredItems(type, price) {
    await delay(1000);
    return (await instance.get(`/filters/?type=${type}&price=${price}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}