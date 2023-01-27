import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import entriesAPI from "../services/entriesAPI";

interface Entry {
    _id: string;
    account: string;
    amount: number;
    budget: string;
    category: string;
    date: string;
    description: string;
}

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
    }, []);

    const entriesList = entries.map(entry =>
        <div key={entry._id}>
            {`${entry.category}| ${entry.date} | ${entry.amount} | ${entry.account} | ${entry.description}`}
        </div>)

    return (
        <>
            <div>These are the entries for the budget</div>
            {entriesList}
        </>
    );
}

export default Budget;