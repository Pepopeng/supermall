import {requst} from "../requst";

export function goodsreq(type,page){
    return requst(`home/data?type=${type}&page=${page}`)
}