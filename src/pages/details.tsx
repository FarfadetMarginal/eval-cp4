const url = new URL(window.location.href)
const id = url.searchParams.get("id")
import Header from "../components/header"
import Footer from "../components/footer"
import data from "../data/logement.json"

const result = data.find(card => card.id == id);

export default function Detail(){
return (
        <>
            <Header />
            <main>
            <h1>{result.title}</h1>
            


            </main>
            <Footer />
        </>
    )
}




