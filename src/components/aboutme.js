import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div style={{color:'white'}}>
                <Grid>
                    <Cell className="aboutme-left" col={6}>
                        <h2 style={{paddingTop:'0.5em'}}>Frank Yan</h2>
                        <h4>Software Engineer</h4>
                        <hr style={{borderTop:'2px solid white',width:'95%'}}/>
                        <h6>Proficient in building software systems and delivering scalable data solutions</h6>
                        <hr style={{borderTop:'2px solid white',width:'95%'}}/>
                        <h6 style={{fontWeight:'bold'}}>Programming Languages</h6>
                        <p>Python, JavaScript, C++, C, SQL, HTML/CSS</p>
                        <h6 style={{fontWeight:'bold'}}>Frameworks and Tools</h6>
                        <p>Node, Express, Flask, React, Vue, Heroku, Git, Docker</p>
                        <h6 style={{fontWeight:'bold'}}>Databases</h6>
                        <p>AWS S3, AWS DynamoDB, MongoDB, Neo4j, mySQL</p>
                        <h6 style={{fontWeight:'bold'}}>Infrastructures</h6>
                        <p>AWS EC2, AWS Lambda, AWS API Gateway, AWS SageMaker</p>
                        <h6 style={{fontWeight:'bold'}}>Machine Learning:</h6>
                        <p>Keras, TensorFlow, NLP, RNN/LSTM, Timeseries</p>
                    </Cell>
                    <Cell className="aboutme-right" col={6}>
                        <h3 style={{paddingTop:'0.5em'}}>Education</h3>
                        <h6>University of Waterloo - Computational Mathematics (Class of 2020)</h6>
                        <h3 style={{paddingTop:'0.5em'}}>Work Experience</h3>
                        <h6 style={{fontWeight:'bold'}}>Software Developer - NLP</h6>
                        <p>Deloitte DSpace Lab | Waterloo, Ontario, Canada | May 2019 - Aug 2019</p>
                        <h6 style={{fontWeight:'bold'}}>Data Science Develoepr</h6>
                        <p>BMO Capital Markets | Toronto, Ontario, Canada | Sep 2018 - Dec 2018</p>
                        <h6 style={{fontWeight:'bold'}}>Data Analyst</h6>
                        <p>BMO Financial Group | Toronto, Ontario, Canada | Jan 2018 - April 2018</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;