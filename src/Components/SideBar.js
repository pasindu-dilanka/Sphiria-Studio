import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import "../Styles/SideBar.css"


function SideBar() {
    return(
        <div className="sideBar">
            <HomeIcon style={{color:"white", cursor:"pointer"}}/>
            <DirectionsCarFilledIcon style={{color:"white", cursor:"pointer"}}/>
            <ChatBubbleOutlineRoundedIcon style={{color:"white", cursor:"pointer"}}/>
            <SettingsIcon style={{color:"white", cursor:"pointer"}}/>
            <Avatar style={{cursor:"pointer", marginTop:"470px"}} alt="men" src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png" />
        </div>
    )
}

export default SideBar;