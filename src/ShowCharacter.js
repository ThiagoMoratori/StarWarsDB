/**
 * Created by AppMasters on 06/06/2017.
 */
/**
 * Created by AppMasters on 05/06/2017.
 */
import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

var characterInfo;
var page;

class ShowCharacter extends React.Component{

    componentWillMount(){
        this.state = {
            movie: this.props.movie,
            mobile: this.props.mobile,
            people: this.props.people,
            char: this.props.char,
            render: 0
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

    setFav(key){
        if(localStorage.getItem(key.name) !== null){
            localStorage.removeItem(key.name)
            this.setState({render: 1})
        }else{
            localStorage.setItem(key.name, JSON.stringify(key))
            this.setState({render: 0})
        }
    }

    getFav(key){
        //console.log()
        if(localStorage.getItem(key.name) !== null){
            return <StarBorder color="yellow"/>
        }else{
            return <StarBorder color="grey"/>
        }
    }

    ShowMoviesList(){

        //return details from the movie
        return this.state.movie.map((movie)=> {
            //console.log(movie.episode_id)
            if(characterInfo.films.indexOf(movie.url) > -1){return( <Link to={"/movies/" + movie.episode_id + "/"}><ListItem
                key={movie.title.toString()}
                primaryText={movie.title}
            /></Link>)}})


    }

    render(){

        return(
            <List>
                <ListItem key={characterInfo.name} primaryText={"> Name: " + characterInfo.name} rightIconButton={<IconButton onTouchTap={()=>this.setFav(characterInfo)}>{this.getFav(characterInfo)}</IconButton>}/>
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
