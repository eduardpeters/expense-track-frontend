import "../styles/Table.css";

function TableHeaders() {
    return (
        <div className="table__headers">
            <p className="table__cell">Category</p>
            <p className="table__cell">Date</p>
            <p className="table__cell">Amount</p>
            <p className="table__cell">Account</p>
            <p className="table__cell">Description</p>
        </div>
    );
}

export default TableHeaders;