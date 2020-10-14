import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { NavLink } from 'react-router-dom';
import Main from './components/main';

class App extends Component {
    render() {
        return (
        <div>
            <Layout fixedHeader style={{background: "url('./background.jpg') center / cover"}}>
                <Header transparent title=" " style={{color: 'white'}} scroll>
                    <Navigation>
                        <NavLink exact to="/" activeStyle={{fontWeight:"bold"}}>Home</NavLink>
                        <NavLink to="/aboutme" activeStyle={{fontWeight:"bold"}}>About Me</NavLink>
                        <NavLink to="/projects" activeStyle={{fontWeight:"bold"}}>Projects</NavLink>
                        <NavLink to="/contact" activeStyle={{fontWeight:"bold"}}>Contact</NavLink>
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
