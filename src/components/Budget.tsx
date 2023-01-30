import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Entry } from "../types/AppTypes";
import entriesAPI from "../services/entriesAPI";
import TableHeaders from "./TableHeader";
import TableRows from "./TableRows";

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
            <div className="budget-table">
                <div className="budget-table__controls">
                    Budget Controls go here
                </div>
                <TableHeaders />
                <TableRows entries={entries} />
            </div>
        <Link to={"/home"}>Back Home!</Link>
        </div>
    );
}

export default Budget;