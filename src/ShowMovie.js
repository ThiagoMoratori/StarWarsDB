/**
 * Created by AppMasters on 05/06/2017.
 */
import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import ShowCharacter from './ShowCharacter';

var url;
var page;
var movieInfo;

class ShowMovie extends React.Component{

    componentWillMount(){
        this.state = {
            movie: this.props.movie,
            mobile: this.props.mobile,
            people: this.props.people
        };
        //get current url to get which movie we want
        url = window.location.href;
        page = url.slice(-2,-1);

        //get the right movie and set to an Object
        this.state.movie.map((movie)=> {
            if(movie.episode_id == page) {
                movieInfo = movie;
            }
        })
    }

    ShowCharactersList(){

        //return details from the movie
        return this.state.people.map((character,i)=> {
            //console.log(movieInfo.characters.indexOf(character.url))
            if(movieInfo.characters.indexOf(character.url) > -1){return( <Link to={"/people/" + character.url.substring(27)} style={{ textDecoration: 'none' }}><ListItem
            key={character.name.toString()}
            primaryText={character.name}
            onClick={<ShowCharacter char="Teste"/>}
            /></Link>)}})


    }

    render(){

        return(
            <div>
                <List>
                    <ListItem key={movieInfo.title} primaryText={"> Title: " + movieInfo.title}/>
                    <ListItem key={movieInfo.episode_id} primaryText={"> Episode: " + movieInfo.episode_id}/>
                    <ListItem key={movieInfo.director} primaryText={"> Director: " + movieInfo.director}/>
                    <ListItem key={movieInfo.producer} primaryText={"> Producer: " + movieInfo.producer}/>
                    <ListItem key={movieInfo.release_date} primaryText={"> Release Date: " + movieInfo.release_date}/>
                    <ListItem key={"crawl"+page} primaryText={"> Opening Crawl: " + movieInfo.opening_crawl}/>
                    <ListItem primaryText="> Characters from the movie:" />
                    {this.ShowCharactersList()}
                </List>
            </div>
        )
    }
}


export default ShowMovie;
