import React, {useEffect, useState, Fragment} from 'react';
import {Link} from 'react-router-dom';


import Header from './Header.js'
import Footer from './Footer.js'



export default function Body(){
    
    const [CheckList, setCheckList] = useState([
        {id: 1, selected : 0, point: 1, question : 'Do you have cough?', icon: 'fas fa-head-side-cough'},
        {id: 2, selected : 0, point: 1, question : 'Do you have cold?', icon: 'fas fa-thermometer-empty'},
        {id: 3, selected : 0, point: 1, question : 'Are you having diarrhea?', icon: 'fas fa-male',icon:'fas fa-toilet '},
        {id: 4, selected : 0, point: 1, question : 'Do you have sore throat?', icon: 'fas fa-diagnoses'},
        {id: 5, selected : 0, point: 1, question : 'Are you experiencing myalgia or body aches?', icon: 'fas fa-lungs'},
        {id: 6, selected : 0, point: 1, question : 'Do you have a headache?', icon: 'fas fa-brain'},
        {id: 7, selected : 0, point: 1, question : 'Do you have fever?', icon: 'fas fa-thermometer-full'},
        {id: 8, selected : 0, point: 2, question : 'Are you having difficulty in breathing?', icon: 'fas fa-lungs-virus'},
        {id: 9, selected : 0, point: 2, question : 'Are you experiencing fatigue?', icon: 'fa fa-male'},
        {id: 10, selected : 0, point: 3, question : 'Do you have you traveled recently during the past 14 days?', icon: 'fas fa-plane'},
        {id: 11, selected : 0, point: 3, question : 'Do you have travel history to a covid-19 infected area?', icon: 'fas fa-map-marked-alt'},
        {id: 12, selected : 0, point: 3, question : 'Do you have direct contact or is taking care of a positive covid-19 patient?', icon: 'fas fa-head-side-mask'},
    ]);

    const [score, setScore] = useState(0);

    
    const handleResult = async(data, checkedValue) => {
        try{
            const arr =  CheckList.map((ele) => {
                if(ele.id === data.id) {
                    ele.selected = checkedValue
                }
                return ele
            })
            setCheckList(arr)
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        let score =  0;
       
        CheckList.map(data => {
            if(data.selected === 1){
                score = score + data.point;
            }
            
        })
        setScore(score);
    },[CheckList])



  
    return(
        
        <Fragment>
            <Header />
        <section class="awesome-feature-area bg-white section_padding_0_50 clearfix" id="features">
          
            <div class="container" >           
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="row">
                            {CheckList.map((data,index) => {
                                return(
                                    <div class="col-12 col-md-4">
                                        <div class="single-special text-center wow fadeInUp" data-wow-delay="0.2s">
                                            <div class="single-icon">
                                                <i class={data.icon} aria-hidden="true"></i>
                                            </div>
                                            <h4>{data.question}</h4>
                                            <div class="app-download-area">
                                           
                                                <div class="app-download-btn">
                                                    <a    onClick={() => {handleResult(data, 1)}} className={data.selected === 1  ? 'selected-btn' : ''}><p> Yes</p></a>
                                                </div>
                                                <div class="app-download-btn">
                                                    <a   onClick={(defaultValue="defaultName") => {handleResult(data, 0)}} className={data.selected === 0 ? 'selected-btn' : ''}> <p> No</p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>                
                    </div>

                    <div class="col-12 col-md-4">
                            <div class="wrapper">
                                <div class="fixed">
                                        {score !== null && score !== 0 ? <div>                                          
                                            <div class="section-heading text-center">
                                                <h2>Result</h2>
                                                <div class="line-shape"></div>
                                            </div>
                                            <section class="section-one card section-margin">                                                
                                                <div>
                                                <div class="result">
                                                    <h1 class={score !== null && (score >= 0 && score <=5 ? "low" : score >= 6 && score <=12 ? "mid" : score >= 13 ? "high" : '')}>
                                                        {score !== null && (score >= 0 && score <=5 ? "Low" : score >= 6 && score <=12 ? "Medium" : score >= 13 ? "High" : '')}
                                                    </h1>            

                                                    <div class="layout-align">
                                                        <div id="score-meter-1" class="layout-align">
                                                        <div id="scorer-1-inner-div">
                                                            <div id="scorer-1-inner-div-5">
                                                                <div class={score !== null && (score >= 0 && score <=5 ? "scorer-1-tick low" : score >= 6 && score <=12 ? "scorer-1-tick mid" : score >= 13 ? "scorer-1-tick high" : '')}></div>
                                                            </div>
                                                        </div>
                                                        <div id="scorer-1-inner-div-2"></div>
                                                        <div id="scorer-1-inner-div-3"></div>
                                                        <div id="scorer-1-inner-div-4"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div>
                                                    <h1 class={score !== null && (score >= 0 && score <=5 ? "low" : score >= 6 && score <=12 ? "mid" : score >= 13 ? "high" : '')}>
                                                        {score !== null && 
                                                            ( score >= 0 && score <=2 ? <p>May be stress related and observe.</p>
                                                            : score >= 3 && score <=5 ? <p>Hydrate properly and proper personal hygine.<br />observe and re-evaluate after 2 days.</p>
                                                            : score >= 6 && score <=12? <p>Seek a consultation with doctor.</p>
                                                            : score >= 13 ? <p>Call the doh hotline 02-8-651-7800"</p>
                                                            : '')
                                                        }
                                                    </h1>    
                                                </div>
                                                </div>
                                            </section>

                                            {(score !== null && (score >= 0 && score <=5)) &&
                                                <section class="section-two card section-margin">
                                                    {score !== null && score !== 0 ?
                                                        <div>
                                                    <p>Based on your inputs, A1Abilities advises the following:</p>
                                                    <ol>
                                                        <li>Stay home and take-care of yourself in home isolation</li>
                                                        <li> Prevention and precautions
                                                       
                                                        </li>
                                                        <li>
                                                        Laboratory tests and imaging are optional
                                                        <span class="lite-text"
                                                            >(and as per your physician’s advise)</span
                                                        >
                                                        </li>
                                                        <li>
                                                        Covid-19 testing may be required at your physician’s advise
                                                        </li>
                                                        <li>
                                                        Monitor your symptoms and get medical attention if your situation worsens
                                                        </li>
                                                      <br></br>
                                                      <Link to={{pathname :'/suggestion', state : {risk: 'LOW'}}}>
                                                        <button type="button" class="link"> Suggestion</button>    
                                                    </Link>
                                                    
                                                  
                                                    </ol>
                                                    </div>
                                                    :''}
                                                </section>    
                                            }

                                            { (score !== null &&  (score >= 6 && score <=12)) &&
                                                <section class="section-two card section-margin">
                                                    <p>Based on your inputs, A1Abilities recommendations:</p>
                                                    <ol>
                                                    <li>Consult a physician and start home isolation immediately</li>
                                                    <li>
                                                        Prevention and precautions
                                                        
                                                    </li>
                                                    <li>
                                                        Laboratory tests and imaging may be needed as per your physician’s advise              
                                                    </li>
                                                    <li>
                                                        Covid-19 testing may be required at your physician’s advise
                                                    </li>
                                                    <li>
                                                        Monitor your symptoms and get medical attention if your situation worsens
                                                    </li>
                                                    <br></br>                                                    
                                                    <Link to={{pathname :'/suggestion', state : {risk: 'MEDIUM'}}}>
                                                        <button type="button" class="link"> Suggestion</button>    
                                                    </Link>
                                                    </ol>
                                                </section>
                                            }

                                            { (score !== null &&  (score >= 13)) &&
                                                <section class="section-two card section-margin">
                                                    <p>Based on your inputs, A1Abilities recommendations:</p>
                                                    <ol>
                                                    <li>Seek immediate medical attention and get yourself tested</li>
                                                    <li>Please visit a physician as there may be a requirement for further care</li>
                                                    <li>Covid-19 testing may be needed at your physician’s advise</li>
                                                    <li>
                                                        Prevention and precautions
                                                       
                                                    </li>
                                                    <li> Laboratory tests and imaging may be needed as per your physician's advise </li>
                                                    <li> Monitor your symptoms and isolate yourself </li>
                                                    <li> You can consult online here to speak to a physician immediately </li>
                                                    <br></br>                                                    
                                                    <Link to={{pathname :'/suggestion', state : {risk: 'HIGH'}}}>
                                                        <button type="button" class="link"> Suggestion</button>    
                                                    </Link>
                                                    </ol>
                                                </section>
                                            }
                                            
                                            </div>:
                                            
                                            <section class="section-four" id="details">
                                                <h3>Prevention and precautions - basic protective measures</h3>
                                                <p>
                                                Be aware or educate yourself with the latest updates on the
                                                following websites : 
                                                <a href="https://www.who.int/health-topics/coronavirus" target="_blank" >WHO </a> &
                                                <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert" target="_blank"> Department of Health - Australia</a> &
                                                <a href="https://www.healthdirect.gov.au/" target="_blank"> Health Direct</a>
                                                </p>
                                            
                                                <ul>
                                                <li>
                                                    <h4><img src="/img/wash.svg" width="50px"></img>&nbsp; Wash your hands frequently</h4>
                                                
                                                </li>
                                                <li>
                                                    <h4><img src="/img/soo.png" width="50px"></img>&nbsp;Maintain social distancing</h4>
                                                
                                                </li>
                                                <li>
                                                    <h4><img src="/img/f.svg" width="50px"></img>&nbsp;Avoid touching face </h4>
                                                
                                                </li>
                                                <li>
                                                    <h4><img src="/img/s.svg" width="50px"></img>&nbsp;Practice tespiratory hygiene</h4>
                                                
                                                </li>
                                            
                                                </ul>
                                            </section>
                                            }
                                        </div>
                             </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </Fragment>
    );
}

