import { Link } from 'react-router-dom'
import '../assets/css/acad.css'
const Academy=()=>{
    return(
        <div>
            <p>The courses available are</p>
            <div className="c1">
                <div className="art">
                    <img
                        className="art__background"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVh-o6JU0I5ifsx07Rb8UwLnFcPX3mdHAlQ&usqp=CAU"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width={1920}
                        height={2193}
                    />
                    <div className="art__content | flow">
                        <div className="art__content--container | flow">
                        <h2 className="art__title">Advance Yoga</h2>
                        <p className="art__description">
                        Advanced yoga poses test the mental agility and grit of the practitioner, as these practices require the limbs and joints to get into unusual positions and angles involved.
                        </p>
                        </div>
                    <button className="art__button"><Link to='/enroll'>Enroll now</Link></button>
                    </div>
                </div>
            </div>
            <div className="c2">
                <div className="art">
                    <img
                        className="art__background"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TkoKfbRq21pCrw3wff2e-TG4ItzTs_ZvFg&usqp=CAU"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width={1920}
                        height={2193}
                    />
                    <div className="art__content | flow">
                        <div className="art__content--container | flow">
                        <h2 className="art__title">Yoga for Strength</h2>
                        <p className="art__description">
                        The movements of yoga are designed to challenge flexibility, balance, coordination and strength, increasing your bodys efficiency and overall health.
                        </p>
                        </div>
                    <button className="art__button"><Link to='/enroll'>Enroll now</Link></button>
                    </div>
                 </div>
            </div>
            <div className="c3">
                <div className="art">
                    <img
                        className="art__background"
                        src="data:image/jpeg;base64,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"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width={1920}
                        height={2193}
                    />
                    <div className="art__content | flow">
                        <div className="art__content--container | flow">
                        <h2 className="art__title">Prenatal Yoga</h2>
                        <p className="art__description">
                        Prenatal yoga is a type of yoga designed for pregnant women. Yoga is intended to create a balance between emotional, mental, physical, and spiritual dimensions. 
                        </p>
                        </div>
                    <button className="art__button"><Link to='/enroll'>Enroll now</Link></button>
                    </div>
                 </div>
            </div>
            <div className="c4">
                <div className="art">
                    <img
                        className="art__background"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINGg4Pl9QbA40VS1XSc_NaHyPVufDT2P8-8sZrJPaWJnE320d1SbMgGI6RElz3uFF7uE&usqp=CAU"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width={1920}
                        height={2193}
                    />
                    <div className="art__content | flow">
                        <div className="art__content--container | flow">
                        <h2 className="art__title">Personal Training</h2>
                        <p className="art__description">
                        Unlike group yoga classes Personal Yoga sessions are individualized. Personal Yoga sessions are good for beginners to help them further feel comfortable. 
                        </p>
                        </div>
                    <button className="art__button"><Link to='/enroll'>Enroll now</Link></button>
                    </div>
                 </div>
            </div>
            <div className="c5">
                <div className="art">
                    <img
                        className="art__background"
                        src="data:image/jpeg;base64,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"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width={1920}
                        height={2193}
                    />
                    <div className="art__content | flow">
                        <div className="art__content--container | flow">
                        <h2 className="art__title">Kids Yoga</h2>
                        <p className="art__description">
                        Yoga for children is a form of yoga as exercise designed for children. It includes poses to increase strength, flexibility, and coordination. 
                        </p>
                        </div>
                    <button className="art__button"><Link to='/enroll'>Enroll now</Link></button>
                    </div>
                 </div>
            </div>
    </div>

    )
}
export default Academy