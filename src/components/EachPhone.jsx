
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import Container from 'react-bootstrap/esm/Container'
import Card from "react-bootstrap/Card"

function EachPhone() {

    const [phone, setPhone] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    const API_URL = 'http://localhost:5005'

    const getPhone = () => {
        axios.get(`${API_URL}/phones/${id}`)
            .then((response) => {
                setIsLoading(false)
                console.log(response.data)
                setPhone(response.data)
            })
            .catch((error) => {
                setIsLoading(false)
                console.log(error)
            })
    }


    useEffect(() => {
        getPhone()
    }, [])

    return (
        
        <Container>

        
              
                    <div key={phone._id} >
                        <Card className='m-4'>
                            <div>
                                <img src={`/${phone.imageFileName}`} />

                                <Card className='m-4' style={{background:'lightblue'}} >
                                    <Card.Header><h1>{phone.name}</h1></Card.Header>
                                    <h2>By: {phone.manufacturer}</h2>
                                    <Card className='m-4'><p>{phone.description}</p></Card>
                                    <h4>Color: {phone.color}</h4>
                                    <h4>Price: £{phone.price}</h4>
                                    <h4>Screen: {phone.screen}</h4>
                                    <h4>Processor: {phone.processor}</h4>
                                    <h4>Ram: {phone.ram}</h4>
                                    <Link to={`/phones/${phone._id}`}><button className="btn btn-primary mb-4">See Details</button></Link>
                                </Card>
                            </div>

                        </Card>
                    </div>
                
          

    </Container>

        
    )
}
export default EachPhone;