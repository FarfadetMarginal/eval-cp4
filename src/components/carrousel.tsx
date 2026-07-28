import { useState } from "react"
const url = new URL(window.location.href)
const id = url.searchParams.get("id")
import data from "../data/logement.json"
const result = data.find(card => card.id == id);


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



