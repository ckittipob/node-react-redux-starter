import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { IExampleFormValues } from '../models/example';
import { IUser, IUserFormValues } from '../models/user';
import {history} from '../../components/layout/App';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Set Authentication Header
axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token');
    if (token) config.headers.Authorization = `${token}`;
    return config
}, error => {
    return Promise.reject(error);
})

//
axios.interceptors.response.use(undefined, error => {
    if(error.message === 'Network Error' && !error.response){
        toast.error('Network Error');
    }

        const {status, data, config} = error.response;
        if(status === 404){
            history.push('/notfound');
        }
        if(status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id')){
            history.push('/notfound');
        }
        if(status === 401){
            history.push('/login')
        }
        if(status === 500){
            console.log('toast');
            toast.error('Server error')
        }
        throw(error);

})

const responseBody = (response: AxiosResponse) => response.data;

//Loading Component Visual
const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(200)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(200)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(200)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(200)).then(responseBody)
}

const Examples = {
    list: () => requests.get('/examples'),
    detail: (id: string) => requests.get(`/examples/${id}`),
    create: (example: IExampleFormValues) => requests.post('examples', example),
    edit: (example: IExampleFormValues) => requests.put(`/examples/${example._id}`, example),
    delete: (id: string) => requests.del(`/examples/${id}`),
    protected: () => requests.get('/examples/protected')
}


const User = {
    login: (user: IUserFormValues): Promise<IUser> => requests.post(`/auth`, user)
}
export default {
    Examples,
    User
}