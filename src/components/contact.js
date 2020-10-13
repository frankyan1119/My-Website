import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} style={{color:'white'}}>
                        <h4>Contact Me</h4>
                        <div className="contact-list">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <p>yahao_yan @ outlook.com</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;