const url = new URL(window.location.href)
const id = url.searchParams.get("id")
import Header from "../components/header"
import Footer from "../components/footer"
import data from "../data/logement.json"
import Slider from "../components/carrousel"
import '../styles/details.scss'
import Collapse from "../components/collapse"


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

export default function Detail(){
return (
        <>
            <Header />
            <main>
                <Slider />
                <h1>{result?.title}</h1>
                <p><i className="fa-solid fa-location-dot"></i>{result?.location}</p>
                <div className='tags'>
                    {result?.tags.map((tag)=>(
                        <span>{tag}</span>
                    ))}    
                </div>
                <div className="host">
                    <img src={result?.host.picture} alt="photo de l'host" />
                    <div> 
                        <h2>{result?.host.name}</h2>
                        <p>Hôte depuis 3 ans</p>
                    </div>
                </div>
                <Collapse />
            </main>
            <Footer />
        </>
    )
}




