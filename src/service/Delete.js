import axios from 'axios';
import {onlinePath, rootPath} from './Config'

const Delete = (path, root) =>{
    const promise = new Promise((resolve, reject)=> {
        axios.delete(`${root ? onlinePath : rootPath}/${path}`)
        .then((res)=>{
            resolve(res.data);
        }, (err) =>{
            reject(err);
        })
    })
    return promise;
}


export default Delete;