import SingleEntry from "./SingleEntry";
import "../styles/Table.css";
import { Entry } from "../types/AppTypes";

type TableRowsProps = { entries: Entry[]}

function TableRows({ entries }: TableRowsProps) {
    const entriesList = entries.map(entry => <SingleEntry entry={entry} key={entry._id} />);
    
    return (
        <div className="table__rows">
            {entriesList}
        </div>
    );
}

export default TableRows;