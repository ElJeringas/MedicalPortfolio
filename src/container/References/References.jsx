import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import reference1 from '../../assets/user-1.jpg'
import reference2 from '../../assets/user-2.jpg'
import reference3 from '../../assets/user-3.jpg'
import './References.css';
const References = () => {
  return (
    <section className='references__container'>
        <div className=' section__container'>
            <div className='references__content'>
                <h2>Testimonial</h2>
                <h1>Recommendations</h1>
                <div className='references__grid'>
                    <div className='references__card'>
                        <span><RiDoubleQuotesL/></span>
                        <h4>Love the simplicity</h4>
                        <p>
                            Est ut duis id laborum eu excepteur cillum cillum est quis consectetur nostrud ea.Officia sint velit ipsum et ullamco nostrud anim quis consequat est.
                            Amet nulla ullamco magna ut magna ea sunt incididunt laboris qui est id.
                        </p>
                        <img src={reference1} alt='reference 1'/>
                        <h5>Allan Collins</h5>
                        <h6>Managing Director</h6>
                    </div>
                    <div className='references__card'>
                        <span><RiDoubleQuotesL/></span>
                        <h4>Outstanding Professional</h4>
                        <p>
                            Est ut duis id laborum eu excepteur cillum cillum est quis consectetur nostrud ea.Officia sint velit ipsum et ullamco nostrud anim quis consequat est.
                            Amet nulla ullamco magna ut magna ea sunt incididunt laboris qui est id.
                        </p>
                        <img src={reference2} alt='reference 2'/>
                        <h5>Tanya McCartney</h5>
                        <h6>Former Boss</h6>
                    </div>
                    <div className='references__card'>
                        <span><RiDoubleQuotesL/></span>
                        <h4>Great  Job partner</h4>
                        <p>
                            Est ut duis id laborum eu excepteur cillum cillum est quis consectetur nostrud ea.Officia sint velit ipsum et ullamco nostrud anim quis consequat est.
                            Amet nulla ullamco magna ut magna ea sunt incididunt laboris qui est id.
                        </p>
                        <img src={reference3} alt='reference 3'/>
                        <h5>Clay Washington</h5>
                        <h6>Medical Doctor</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default References