import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page cannot be accessed</p>
            <Link to='/'>Back to Home</Link>
        </div>
    );
}
 
export default NotFound;