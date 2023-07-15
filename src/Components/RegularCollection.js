import "../Styles/Modal.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';



const regCollection = [
    {
        carModel: "Honda Cr-V 2021",
        totalRun: "22,409/Km",
        condition: "Great",
        askingPrice: "$30,450"
    },
    {
        carModel: "Audi A6 2021",
        totalRun: "19,647/Km",
        condition: "Need Servicing",
        askingPrice: "$54,900"
    },
    {
        carModel: "Audi Q3 2019",
        totalRun: "35,000/Km",
        condition: "Great",
        askingPrice: "$35,695"
    },
    {
        carModel: "Mercedes-Benz C-Class 2019",
        totalRun: "17,520/Km",
        condition: "Excellent",
        askingPrice: "$52,000"
    }
]


function RegularCollection() {
    return(
        <div className="regColContainer">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight:"bold"}}>CAR MODEL</TableCell>
                        <TableCell align="left" sx={{ fontWeight:"bold"}}>TOTAL RUN</TableCell>
                        <TableCell align="left" sx={{ fontWeight:"bold"}}>CONDITION</TableCell>
                        <TableCell align="left" sx={{ fontWeight:"bold"}}>ASKING PRICE</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {regCollection.map((row,index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row" sx={{ fontWeight:"bold", display:"flex", alignItems:"center", gap:"10px"}}><span><Avatar alt="Car" src="https://tse3.mm.bing.net/th?id=OIP.Vi_ovS0knFVT9bsMFZc8WgHaFj&pid=Api&P=0&h=180" /></span>
                        {row.carModel}
                    </TableCell>
                    <TableCell align="left">{row.totalRun}</TableCell>
                    <TableCell align="left">{row.condition}</TableCell>
                    <TableCell align="left">{row.askingPrice}</TableCell>
                    <TableCell align="right"><button style={{borderRadius: "20px", padding:"7px 20px", backgroundColor:"white", cursor:"pointer"}}>See details</button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>        
        </div>
    )
}

export default RegularCollection;