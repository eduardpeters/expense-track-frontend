import { Link } from "react-router-dom";

function BudgetControls() {
    return (
        <div className="budget-controls">
            <p>Budget Title</p>
            <p>Select Month</p>
            <p>Select Year</p>
            <p>Category Filter</p>
            <p>Account Filter</p>
            <button>Add new entry</button>
            <Link to={"/home"}>Back Home!</Link>
        </div>
    );
}

export default BudgetControls;