import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"


function HomePage () {
    return(
        <div>
            <Container className="p-5">
                <Card style={{background:'lightblue'}} className="p-5">
                <h1>Explore Our Phone Collection By Clicking On The Link Above</h1>
                </Card>
            </Container>

        </div>
    )
}

export default HomePage