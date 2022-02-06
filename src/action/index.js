export const svdata = (data )=>{
    return {
        type : "SAVING",
        data
    }
    
}

export const deldata = (data) => {
    return {
        type : "DELETING",
        data
    }
}