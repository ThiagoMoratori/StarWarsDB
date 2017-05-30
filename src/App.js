import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SWInfo from './swinfo'

injectTapEventPlugin();

class App extends Component {
  componentWillMount(){
      this.state = {
          drawerOpen: true,
          mobile: false

      }
      console.log(window.innerWidth);
  }

  componentDidMount(){
      if(window.innerWidth < 800) this.setState({mobile:true, drawerOpen:false})
      else this.setState({mobile:false, drawerOpen:true})

  }

  onButtonClick(){
      if(this.state.drawerOpen) this.setState({drawerOpen:false})
      else this.setState({drawerOpen:true})

  }

  render() {
    return (
        <MuiThemeProvider>
            <BrowserRouter>
                <div>
                    <AppBar onLeftIconButtonTouchTap={this.onButtonClick.bind(this)} style={{backgroundColor:'#555'}}/>
                    <Drawer
                        width={200}
                        open={this.state.drawerOpen}
                        containerStyle={{marginTop:65}}
                    >
                        <MenuItem onTouchTap={this.handleClose}>Filmes</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Personagens</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Veículos</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Espécies</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Planetas</MenuItem>
                    </Drawer>
                    <div>
                        <Route exact path="/" component={SWInfo}/>
                    </div>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
