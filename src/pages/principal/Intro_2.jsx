import React from 'react';
import russia_intro2 from '../../img/russia_intro2.jpg';

const Intro_2 = () => {
    return ( 
        <section>
            <div className='row'>
                <div className="col-md-6">
                    <div className='texto d-flex flex-column align-items-center justify-content-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi eius quos aliquid sapiente cupiditate quis fuga non aspernatur inventore, sequi ratione, natus    accusamus dolor optio veniam voluptates, quod eveniet?
                        </p>
                    </div>
                </div>
                <div className="col-md-6 texto d-flex flex-column align-items-center justify-content-center">
                    <img src={russia_intro2} alt="" className='img-fluid'/>
                </div>
            </div>
        </section>
     );
}
 
export default Intro_2;