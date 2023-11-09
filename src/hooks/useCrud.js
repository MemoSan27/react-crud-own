import { useState } from "react"

const useCrud = (baseUrl) => {
    const [ infoApi, setInfoApi] =  useState();

    //GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}`;
        axios.get(url)
        .then( res => {
            setInfoApi(res.data);
        })
        .catch( err => console.log(err));
    }

    //POST
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}`;
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            setInfoApi([...infoApi, res.data])
        } )
        .catch(err => console.log(err));
    }

    //DELETE

    //UPDATE

    return [ infoApi, getApi, postApi ]
}

export default useCrud
