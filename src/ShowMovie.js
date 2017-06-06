/**
 * Created by AppMasters on 05/06/2017.
 */
import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

var url;
var page;
var movieInfo;

class ShowMovie extends React.Component{

    componentWillMount(){
        this.state = {
            movie: this.props.movie,
            mobile: this.props.mobile
        };
        //get current url to get which movie we want
        url = window.location.href;
        page = url.slice(-2,-1);
    }

    ShowMovieList(){
        //get the right movie and set to an Object
        this.state.movie.map((movie)=> {
            if(movie.episode_id == page) {
                movieInfo = movie;
            }
        })
        console.log(movieInfo);
        //return details from the movie
        return <List>
                    <ListItem key={movieInfo.title} primaryText={"Title: " + movieInfo.title}/>
                    <ListItem key={movieInfo.episode_id} primaryText={"Episode: " + movieInfo.episode_id}/>
                    <ListItem key={movieInfo.director} primaryText={"Director: " + movieInfo.director}/>
                    <ListItem key={movieInfo.producer} primaryText={"Producer: " + movieInfo.producer}/>
                    <ListItem key={movieInfo.release_date} primaryText={"Release Date: " + movieInfo.release_date}/>
                    <ListItem key={"crawl"+page} primaryText={"Opening Crawl: " + movieInfo.opening_crawl}/>
               </List>
    }

    render(){

        return(
            <div>
                {this.ShowMovieList()}
            </div>
        )
    }
}


export default ShowMovie;
