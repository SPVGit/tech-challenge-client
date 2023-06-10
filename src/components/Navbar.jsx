import { NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"

function Navbar() {
    return (
        <div>
            <Container>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <NavLink className='nav-link' to={'/'}> Home    </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className='nav-link' to={'/phones'}> Phones </NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </Container>



        </div>
    )
}
export default Navbar;