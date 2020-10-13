import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width:'80%', margin: 'auto'}}>
                <Grid>
                    <Cell col={12}>
                        <img 
                        src="./photo.jpg"
                        alt="Frank"
                        className='frank-img'
                        />
                    <div className="banner-text">
                            <h1>Hello, I am Frank Yan.</h1>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://linkedin.com/in/frankyan1119" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            {/* Github */}
                            <a href="https://github.com/frankyan1119" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;