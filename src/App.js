import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    BrowserRouter,
    Route,
    Link
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
          moviesList: null,
          peopleList: null,
          speciesList: null,
          vehiclesList: null,
          planetsList: null

      }
      //console.log(this.state.peopleList);
      if(window.innerWidth < 800) this.setState({mobile:true, drawerOpen:false})
      else this.setState({mobile:false, drawerOpen:true}) ;
    }

    componentDidMount(){
        axios.get('http://swapi.co/api/films/')
          .then(function (response) {
              this.setState({moviesList: response.data.results});
          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });

        axios.get('http://swapi.co/api/people/')
            .then(function (response) {
                this.setState({peopleList: response.data.results});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://swapi.co/api/species/')
            .then(function (response) {
                this.setState({speciesList: response.data.results});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://swapi.co/api/vehicles/')
            .then(function (response) {
                this.setState({vehiclesList: response.data.results});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://swapi.co/api/planets/')
            .then(function (response) {
                this.setState({planetsList: response.data.results});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

    }

    onButtonClick(){
      if(this.state.drawerOpen) this.setState({drawerOpen:false})
      else this.setState({drawerOpen:true})
    }

    handleClose = () => {
        if(window.innerWidth < 800)this.setState({drawerOpen: false});
    }

    MyListMovies (props) {
      //console.log("Dentro do MyListMovies");
      //console.log(this.state.moviesList);
      if(this.state.moviesList != null)
          return (<ListMovies movie={this.state.moviesList} mobile={this.state.mobile}/>);
      else return null;
    }

    MyListPeople (props) {
        //console.log("Dentro do MyListPeople");
        //console.log(this.state.peopleList);
        if(this.state.peopleList != null)
            return (<ListPeople people={this.state.peopleList} mobile={this.state.mobile}/>);
        else return null;
    }

    MyListSpecies (props) {
        //console.log("Dentro do MyListPeople");
        //console.log(this.state.peopleList);
        if(this.state.speciesList != null)
            return (<ListSpecies specie={this.state.speciesList} mobile={this.state.mobile}/>);
        else return null;
    }

    MyListVehicles (props) {
        //console.log("Dentro do MyListVehicles");
        //console.log(this.state.peopleList);
        if(this.state.vehiclesList != null)
            return (<ListVehicles vehicle={this.state.vehiclesList} mobile={this.state.mobile}/>);
        else return null;
    }

    MyListPlanets (props) {
        //console.log("Dentro do MyListPlanets");
        //console.log(this.state.peopleList);
        if(this.state.planetsList != null)
            return (<ListPlanets planet={this.state.planetsList} mobile={this.state.mobile}/>);
        else return null;
    }

    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div className="Content">
                        <AppBar title="Star Wars Wiki" onLeftIconButtonTouchTap={this.onButtonClick.bind(this)} style={{backgroundColor:'#555'}}/>
                        <Drawer
                            width={200}
                            open={this.state.drawerOpen}
                            containerStyle={{marginTop:65}}
                        >

                            <Link to="/movies" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Filmes</MenuItem></Link>
                            <Link to="/people" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Personagens</MenuItem></Link>
                            <Link to="/vehicles" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Veículos</MenuItem></Link>
                            <Link to="/species" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Espécies</MenuItem></Link>
                            <Link to="/planets" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Planetas</MenuItem></Link>
                        </Drawer>
                        <div>
                            <Route exact path="/" render={() => <div> <h1> Welcome to Star Wars Wiki</h1></div>}/>
                            <Route path="/movies" render={this.MyListMovies.bind(this)}/>
                            <Route path="/people" render={this.MyListPeople.bind(this)}/>
                            <Route path="/vehicles" render={this.MyListVehicles.bind(this)}/>
                            <Route path="/species" render={this.MyListSpecies.bind(this)}/>
                            <Route path="/planets" render={this.MyListPlanets.bind(this)}/>
                        </div>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}



export default App;
