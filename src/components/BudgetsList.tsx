import { useState, useEffect } from "react";
import budgetsAPI from "../services/budgetsAPI";

interface Budget {
    _id: string;
    title: string;
}

function BudgetsList() {
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        async function getBudgets(token: string) {
            const budgetsResponse = await budgetsAPI.getAll(token);
            setBudgets(budgetsResponse);
        }
        const storedToken = localStorage.getItem("expenseTrackToken");
        if (storedToken) {
            getBudgets(storedToken);
        }
    });

    const budgetTitles = budgets.map((budget: Budget) => <p key={budget._id}>{budget.title}</p>)

    return (
        <>
            <div>This is a list of your budgets</div>
            {budgets.length ? budgetTitles : "You have no budgets yet"}
        </>
    );
}

export default BudgetsList;