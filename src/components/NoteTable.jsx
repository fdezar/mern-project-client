import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function NoteTable() {

    return (
        <>
            <Title>Recent Orders</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Ship To</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.shipTo}</TableCell>
                      <TableCell>{row.paymentMethod}</TableCell>
                      <TableCell align="right">{`$${row.amount}`}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
    </>

     // <table>
        //         <thead>
        //             <tr>
        //                 <th>icon Name</th>
        //                 <th>icon Last Update</th>
        //                 <th>Shared</th>
        //             </tr>
        //             <tbody>
        //                 {notes.map(note => {
        //                     return <NoteRow key={note._id} note={note.name} />
        //                 })}
        //             </tbody>
        //         </thead>
        //     </table>
    );
}

export default NoteTable;