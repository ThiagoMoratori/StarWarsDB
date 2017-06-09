/**
 * Created by AppMasters on 05/06/2017.
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {Link} from 'react-router-dom';
import './App.css';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class SearchBar extends React.Component{

    componentWillMount(){
        this.state = {
            inputValue: this.props.inputValue
        };
    }

    updateInputValue(e) {
        //console.log("Estou atualizando")
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        return(
            <Toolbar className="ToolbarStyle">
                <ToolbarGroup lastChild={true}>
                    <IconButton>
                        <Link to="/search"><SearchIcon/></Link>
                    </IconButton>
                    <TextField id="searchContent" hintText="Search Star Wars Wiki" value={this.state.value} onChange={(e)=>{this.props.onSearch(e); this.updateInputValue(e)}}/>
                </ToolbarGroup>
            </Toolbar>
        )
    }

}

export default SearchBar;
