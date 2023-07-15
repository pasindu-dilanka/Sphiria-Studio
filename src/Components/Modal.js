import "../Styles/Modal.css"
import CarComponent from "./CarComponent";
import RegularCollection from "./RegularCollection";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


function Modal() {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <TopBar />
                <div style={{display:"flex"}}>
                    <div>
                        <SideBar />
                    </div>
                    <div>
                        <div className="top">
                            <div className="name">
                                <span>Good Morning,</span>
                                <span style={{fontSize:"24px", fontWeight:"bold"}}>Arafat Ahmed Chowdhury</span>
                            </div>
                            <div className="search">
                                <SearchRoundedIcon />
                                <span>Search here</span>
                            </div>

                        </div>
                        <h3 style={{marginLeft:"20px"}}>Hot Collections</h3>
                        <div className="carBlock">
                            <CarComponent />
                            <CarComponent />
                        </div>     
                        <h3 style={{marginLeft:"20px"}}>Regular Collections</h3>
                        <RegularCollection />
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default Modal;