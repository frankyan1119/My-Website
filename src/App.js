import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

class App extends Component {
    render() {
        return (
        <div>
            <Layout fixedHeader style={{background: "url('./background.jpg') center / cover"}}>
                <Header transparent title=" " style={{color: 'white'}} scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Content>
                    <div className='page-content' />
                    <Main/>
                </Content>
            </Layout>
        </div>
        );
    }
}

export default App;
