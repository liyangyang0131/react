let storage = {
    set:(key,value)=>{
        localStorage.setItem(key,JSON.stringify(value)); 
    },
    get:(key)=>{
        return JSON.parse(localStorage.getItem(key));
    },
    del:(key)=>{
        localStorage.setItem(key,'');
    }
}

export default storage