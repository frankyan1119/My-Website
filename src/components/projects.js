import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <Card shadow={7} style={{minWidth:'450',marginTop:'7%',marginLeft:'auto',marginRight:'auto'}}>
                    <CardTitle style={{height:'250px', background:
                    'url(https://quickdraw.withgoogle.com/static/shareimg.png) center / cover'}}></CardTitle>
                    <CardText>
                        A drawing app to detect hand drawings. (Using Google's "The Quick, Draw!" Dataset)
                    </CardText>
                    <CardActions border>
                        <Link to="/projects/hand-drawing" target={"_blank"}>
                            <Button colored>Play</Button>
                        </Link>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'black'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1){
            return(
                <Card shadow={7} style={{minWidth:'450',marginTop:'7%',marginLeft:'auto',marginRight:'auto'}}>
                    <CardTitle style={{height:'250px', color:'white', background:
                    'url(https://bestfiveindia.files.wordpress.com/2020/01/weather.jpg) center / cover'}}>
                        Weather App
                    </CardTitle>
                    <CardText>
                        Help users check the weather forecast.
                    </CardText>
                    <CardActions border>
                        <Button colored>Run</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'white'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 2){
            return(
                <Card shadow={7} style={{minWidth:'450',marginTop:'7%',marginLeft:'auto',marginRight:'auto'}}>
                    <CardTitle style={{height:'250px', color:'white', background:
                    'url(https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress/2019/07/sb-blog-what-is-mle.png) center / cover'}}>
                        Weak Supervisied Labeling System
                    </CardTitle>
                    <CardText>
                        Help users check the weather forecast.
                    </CardText>
                    <CardActions border>
                    <a href="https://medium.com/@frankyan1119/astron-a-weak-supervised-labeling-system-intro-6e09c8ccaa4c" rel="noopener noreferrer" target="_blank">
                        <Button colored>Medium Blog</Button>
                    </a>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'white'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
            )
        }
    }
    render() {
        return(
            <div className="category-tabs">
                <Tabs 
                      activeTab={this.state.activeTab} 
                      onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{color:'white',textTransform:'none'}}>Hand Drawing Recognition</Tab>
                    <Tab style={{color:'white',textTransform:'none'}}>Check Weather</Tab>
                    <Tab style={{color:'white',textTransform:'none'}}>Weak Supervised Labeling System</Tab>
                </Tabs>

            <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </section>
            </div>
        )
    }
}

export default Projects;