import {Link} from "react-router";
export default function Footer(){
    return(
        <footer>
            <p>&#169; 2025 <Link to={'/credits'}> Credits</Link> All Rights Reserved</p>
        </footer>
    )
}