import CustomNavbar from "../components/CustomNavbar"
// import S3Uploader from "../components/S3Uploader"
import '../assets/css/home.css'
import img1 from "../assets/images/yoga_img.jpeg"
import yoga_img1 from '../assets/images/yoga1.jpg'

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
                <h2 className="h11"><em>YOUR PRACTICE,</em></h2>
                <h2 className="h12"><em>REIMAGINED!</em></h2>
            </div>
            <div>
                <img className="img" src={yoga_img1}   alt=''></img>
            </div>

            <div className="new">
            <div className="wrap animate pop">
            <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
              <h1 className="animate slide-left pop delay-4">Yoga</h1>
              <p
                className="animate slide-left pop delay-5"
                style={{ color: "black", marginBottom: "2.5rem" }}
              >
              Breathe! and Relax!
            </p>
          </div>
          <div className="image-content animate slide delay-5" />
            <div className="dots animate">
            <div className="dot animate slide-up delay-6" />
            <div className="dot animate slide-up delay-7" />
            <div className="dot animate slide-up delay-8" />
          </div>
        </div>
        <div className="text">
            <p>
              <img
                className="inset"
                src={img1}
                alt=""
              />
              <em>YOGA BENEFITS</em>
              <br></br>
              The benefits of Yoga are numerous. In terms of energy Yoga is like a universe in itself. 
                Some of the important Yoga benefits include anti-ageing, balance .
            </p>
            <br></br>
            <p>
              <em>YOGA HISTORY</em>
              <br></br>
            Yoga is said to be as old as Indus valley civilization, 
            there is no physical evidence to support this claim. The ancient archeological excavations of ancient.
            </p>
            <br></br>
            <p>
              <em>YOGA PHILOSOPHY</em>
              <br></br>
              The Yoga system of philosophy accepts three fundamental realities, namely, Ishwara, Purusha and Prakriti or the primordial matter. Patanjali says that scriptures are the sources of the existence of Ishwara. 
              Ishwara is omniscient and is free from the qualities inherent in Prakriti.
            </p>
  </div></div>
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

            
            <div className="mkt-3dSlider py-6">
              <h1 className="mkt-3dSlider-title">Inhale the Future! Exhale the Past!!</h1>
              <p className="mkt-3dSlider-description">Our Intentions</p>
              <section id="slider">
                <input className="card-slider" type="radio" name="slider" id="s1" />
                <input className="card-slider" type="radio" name="slider" id="s2" />
                <input
                  className="card-slider"
                  type="radio"
                  name="slider"
                  id="s3"
                  defaultChecked=""
                  />
                  <input className="card-slider" type="radio" name="slider" id="s4" />
                  <input className="card-slider" type="radio" name="slider" id="s5" />
                  <label htmlFor="s1" id="slide1" className="card-slider">
                    <div>
                      <p className="p123">Align</p>
                      <h1 className="newh">Intention+Action</h1>
                      <p className="para">Self-study as a means to chart your course. then together we walk that path with the support of community, common goals, and experienced teachers.
                      We pay homage to the traditional nature of the Yoga practice with a practical and functional approach to asana built for today bodies and minds. 
                      This practice encourages personal exploration, potentiality, and freedom of movement from both the teacher and the student.
                      </p>
                    </div>
                  </label>
                  <label htmlFor="s2" id="slide2" className="card-slider" />
                  <div>
                    <p>Awaken</p>
                  </div>
                  <label htmlFor="s3" id="slide3" className="card-slider" />
                  <label htmlFor="s4" id="slide4" className="card-slider" />
                  <label htmlFor="s5" id="slide5" className="card-slider" />
                </section>
</div>

            

        </div>
    )
}
export default Home
