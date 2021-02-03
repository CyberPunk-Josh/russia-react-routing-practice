import React from 'react';
import russia_intro from '../../img/russia_intro.jpg';

const Intro = () => {
    return ( 
        <section>
            <h1 className='text-center text-uppercase mt-5 mb-5'>A little bit about russia</h1>
            <div className='row'>
                <div className="col-md-6 texto d-flex flex-column align-items-center justify-content-center">
                    <img src={russia_intro} alt="" className='img-fluid'/>
                </div>
                <div className="col-md-6">
                    <div className='texto d-flex flex-column align-items-center justify-content-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi eius quos aliquid sapiente cupiditate quis fuga non aspernatur inventore, sequi ratione, natus    accusamus dolor optio veniam voluptates, quod eveniet?
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Intro;