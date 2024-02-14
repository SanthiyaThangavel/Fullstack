import { Progress } from "rsuite";

import "../assets/css/dash.css"
const Dashboard=()=>{
    return(
    <>
     

        <div className="dashh">
            <>
        <div>
        <div className="profile created-by-anniedotexe" style={{marginLeft:"-10px"}}>
        <div className="profile-pic">
          <div className="header-color" />
          
        </div>
        <div className="title">
          <h1 className="t1">ADMIN</h1>
          
        </div>
        
        <div className="description" >
          
        <div className="item" >
          
          <i style={{marginLeft:"-150px",marginTop:"40px"}} className="fa fa-home"/>
              <h5 style={{marginTop:"-20px"}}>Dashboard</h5>
              <i className="fa fa-users" style={{marginLeft:"-150px",marginTop:"40px"}} ></i> 
              <h5 style={{marginTop:"10px"}}>Users</h5>
              <i className="fa fa-comments" style={{marginLeft:"-150px",marginTop:"40px"}} />
              <h5 style={{marginTop:"20px"}}>Enrolled</h5>
              <i className="fa fa-book" style={{marginLeft:"-150px",marginTop:"40px"}} />
              <h5 style={{marginTop:"15px"}}>All Courses</h5>
              <i className="fa fa-bar-chart" style={{marginLeft:"-150px",marginTop:"40px"}} />
              <i className="fa fa-folder"  ></i>
              <h5 style={{marginTop:"20px"}}>Progress</h5>
             
        </div>
        <div className="item">
            
        </div>
        </div>
       
        
      </div>
        </div>
        <>
        </>
      </>
      
      <div className="grp">
        <div>

  
        </div>
    <div>
        <h6 className="t1">Progress</h6>

    <Progress.Line percent={30} strokeColor="#ffc107" />
    </div>
    <div>
        <h6 className="t2">Total Users</h6>

    <Progress.Line percent={30} status="active" />
    </div>
    <div>
        <h6 className="t3">Enrolled</h6>

    <Progress.Line percent={50} status="fail" />
    </div>
    <div>
        <h6 className="t4">Completed</h6>

    <Progress.Line percent={100} status="success" />
    </div>
    <div>
        <h6 className="t5">Total Academies</h6>

    <Progress.Line percent={80} strokeColor="#ffc107" />
    </div>
  </div>
        </div>
        </>
    )
}
export default Dashboard;