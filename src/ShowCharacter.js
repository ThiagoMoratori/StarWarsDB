/**
 * Created by AppMasters on 06/06/2017.
 */
/**
 * Created by AppMasters on 05/06/2017.
 */
import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

var characterInfo;
var page;

class ShowCharacter extends React.Component{

    componentWillMount(){
        this.state = {
            movie: this.props.movie,
            mobile: this.props.mobile,
            people: this.props.people,
            char: this.props.char
        };

        //console.log(this.state.char);
        //get the right movie and set to an Object
        page = window.location.href.substring(29);
        //console.log(page);
        this.state.people.map((character)=> {
            //console.log(character.url.substring(27))
            if(character.url.substring(27) === page) {
                characterInfo = character;
            }
        })

    }

    ShowMoviesList(){

        //return details from the movie
        return this.state.movie.map((movie)=> {
            if(characterInfo.films.indexOf(movie.url) > -1){return( <Link to={"/movies/" + movie.url.substring(26)}><ListItem
                key={movie.title.toString()}
                primaryText={movie.title}
            /></Link>)}})


    }

    render(){

        return(
            <List>
                <ListItem key={characterInfo.name} primaryText={"> Name: " + characterInfo.name}/>
                <ListItem key={characterInfo.height} primaryText={"> Height: " + characterInfo.height}/>
                <ListItem key={characterInfo.mass} primaryText={"> Mass: " + characterInfo.mass}/>
                <ListItem key={characterInfo.hair_color} primaryText={"> Hair Color: " + characterInfo.hair_color}/>
                <ListItem key={characterInfo.eye_color} primaryText={"> Eye Color: " + characterInfo.eye_color}/>
                <ListItem key={characterInfo.gender} primaryText={"> Gender: " + characterInfo.gender}/>
                <ListItem primaryText="> Movies:" />
                {this.ShowMoviesList()}
            </List>
        )
    }
}


//<div>Teste</div>
export default ShowCharacter;
