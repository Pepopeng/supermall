import toast from "@c/common/toast";
import {compile} from "vue-template-compiler";

const obj={}

obj.install=function (vue){
    const constructor=vue.extend(toast)
    const toast1=new constructor
    toast1.$mount(document.createElement('div'))
    document.body.appendChild(toast1.$el)
    vue.prototype.$toast=toast1
}

export default obj