import style from "./style.module.css"

interface TableRowIF {
    number: string;
}

const TableRow = ({number}: TableRowIF) => (
    <tr>
        <td>{number}</td>
        <td>Complete</td>
        <td>15/10/2022</td>
        <td>12:12</td>
        <td>Kansas</td>
    </tr>
);

const EventsContainer = () => {
    
    return (
        <div className={`${style.eventsBox}`}>
            <table className={`${style.eventsTable}`}>
                <thead className={`${style.tableHeader}`}>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody className={`${style.tableBody}`}>

                    <TableRow number = "1"/>
                    <TableRow number = "2"/>
                    <TableRow number = "3"/>
                </tbody>
            </table>
        </div>
    )
}

export default EventsContainer;