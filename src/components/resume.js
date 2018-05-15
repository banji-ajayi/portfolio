import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://d30y9cdsu7xlg0.cloudfront.net/png/225980-200.png"
                                alt="resume-icon"
                                style={{height: '200px'}}
                             />
                        </div>

                        <h2 style={{paddingTop: '2em' }}>Olufemi Banji-Ajayi </h2>
                        <h4 style={{color: 'grey' }}>Software Developer </h4>
                        {/* <hr style={{borderTop: '3px solid gray', width:'50%'}}/>
                        <p> hhhhhhhhhhhhhh hhhhhhhh kkk kk;  jjjjj
                            jjjjjllllllll jjj jj jjjjjllllllll
                            hfhffhfh fjkdjskakejddjdj
                        </p> */}
                        <hr style={{borderTop: '3px solid gray', width:'50%'}}/>
                        {/* <p> hhhhhhhhhhhhhh hhhhhhhh kkk kk;  jjjjj
                            jjjjjllllllll jjj jj jjjjjllllllll
                            hfhffhfh fjkdjskakejddjdj
                        </p> */}
                        <h5>Address</h5>
                        <p> Greenstone Hill, Johannesburg SA </p>
                        <h5>Phone</h5>
                        <p> (+27) 78 682 5201</p>
                        <h5>Email</h5>
                        <p>femibanjiajayi@gmail.com </p>
                        <hr style={{borderTop: '3px solid gray', width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right" col={8}>
                    
                    <h2>Education</h2>
                    <Education
                        grad="Graduating"
                        endYear={2019}
                        schoolName="University of South Africa"
                        course= "Computing"
                    />
                    <Education
                        grad="Graduated"
                        endYear={2009}
                        schoolName="Obafemi Awolowo University, Nigeria"
                        course= "Agricultural Economics"
                    />

                    <hr style={{borderTop: '3px solid whitesmoke'}}/>
                    <h2>Experience</h2>

                    <Experience 
                    startYear={2010}
                    endYear={2013}
                    companyName="Grace InfoTech, Nigeria"
                    jobDescription="Software Deployment, Software Refactory, Software Support"
                    />

                    <Experience 
                    startYear={2014}
                    endYear={2015}
                    companyName="Freelancing (South Africa)"
                    jobDescription="FreeLance Development"
                    />

                    <Experience 
                    startYear={2015}
                    endYear={2018}
                    companyName="Adroyte Consulting, South Africa"
                    jobDescription="Software Development in Fintech and Telecoms Space"
                    />

                    <hr style={{borderTop: '3px solid whitesmoke'}}/>
                    <h2>Skills</h2>
                    
                    <Skills
                    skill="nodejs"
                    progress={75}
                    />

                    <Skills
                    skill="Angular 2"
                    progress={80}
                    />

                     <Skills
                    skill="Angular 4"
                    progress={75}
                    />

                     <Skills
                    skill="Angular 5"
                    progress={70}
                    />

                    <Skills
                    skill="React"
                    progress={70}
                    />

                    <Skills
                    skill="firebase"
                    progress={70}
                    />

                    <Skills
                    skill="Mongodb"
                    progress={70}
                    />

                    <Skills
                    skill="RestAPIs"
                    progress={70}
                    />

                    <Skills
                    skill="MySQL"
                    progress={85}
                    />

                    <Skills
                    skill="python"
                    progress={50}
                    />

                    <Skills
                    skill="C++"
                    progress={50}
                    />

                    <Skills
                    skill="C#"
                    progress={50}
                    />

                    <Skills
                    skill="Java"
                    progress={50}
                    />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;