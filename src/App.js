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
import ListPeople from './ListPeople';
import ListMovies from  './ListMovies';
import ListPlanets from './ListPlanets';
import ListSpecies from './ListSpecies';
import ListVehicles from './ListVehicles';
import axios from 'axios';

injectTapEventPlugin();

class App extends Component {
  componentWillMount(){
      this.state = {
          drawerOpen: true,
          mobile: false,
          peopleList: null
      }
      //console.log(this.state.peopleList);
      if(window.innerWidth < 800) this.setState({mobile:true, drawerOpen:false})
      else this.setState({mobile:false, drawerOpen:true}) ;
  }

  componentDidMount(){


      axios.get('http://swapi.co/api/people/')
          .then(function (response) {
              this.setState({peopleList: response.data.results});
          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });

  }

  onButtonClick(){
      if(this.state.drawerOpen) this.setState({drawerOpen:false})
      else this.setState({drawerOpen:true})
  }

  handleClose = () => this.setState({drawerOpen: false});

  MyListPeople (props) {
      //console.log("Dentro do MyListPeople");
      //console.log(this.state.peopleList);
      if(this.state.peopleList != null)
          return (<ListPeople people={this.state.peopleList}/>);
      else return null;
  }

  render() {
    return (
        <MuiThemeProvider>
            <BrowserRouter>
                <div>
                    <AppBar title="Star Wars Wiki" onLeftIconButtonTouchTap={this.onButtonClick.bind(this)} style={{backgroundColor:'#555'}}/>
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
                    <div style={{backgroundImage:  `url('../assets/starwars.jgp')`}}>
                        <Route exact path="/" render={this.MyListPeople.bind(this)}/>
                    </div>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}



export default App;
