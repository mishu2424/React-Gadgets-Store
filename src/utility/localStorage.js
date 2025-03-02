import toast from "react-hot-toast";

const getStoredCart=(list)=>{
    const getCarts=localStorage.getItem(list);
    if(getCarts){
        return JSON.parse(getCarts);
    }
    return [];
}

const addToStorage=(id,list)=>{
    const getStoredItems=getStoredCart(list);
    if(getStoredItems.includes(id)){
        toast.error(`This item already exists in ${list}!!!`);
        return;
    }else{
        getStoredItems.push(id);
        localStorage.setItem(list,JSON.stringify(getStoredItems));
        toast.success(`This item has been added to the ${list}!!!`);
    }
}

const removeItem=(id, list)=>{
    const getStoredItems=getStoredCart(list);
    const sortedCart=getStoredItems.filter(cartId=>cartId!==id);
    localStorage.setItem(list,JSON.stringify(sortedCart));
    toast.success(`Item has been removed ${list}!`)
}

export {getStoredCart, addToStorage, removeItem};