



export function formatDate(date,str){
    if(/(y+)/.test(str)){
        str=str.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length))
    }
    let o ={
        'M+':date.getMonth()+1,
        'd+':date.getDate(),
        'h+':date.getHours(),
        'm+':date.getMinutes(),
        's+':date.getSeconds()
    }

    for(let i in o){
        if(new RegExp(`(${i})`).test(str)){
            const rep=o[i]+''
            str=str.replace(RegExp.$1,RegExp.$1.length===1?rep:padZero(rep))
        }
    }

  return str
}

function padZero(str){
    return ('00'+str).substr(str.length)
}