import { useState } from "react"
const url = new URL(window.location.href)
const id = url.searchParams.get("id")
import data from "../data/logement.json"
let result = data.find(card => card.id == id);

if (!result){
    result = {
    "id": "00",
    "title": "Not found",
    "location": "404",
    "pictures": [
      "public/pexels-padrinan-2882552.jpg"
    ],
    "tags": [
      "try again"
    ],
    "host": {
      "name": "Not found",
      "picture": "public/pexels-kalistro666-25785791.jpg"
    },
    "rating": "0",
    "description": "please try again with another id",
    "equipments": [
      
    ]
  }
}



export default function Slider() {
    const [idimg, setimg] = useState(0)

    const z : number = result?.pictures.length - 1

    const droite = () =>{
        if(idimg>=z){
            setimg(0)
        } else if(idimg<z){
            setimg(idimg+1)
        }
    }

        const gauche = () =>{
        if(idimg<=0){
            setimg(z)
        } else if(idimg>0){
            setimg(idimg-1)
        }
    }


    return (
        <>
        <div className="carrousel">
            <img src={result?.pictures[idimg]} alt="image" />
            <button className="gauche" onClick={gauche}><i className="fa-solid fa-arrow-left"></i></button>
            <button className="droite" onClick={droite}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        </>
    )
}



