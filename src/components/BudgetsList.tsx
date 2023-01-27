import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import budgetsAPI from "../services/budgetsAPI";

interface Budget {
    _id: string;
    title: string;
}

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
    });

    const budgetLinks = budgets.map((budget: Budget) => {
        return (
            <div className="budget-link-container" key={budget._id}>
                <Link to={`/budget/${budget._id}`} className="budget-link">{budget.title}</Link>
            </div>
        );
    });

    return (
        <>
            <div>This is a list of your budgets</div>
            {budgets.length ? budgetLinks : "You have no budgets yet"}
        </>
    );
}

export default BudgetsList;