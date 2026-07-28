import { useState } from "react"
const url = new URL(window.location.href)
const id = url.searchParams.get("id")
import data from "../data/logement.json"
const result = data.find(card => card.id == id);


export default function Collapse() {
    const [coll, setColl] = useState(false)
    const [coll2, setColl2] = useState(false)

    function AfficherDescr(){
        setColl(prev => !prev)
    }

    function AfficherEquip(){
        setColl2(prev => !prev)
    }


function Icone(x : string) {
    const icones = {
       "Wifi": <i className="fa-solid fa-wifi"></i>,
        "Climatisation": <i className="fa-solid fa-temperature-empty"></i>,
        "Cuisine équipée": <i className="fa-solid fa-kitchen-set"></i>,
        "Télévision": <i className="fa-solid fa-tv"></i>,
        "Chauffage": <i className="fa-solid fa-temperature-arrow-up"></i>,
        "Cuisine": <i className="fa-solid fa-mortar-pestle"></i>,
        "Machine à laver": <i className="fa-solid fa-shirt"></i>,
        "Jardin": <i className="fa-solid fa-seedling"></i>,
        "Barbecue": <i className="fa-solid fa-drumstick-bite"></i>,
        "Cheminée": <i className="fa-solid fa-house-chimney-window"></i>,
        "Poêle à bois": <i className="fa-solid fa-fire-burner"></i>,
        "Toilettes sèches": <i className="fa-solid fa-toilet-paper"></i>,
        "Eau chaude": <i className="fa-solid fa-faucet-drip"></i>,
        "Machine à café": <i className="fa-solid fa-mug-saucer"></i>,
        "Piscine": <i className="fa-solid fa-water-ladder"></i>,
        "Lave-vaisselle": <i className="fa-solid fa-soap"></i>,
        "Kitchenette": <i className="fa-solid fa-utensils"></i>,
        "Sauna": <i className="fa-solid fa-hot-tub-person"></i>,
        "Cuisine moderne": <i className="fa-solid fa-martini-glass"></i>,
        "TV": <i className="fa-solid fa-tv"></i>,
        "Jeux enfants": <i className="fa-solid fa-gamepad"></i>,
        "Terrasse": <i className="fa-solid fa-champagne-glasses"></i>,
        "Electricité": <i className="fa-solid fa-plug-circle-bolt"></i>,
        

    }
    return icones[x] || "?"
}




    return (
        <>
        <article className="descr">
            <div onClick={AfficherDescr}>
                <h3>Description</h3>
                <i style={{ display: coll ? "none" : "block" }} className="fa-solid fa-arrow-down"></i>
                <i style={{ display: coll ? "block" : "none" }} className="fa-solid fa-arrow-up"></i>
            </div>
            <p style={{ display: coll ? "block" : "none" }}>{result?.description}</p>
        </article>

        <article className="equip">
            <div onClick={AfficherEquip}>
                <h3>Équipements</h3>
                <i style={{ display: coll2 ? "none" : "block" }} className="fa-solid fa-arrow-down"></i>
                <i style={{ display: coll2 ? "block" : "none" }} className="fa-solid fa-arrow-up"></i>
            </div>
            <ul style={{ display: coll2 ? "block" : "none" }}>
                {result?.equipments.map((eq)=>(
                    <li>{Icone(eq)}{eq}</li>
                ))}
            </ul>
        </article>
        </>
    )
}