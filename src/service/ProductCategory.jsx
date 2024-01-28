
export const FetchCategory = async()=>{
    let resp = await fetch("https://api.escuelajs.co/api/v1/categories")
    return resp.json();
}

export const FetchProduct = async()=>{
    let resp = await fetch("https://api.escuelajs.co/api/v1/products?limit=12&offset=0")
    .then(resp=>resp.json())
    return resp;
}

export const InsertProduct = async (product) =>{
   
        const resp = await fetch("https://api.escuelajs.co/api/v1/products", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product),
        })

        let resjson = await resp.json();
        if(resp.status === 201){
            console.log("Insert Success");
        }
        else{
            console.log("Insert Fail");
        }
};