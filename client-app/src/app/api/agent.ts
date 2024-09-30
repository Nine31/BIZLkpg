import axios, { AxiosResponse } from "axios";
import { Hutba } from "../models/hutba";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Hutbe = {
    list: () => requests.get<Hutba[]>('/hutbe'),
    details: (id: string) => requests.get<Hutba>(`/hutbe/${id}`),
    create: (hutba: Hutba) => axios.post<void>('/hutbe', hutba),
    update: (hutba: Hutba) => axios.put<void>(`/hutbe/${hutba.id}`, hutba),
    delete: (id: string) => axios.delete<void>(`/hutbe/${id}`)
}

const agent = {
    Hutbe
}

export default agent;