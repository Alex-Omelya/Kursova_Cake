import { useEffect, useState } from "react"
import Cakes from "../components/Cakes"
import axios from "axios"
import './MainPage.scss'
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function MainPage() {
    const [message, setMessage] = useState('Download')
    const [cakes, setCakes] = useState([])

    useEffect(() => {
        axios.get(
            'https://the-birthday-cake-db.p.rapidapi.com/',
            {
                headers: {
                    "X-RapidAPI-Key": '0a3c4bbb3amshd62d750d7f8eeadp1dcc57jsn6bd2167aa764',
                    'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
                }
            }
        ).then(res => {
            setCakes(res.data)
            setMessage(false)
        }).catch(res => {
            setMessage('Upload data API error')
        })
    }, [])

    return (
        <div>
            <Header />
            {message && <h1>{message}...</h1>}
            {!message &&
                <div>
                    <hr />
                    <h2>List of Cakes</h2>
                    <hr />
                    <Cakes cakes={cakes} />
                </div>
            }
            <Footer />
        </div>
    );
}