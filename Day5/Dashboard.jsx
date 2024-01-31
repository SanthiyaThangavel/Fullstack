import "../assets/css/dash.css"
const Dashboard=()=>{
    return(
        <div className="dashh">
            <>
        <div>
        <div className="profile created-by-anniedotexe" style={{marginLeft:"-10px"}}>
        <div className="profile-pic">
          <div className="header-color" />
          {/* <img
            src="https://anniedotexe.github.io/hosted-assets/dailyui/dailyui006/profile-pic.jpg"
            alt="Profile Picture"
          /> */}
        </div>
        <div className="title">
          <h1>ADMIN</h1>
          
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
      </>
        </div>
    )
}
export default Dashboard;