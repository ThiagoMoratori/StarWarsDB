/**
 * Created by AppMasters on 09/06/2017.
 */
import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

class SearchBarResult extends React.Component{
    componentWillMount() {
        this.state = {
            movie: this.props.movie,
            people: this.props.people,
            searchContent: this.props.searchContent,
            render: 0
        };
    }

    componentWillReceiveProps(nextProps){
        if(this.props !== nextProps){
            this.setState({searchContent: nextProps.searchContent})
        }
    }

    ForwardSearch(){
        return this.state.people.map((character)=> {

            if(character.name.indexOf(this.state.searchContent) !== -1){
                return(
                    <Link to={"/people/" + character.url.substring(27)} style={{ textDecoration: 'none' }}>
                        <ListItem
                            key={character.name.toString()}
                            primaryText={character.name}
                        />
                    </Link>)
            }
        })
    }

    render(){
        return <List>
            {this.ForwardSearch()}
            </List>
    }
}


export default SearchBarResult;