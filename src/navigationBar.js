import "./navigationBar.css"
import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/expenses">Expenses</Link>
            <Link to="/invoices">Invoices</Link>
        </div>
    )
}

export default NavigationBar;