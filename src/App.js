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

injectTapEventPlugin();

var arrPeople;

class App extends Component {
    componentWillMount(){
      this.state = {
          drawerOpen: true,
          mobile: false,
          moviesList: null,
          peopleList: [],
          speciesList: null,
          vehiclesList: null,
          planetsList: null
      }
      //console.log(this.state.peopleList);
      if(window.innerWidth < 740) this.setState({mobile:true, drawerOpen:false})
      else this.setState({mobile:false, drawerOpen:true}) ;
    }

    componentDidMount(){
        axios.get('http://swapi.co/api/films/')
          .then(function (response) {
              this.setState({moviesList: response.data.results});
              console.log(this.state.moviesList)
          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });

        for(var iterator1 = 1; iterator1 <= 9; iterator1++) {
            axios.get('http://swapi.co/api/people/?page=' + iterator1)
                .then(function (response) {
                    //console.log("antes")
                    //console.log(arrPeople)
                    //arrPeople = arrPeople.slice();
                    //console.log(arrPeople)
                    //response.data.results.forEach((person) => arrPeople.push(person));
                    this.setState({peopleList: response.data.results});


                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });

        }

        //console.log(arrPeople)
        //this.setState({peopleList: arrPeople});

        for(var iterator2 = 1; iterator2 <= 4; iterator2++) {
            axios.get('http://swapi.co/api/species/?page=' + iterator2)
                .then(function (response) {
                    this.setState({speciesList: response.data.results});
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        }

        for(var iterator3 = 1; iterator3 <= 4; iterator3++) {
            axios.get('http://swapi.co/api/vehicles/?page=' + iterator3)
                .then(function (response) {
                    this.setState({vehiclesList: response.data.results});
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        }

        for(var iterator4 = 1; iterator4 <= 7; iterator4++) {
            axios.get('http://swapi.co/api/planets/?page=' + iterator4)
                .then(function (response) {
                    this.setState({planetsList: response.data.results});
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

    MoviesDetail (props){
        if(this.state.moviesList != null)
            return (<ShowMovie movie={this.state.moviesList} mobile={this.state.mobile}/>);
        else return null;
    }

    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div className="Content-back">

                        <AppBar title={<SearchBar className="SearchBarStyle"/>} onLeftIconButtonTouchTap={this.onButtonClick.bind(this)} style={{backgroundColor:'#555'}}/>
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
                            <Paper className="Paper" zDepth={5}>
                                <Route exact path="/" render={() => <div> <List className="container"> <ListItem> <h1> Welcome to Star Wars Wiki</h1></ListItem></List></div>}/>
                                <Route path="/movies/:id/" render={this.MoviesDetail.bind(this)}/>
                                <Route exact path="/movies" render={this.MyListMovies.bind(this)}/>
                                <Route exact path="/people" render={this.MyListPeople.bind(this)}/>
                                <Route exact path="/vehicles" render={this.MyListVehicles.bind(this)}/>
                                <Route exact path="/species" render={this.MyListSpecies.bind(this)}/>
                                <Route exact path="/planets" render={this.MyListPlanets.bind(this)}/>
                                <Route path="/search"/>
                            </Paper>
                        </div>

                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}



export default App;
