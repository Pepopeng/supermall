import {requst} from "../requst"

export function categoryreq(){
    return requst("/category")
}
export function subcatereq(maitKey){
    return requst(`/subcategory?maitKey=${maitKey}`)
}


