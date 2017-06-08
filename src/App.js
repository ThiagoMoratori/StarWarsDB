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
import Paper from 'material-ui/Paper';
import './App.css';
import {List, ListItem} from 'material-ui/List';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListPeople from './ListPeople';
import ListMovies from  './ListMovies';
import ListPlanets from './ListPlanets';
import ListSpecies from './ListSpecies';
import ListVehicles from './ListVehicles';
import ShowMovie from './ShowMovie';
import SearchBar from './SearchBar';
import axios from 'axios';
import ShowCharacter from "./ShowCharacter";

injectTapEventPlugin();

var arrPeople = [];
var arrSpecies = [];
var arrVehicles = [];
var arrPlanets = [];

class App extends Component {
    componentWillMount(){
      this.state = {
          drawerOpen: true,
          mobile: false,
          moviesList: [],
          peopleList: [],
          speciesList: [],
          vehiclesList: [],
          planetsList: [],
          nextState: []
      }
      //console.log(this.state.peopleList);
      if(window.innerWidth < 740) this.setState({mobile:true, drawerOpen:false})
      else this.setState({mobile:false, drawerOpen:true}) ;
    }

    componentDidMount(){
        if(localStorage.getItem("movies") === null)
            axios.get('http://swapi.co/api/films/')
              .then(function (response) {
                  this.setState({moviesList: response.data.results});
                  localStorage.setItem("movies", JSON.stringify(this.state.moviesList));
              }.bind(this))
              .catch(function (error) {
                  console.log(error);
              });
        if(localStorage.getItem("characters") === null)
            for(var iterator1 = 1; iterator1 <= 9; iterator1++) {
                axios.get('http://swapi.co/api/people/?page=' + iterator1)
                    .then(function(response) {
                        arrPeople = arrPeople.slice();
                        response.data.results.forEach((person) => arrPeople.push(person));
                        this.setState({nextState:[arrPeople.length,0,0,0]});
                        //console.log(this.state.nextState)
                        if(this.state.nextState[0] === 87){
                            this.setState({peopleList: arrPeople});
                            localStorage.setItem("characters", JSON.stringify(arrPeople));
                            //console.log(JSON.parse(localStorage.getItem("characters")))
                        }

                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        if(localStorage.getItem("species") === null)
            for(var iterator2 = 1; iterator2 <= 4; iterator2++) {
                axios.get('http://swapi.co/api/species/?page=' + iterator2)
                    .then(function (response) {
                        arrSpecies = arrSpecies.slice();
                        response.data.results.forEach((person) => arrSpecies.push(person));
                        this.setState({nextState:[arrPeople.length,arrSpecies.length,0,0]});
                        //console.log(this.state.nextState)
                        if(this.state.nextState[1] === 37){
                            this.setState({speciesList: arrSpecies});
                            localStorage.setItem("species", JSON.stringify(arrSpecies));
                        }
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        if(localStorage.getItem("vehicles") === null)
            for(var iterator3 = 1; iterator3 <= 4; iterator3++) {
                axios.get('http://swapi.co/api/vehicles/?page=' + iterator3)
                    .then(function (response) {
                        arrVehicles = arrVehicles.slice();
                        response.data.results.forEach((person) => arrVehicles.push(person));
                        this.setState({nextState:[arrPeople.length,arrSpecies.length,arrVehicles.length,0]});
                        //console.log(this.state.nextState)
                        if(this.state.nextState[2] === 39){
                            this.setState({vehiclesList: arrVehicles});
                            localStorage.setItem("vehicles", JSON.stringify(arrVehicles));
                        }
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        if(localStorage.getItem("planets") === null)
            for(var iterator4 = 1; iterator4 <= 7; iterator4++) {
                axios.get('http://swapi.co/api/planets/?page=' + iterator4)
                    .then(function (response) {
                        arrPlanets = arrPlanets.slice();
                        response.data.results.forEach((person) => arrPlanets.push(person));
                        this.setState({nextState:[arrPeople.length,arrSpecies.length,arrVehicles.length,arrPlanets.length]});
                        //console.log(this.state.nextState)
                        if(this.state.nextState[3] === 61){
                            this.setState({planetsList: arrPlanets});
                            localStorage.setItem("planets", JSON.stringify(arrPlanets));
                        }
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }

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
      if(localStorage.getItem("movies") !== null)
          return (<ListMovies movie={JSON.parse(localStorage.getItem("movies"))} mobile={this.state.mobile}/>);
      else return null;
    }

    MyListPeople (props) {
        //console.log("Dentro do MyListPeople");
        //console.log(this.state.peopleList);
        if(localStorage.getItem("characters") !== null)
            return (<ListPeople people={JSON.parse(localStorage.getItem("characters"))} mobile={this.state.mobile}/>);
        else return null;
    }

    MyListSpecies (props) {
        //console.log("Dentro do MyListPeople");
        //console.log(this.state.peopleList);
        if(localStorage.getItem("species") !== null)
            return (<ListSpecies specie={JSON.parse(localStorage.getItem("species"))} mobile={this.state.mobile}/>);
        else return null;
    }

    MyListVehicles (props) {
        //console.log("Dentro do MyListVehicles");
        //console.log(this.state.peopleList);
        if(localStorage.getItem("vehicles") !== null)
            return (<ListVehicles vehicle={JSON.parse(localStorage.getItem("vehicles"))} mobile={this.state.mobile}/>);
        else return null;
    }

    MyListPlanets (props) {
        //console.log("Dentro do MyListPlanets");
        //console.log(this.state.peopleList);
        if(localStorage.getItem("planets") !== null)
            return (<ListPlanets planet={JSON.parse(localStorage.getItem("planets"))} mobile={this.state.mobile}/>);
        else return null;
    }

    MoviesDetail (props){
        if(localStorage.getItem("movies") !== null)
            return (<ShowMovie movie={JSON.parse(localStorage.getItem("movies"))} mobile={this.state.mobile} people={JSON.parse(localStorage.getItem("characters"))}/>);
        else return null;
    }

    CharactersDetail (props){
        if(localStorage.getItem("characters") !== null && localStorage.getItem("movies") !== null) {
            return (<ShowCharacter movie={JSON.parse(localStorage.getItem("movies"))} mobile={this.state.mobile} people={JSON.parse(localStorage.getItem("characters"))}/>);
        }else {
            return null;
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div className="Content-back">

                        <AppBar title={<SearchBar className="SearchBarStyle"/>} onLeftIconButtonTouchTap={this.onButtonClick.bind(this)} style={{backgroundColor:'#555', position:"fixed"}}/>
                        <Drawer
                            width={200}
                            open={this.state.drawerOpen}
                            containerStyle={{marginTop:64}}
                        >

                            <Link to="/movies" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Filmes</MenuItem></Link>
                            <Link to="/people" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Personagens</MenuItem></Link>
                            <Link to="/vehicles" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Veículos</MenuItem></Link>
                            <Link to="/species" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Espécies</MenuItem></Link>
                            <Link to="/planets" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Planetas</MenuItem></Link>
                        </Drawer>

                        <Paper className="Paper" zDepth={5}>
                            <Route exact path="/" render={() => <div> <List className="container"> <ListItem> <h1> Welcome to Star Wars Wiki</h1></ListItem></List></div>}/>
                            <Route path="/movies/:id/" render={this.MoviesDetail.bind(this)}/>
                            <Route exact path="/movies" render={this.MyListMovies.bind(this)}/>
                            <Route path="/people/:id/" render={this.CharactersDetail.bind(this)}/>
                            <Route exact path="/people" render={this.MyListPeople.bind(this)}/>
                            <Route exact path="/vehicles" render={this.MyListVehicles.bind(this)}/>
                            <Route exact path="/species" render={this.MyListSpecies.bind(this)}/>
                            <Route exact path="/planets" render={this.MyListPlanets.bind(this)}/>
                            <Route path="/search"/>
                        </Paper>


                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}



export default App;
