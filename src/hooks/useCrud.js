import axios from "axios";
import { useState } from "react"

const useCrud = (baseUrl) => {
    const [ infoApi, setInfoApi] =  useState();

    //GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`;
        axios.get(url)
        .then( res => {
            setInfoApi(res.data);
        })
        .catch( err => console.log(err));
    }

    //POST
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`;
        axios.post(url, data)
        .then(res => {
            
            setInfoApi([...infoApi, res.data])
        } )
        .catch(err => console.log(err));
    }

    //DELETE
    const deleteApi = ( path, id ) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
        .then( res => {
            
            setInfoApi(infoApi.filter(item => item.id !== id))
        } )
        .catch( err => console.log(err))
    }

    //UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}`
        axios.put(url, data)
        .then( res => {
            
            getApi(path)
            
        })
        .catch( err => console.log(err))
    }

    return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useCrud;
