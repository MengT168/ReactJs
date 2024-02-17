import axios from "axios";
import { FetchApi } from "../Components/Urlproduct";
export const FetchCategory = async () => {
  let resp = await fetch(`${FetchApi}/categories`);
  return resp.json();
};

export const FetchProduct = async () => {
  let resp = await fetch(`${FetchApi}/products?limit=24&offset=0`).then((resp) =>
    resp.json()
  );
  return resp;
};

export const InsertProduct = async (product) => {
  const resp = await fetch(`${FetchApi}/products`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  let resjson = await resp.json();
  if (resp.status === 201) {
    console.log("Insert Success");
  } else {
    console.log("Insert Fail");
  }
};

export const updateProduct = async (product ,id)=>{
  let resp = await fetch(`${FetchApi}/products/${id}`,{
    method: "PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(product)
  })
  return resp
}


export const UploadImagetoServer = async (image)=>{
    let resp = await axios({
        method: "POST",
        headers:{
            "Content-Type":"multipart/form-data"
        },
        url:`${FetchApi}/files/upload`,
        data:image
    })
    return resp;
}