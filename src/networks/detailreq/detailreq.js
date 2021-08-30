import {requst} from "../requst";

export function detailreq(iid) {
    return requst(`detail?iid=${iid}`)
}
export class goods{
    constructor(iteminfo,columns,service) {
        this.title=iteminfo.title
        this.desc=iteminfo.desc
        this.newprice=iteminfo.price
        this.oldprice=iteminfo.oldPrice
        this.discount=iteminfo.discountDesc
        this.realprice=iteminfo.lowNowPrice
        this.columns=columns
        this.service=service
    }
}

export class shop{
    constructor(shopinfo) {
        this.logo=shopinfo.shopLogo
        this.name=shopinfo.name
        this.fans=shopinfo.cFans
        this.sells=shopinfo.cSells
        this.score=shopinfo.score
        this.goodsCount=shopinfo.cGoods

    }
}

export class goodParams{
    constructor(info,rule) {
        this.image=info.images?info.images[0]:''
        this.infos=info.set
        this.sizes=rule.tables
    }
}

export function getRecommend(){
    return requst('/recommend')
}