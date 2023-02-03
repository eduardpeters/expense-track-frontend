import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import budgetsAPI from "../services/budgetsAPI";
import { Budget } from "../types/AppTypes";
import "../styles/BudgetsList.css";

function BudgetsList() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        async function getBudgets(token: string) {
            const budgetsResponse = await budgetsAPI.getBudgets(token);
            setBudgets(budgetsResponse);
        }
        const storedToken = localStorage.getItem("expenseTrackToken");
        if (storedToken) {
            getBudgets(storedToken);
        }
    }, []);

    const budgetLinks = budgets.map((budget: Budget) => {
        return (
            <div className="link-container" key={budget._id}>
                <Link to={`/budget/${budget._id}`} className="budget-link">{budget.title}</Link>
            </div>
        );
    });

    return (
        <>
            <div>Available budgets:</div>
            <div className="budget-links-container">
                {budgets.length ? budgetLinks : <p>You have no budgets yet</p>}
                <button>Add new budget</button>
            </div>
        </>
    );
}

export default BudgetsList;