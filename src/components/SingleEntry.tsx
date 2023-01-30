import { Entry } from "../types/AppTypes";
import "../styles/Table.css";

type SingleEntryProps = { entry: Entry }

function SingleEntry({ entry }: SingleEntryProps) {
    
    function formatDate(dateString: string) {
        const entryDate = new Date(dateString);
        const day = entryDate.getDate();
        const month = entryDate.getMonth() + 1;
        const year = entryDate.getFullYear();
        return (`${day > 9 ? day : "0" + day}/${month > 9 ? month : "0" + month}/${year}`);
    }
    return (
        <div className="table__entry">
            <p className="table__cell">{`${entry.category}`}</p>
            <p className="table__cell">{`${formatDate(entry.date)}`}</p>
            <p className="table__cell">{`${entry.amount.toFixed(2)}`}</p>
            <p className="table__cell">{`${entry.account}`}</p>
            <p className="table__cell">{`${entry.description}`}</p>
        </div>
    );
}

export default SingleEntry; 