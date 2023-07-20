export const  getClassName = (data) => {
    let className ;
    switch(data?.assetClass){
        case 'Equities' :
            className = 'equities-blue'
            break
        case 'Credit' : 
            className = 'credit-green'
            break
        case 'Macro' :
            className  = 'macro-white'
            break
        default:
            className = ''
    }
    return className;
}

export const getClassNameForPrice = (data, dataKey) => {
    let className=''
    if(dataKey==='price'){
     className = data?.price > 0 ? 'price_positive' : 'price_negative' 
    }
    return className
}