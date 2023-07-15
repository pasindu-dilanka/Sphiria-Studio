import "../Styles/TopBar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function TopBar() {
    return(
        <div className="topBar">
            <div className="logo">
                <img style={{width:"60px", height:"80px", marginLeft:"20px", mixBlendMode:"multiply"}} src="https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg" alt='car' />
                <h1 style={{marginLeft:"5px"}}>filllo</h1>
            </div>
            <NotificationsNoneIcon sx={{marginRight:"30px"}}/>
        </div>
    )
}

export default TopBar;