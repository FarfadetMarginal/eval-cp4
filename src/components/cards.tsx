import { useEffect, useState } from "react";
import data from "../data/logement.json"
import Card from "../components/card";

type Card = {
    id : string;
    title : string;
    location : string;
    pictures : Array<string>;
    tags : Array<string>;
    host: {
        name: string;
        picture: string;
    }
    rating : string;
    description : string;
    equipments : Array<string>
};

const Cards = () => {

    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() =>{
        //simuler chargement
        setCards(data);
    }, []);

    return (
        <>
            <section className="sectioncards">
                {cards.map((card)=>(
                    <Card 
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    location={card.location}
                    pictures={card.pictures}
                    tags={card.tags}
                    rating={card.rating}
                    />
                ))}
            </section>
        </>
    )
}

export default Cards