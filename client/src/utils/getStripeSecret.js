import axios from 'axios';
export default async amount => {
    const { data } = await axios.post('/api/stripeSecret', { amount });
    return data;
};
