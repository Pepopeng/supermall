import axios from "axios"

export function requst(config){
    const instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })

    instance.interceptors.request.use(config=>{return config },error => {})
    instance.interceptors.response.use(config=>{return config.data},error => {
        console.log(error)})

    return instance(config)
}