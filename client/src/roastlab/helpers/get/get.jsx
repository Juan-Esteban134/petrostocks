import axios from "axios"

export function GetVariedad(setListVariedad){
    axios.get("http://localhost:3001/getproduct").then((response)=>{
        setListVariedad(response.data)
     })
}