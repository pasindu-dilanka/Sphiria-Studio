import "../Styles/CarComponent.css"
import BoltIcon from '@mui/icons-material/Bolt';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HeightIcon from '@mui/icons-material/Height';
import CarRepairIcon from '@mui/icons-material/CarRepair';

function CarComponent(){
    return(
        <div className="carContainer">
            <div className="carDetail">
                <div className="photo">
                    <img style={{width:"35px", height:"30px", marginLeft:"20px", mixBlendMode:"multiply"}} src="https://3.bp.blogspot.com/-Kby1cvd-9Uo/Troch4___VI/AAAAAAAAFlE/jGybiQle-Nk/s1600/Nissan.png" alt="logoPhoto" />
                    <span style={{fontSize:"16px", fontWeight:"bold"}}>Nissan GTR</span>
                </div>

                <img style={{width:"200px", height:"100px", marginLeft:"20px", mixBlendMode:"multiply"}} src="car1.png" alt="carPhoto" />
                
                <div className="price">
                    <span style={{fontSize:"10px"}}>ASKING PRICE</span>
                    <div>
                        <span style={{fontSize:"24px", fontWeight:"bold"}}>$38,700</span><span style={{fontSize:"10px"}}>USD</span>
                    </div>
                </div>
            </div>
            <div className="otherDetail">
                <div className="iconSet">
                    <div className="icons">
                        <div className="icon1">
                            <BoltIcon />
                            <span style={{fontSize:"12px"}}>1997 CC</span>
                        </div>
                        <div className="icon2">
                            <WaterDropIcon />
                            <span style={{fontSize:"12px"}}>6 Speed</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon3">
                            <HeightIcon />
                            <span style={{fontSize:"12px"}}>246.77 BHP</span>
                        </div>
                        <div className="icon4">
                            <BoltIcon />
                            <span style={{fontSize:"12px"}}>4 Cylinder</span>
                        </div>
                    </div>
                </div>
                <div className="totalRun">
                    <CarRepairIcon />
                    <span style={{fontSize:"12px" ,fontWeight:"bold", marginLeft:"2px"}}>Total Run:</span><span style={{fontSize:"12px"}}>12,500</span><span style={{fontSize:"10px"}}>km</span>
                </div>
            </div>      
        </div>
    )
}

export default CarComponent;