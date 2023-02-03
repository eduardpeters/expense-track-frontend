import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Entry } from "../types/AppTypes";
import entriesAPI from "../services/entriesAPI";
import BudgetControls from "./BudgetControls";
import TableHeaders from "./TableHeader";
import TableRows from "./TableRows";
import "../styles/Budget.css";
import BudgetOverview from "./BudgetOverview";

function Budget() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const { budgetId } = useParams();

    useEffect(() => {
        async function getEntries(token: string) {
            const entriesResponse = await entriesAPI.getEntries(token, budgetId!);
            console.log(entriesResponse);
            setEntries(entriesResponse);
        }
        const storedToken = localStorage.getItem("expenseTrackToken");
        if (storedToken && budgetId) {
            getEntries(storedToken);
        }
    }, [budgetId]);

    return (
        <div className="budget-container">
            <BudgetControls />
            <div className="budget-table">
                <TableHeaders />
                <TableRows entries={entries} />
            </div>
            <BudgetOverview />
        </div>
    );
}

export default Budget;