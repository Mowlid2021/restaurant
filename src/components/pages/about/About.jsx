import React from 'react'
import "./About.css"
import mowlid from "../../../asets/images/mowlid.jpg"
import mowlidcali from "../../../asets/images/mowlidcali.jpg"

function About() {

  return (

    <div className='about'>

      <div className="left">
        <img src={mowlidcali} alt="" />
          <h1>Pizza</h1>
      </div>

      <div className="right">
        <div className="item1">
          <span>
            <h1>About Us</h1>
            <h4> Aas-aasaha shirkadaan yar waxaa isku daba ridey oona iskaleh milkiyadeeda mowlid cali siidow   </h4>
          </span>
        </div>
    
        <div className="item2">
          <section>
            <img src={mowlid} alt="" />
            <span>
              <h2>Shaqadeena ?</h2>
              <p>waxaan halkaan kuiibinaa cunooyin kala duwan waxay kalayihiin pizza baasto bariis iyo cabitaano kalanooc ah</p>
            </span>
          </section>

          <section>
            <img src={mowlid} alt="" />
            <span>
              <h2>Goobta</h2>
              <p>Goobta shaqada aan kuqabano waxay kutaalaa magaala madaxda soomaaliya ee Muqdisho gaar ahaan KM4 kasoo horjeed ka PTW ee Tyui</p>
            </span>
          </section>

          <section>
            <img src={mowlid} alt="" />
            <span>
              <h2>Macaamiisha</h2>
              <p>Macaamiisheena waxay kunoolyihiin wadanka gudihiisa, inaga maqabano adeegyo dibada ah waqti xaadirkaan</p>
            </span>
          </section>

          <section>
            <img src={mowlid} alt="" />
            <span>
              <h2>Booqasho</h2>
              <p>Waxaax si toos ah Noogulasoo xiriiri kartaa Email yada hoose kaaga muuqda ama telefanada hoos kaaga muuqda</p>
            </span>
          </section>
        </div>        
      </div>
    </div>
  )
}

export default About
