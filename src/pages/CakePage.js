import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import CakeData from "../components/CakeData";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DrinkPage() {
    const [cake, setCake] = useState()
    const [message, setMessage] = useState('Download')
    const location = useLocation()
    const id = location.state?.data;
    
    useEffect(() => {
        axios.get(
            `https://the-birthday-cake-db.p.rapidapi.com/${id}`,
            {
                headers: {
                    "X-RapidAPI-Key": '0a3c4bbb3amshd62d750d7f8eeadp1dcc57jsn6bd2167aa764',
                    'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
                }
            }
        ).then(res => {
            setCake(res.data)
            setMessage(false)
        }).catch(res => {
            setMessage('Upload data API error')
        })
    }, [])

    return (
        <div>
            <Header />
            {message && <h1>{message}</h1>}
            {!message && <div><CakeData cake={cake} /></div>}
            <Footer />
        </div>
    )
}

