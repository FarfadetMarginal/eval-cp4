import '../styles/cards.scss'
import React from 'react'

type CardProps = {
    id : string;
    title : string;
    location : string;
    pictures : Array<string>;
    tags : Array<string>;
    host? : Array<string>;
    rating : string;
    description? : string;
    equipments? : Array<string>
};

function Stars(x:number) {
    const star : Array<React.ReactElement>=[]
    for(let i = 0; i < x; i++) {
        star.push(<i className="fa-solid fa-star"></i>)
    }
    for(let i = 0; i < (5-x); i++) {
        star.push(<i className="fa-regular fa-star"></i>)
    }
    return star
}

function Link(y:string){
    const link : string = "/card?id=" + y
    return link
}

const Card: React.FC<CardProps> = ({id, title, location, pictures, tags, rating}) =>(
    <>    
    <a href={Link(id)} className="card">
        <img src={pictures[0]} alt={title} />
        <article>
            <h3>{title}</h3>
            <p><i className="fa-solid fa-location-dot"></i>{location}</p>
            <div className='tags'>
                {tags.map((tag)=>(
                    <span>{tag}</span>
                ))}    
            </div>
            <div className='stars'>
                {Stars(Number(rating))}
            </div>
        </article>
    </a>
    </>
)

export default Card;