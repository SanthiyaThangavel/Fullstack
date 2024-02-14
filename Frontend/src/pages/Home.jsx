import CustomNavbar from "../components/CustomNavbar"
// import S3Uploader from "../components/S3Uploader"
import '../assets/css/home.css'
// import img1 from "../assets/images/yoga_img.jpeg"
import yoga_img1 from '../assets/images/yoga1.jpg'
// import hom from "../assets/images/home.jpg"
const Home=()=>{
    return(
        <div className="container">
            <header>
                <CustomNavbar></CustomNavbar>
            </header>
            <section>
                {/* <div>
                    <S3Uploader></S3Uploader>
                </div> */}

            </section>
            <div>
                <h2 className="h11"><em>Yoga is a mirror to look at ourselves from within!</em></h2>
                <br></br>
                <p>Yoga is essentially a spiritual discipline based on an extremely subtle science,
                which focuses on bringing harmony between mind and body. It is an art and scince of healthy living.</p>
                   <p> The word Yoga is derived from the Sanskrit root Yuj, meaning to join or to yoke or to unite.</p>
                   <br></br>
                   <br></br>
                   <h3 className="h12"><em>About Curis wellness</em></h3>
                   <br></br>
                   <p className="p1">YOUR PRACTICE,</p>
                   <p className="p2">REIMAGINED!!</p>
                {/* <h2 className="h12"><em>REIMAGINED!</em></h2> */}
            </div>
            <div>
                <img className="img" src={yoga_img1}   alt=''></img>
            </div>

            
            <section className="wrapper">
              <div className="sliding-words">
                <div>Stretch!</div>
                <div>Breathe!</div>
                <div>Calm!</div>
                <div>Relax!</div>
                <div>Time for inner peace!</div>
                <div>Just Flow!</div>
                <div>Exhale Negativity!</div>
                <div>Health is Wealth!</div>
                <h1>Yoga is MAGIC</h1>
              </div>
            </section>
            {/* <h4 className="tit">Our Programs</h4>
            <div>
              <img className="pics" src={hom}></img>
            </div>
            <div className="s1">
            <h3 >Personal Yoga Training</h3>
            </div> */}
            <footer className="footer_area section_padding_130_0">
    <div className="container">
      <div className="row">
        {/* Single Widget*/}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="single-footer-widget section_padding_0_130">
            {/* Footer Logo*/}
            <div className="footer-logo mb-3" />
            
            {/* Copywrite Text*/}
            <div className="copywrite-text mb-5" style={{marginLeft:"630px",marginBottom:"50px"}}>
              {/* <p className="mb-0">
                Made with <i className="lni-heart mr-1" />
                by
                <a
                  className="ml-1"
                  href="https://wrapbootstrap.com/user/DesigningWorld"
                >
                  Genism
                </a>
              </p> */}
            </div>
            {/* Footer Social Area*/}
            <div className="footer_social_area" style={{marginLeft:"600px",marginBottom:"70px"}}>
              {/* <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                style={{backgroundColor:"rgb(138, 109, 160)"}}
                data-original-title="Facebook"
              >
                <i className="fa fa-facebook" style={{color:"white"}}/>
              </a> */}
              {/* <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                style={{backgroundColor:"rgb(138, 109, 160)"}}
                data-original-title="Linkedin"
              >
                <i className="fa fa-linkedin" style={{color:"white"}}/>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Instagram"
                style={{backgroundColor:"rgb(138, 109, 160)"}}
              >
                <i className="fa fa-instagram" style={{color:"white"}}/>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                style={{backgroundColor:"rgb(138, 109, 160)"}}
                data-original-title="Twitter"
              >
                <i className="fa fa-twitter" style={{color:"white"}} />
              </a> */}
            </div>
          </div>
        </div>
        {/* Single Widget*/}
        <div className="col-12 col-sm-6 col-lg" style={{marginLeft:"200px",marginBottom:"-200px"}}>
          <div className="single-footer-widget section_padding_0_130">
            {/* Widget Title*/}
            <h5 className="widget-title">About</h5>
            {/* Footer Menu*/}
            <div className="footer_menu" >
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Corporate Sale</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Policy</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Single Widget*/}
        <div className="col-12 col-sm-6 col-lg"style={{marginLeft:"700px",marginBottom:"-200px"}}>
          <div className="single-footer-widget section_padding_0_130" >
            {/* Widget Title*/}
            <h5 className="widget-title" >Support</h5>
            {/* Footer Menu*/}
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Term &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Help &amp; Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Single Widget*/}
        <div className="col-12 col-sm-6 col-lg" style={{marginLeft:"1100px",marginTop:"-220px"}}>
          <div className="single-footer-widget section_padding_0_130">
            {/* Widget Title*/}
            <h5 className="widget-title">Contact</h5>
            {/* Footer Menu*/}
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#">Call Centre</a>
                </li>
                <li>
                  <a href="#">Email Us</a>
                </li>
                <li>
                  <a href="#">Term &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</footer>
        </div>
    )
}
export default Home
