/**
 * Created by AppMasters on 05/06/2017.
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import './App.css';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class SearchBar extends React.Component{
    render(){
        return(
            <Toolbar className="ToolbarStyle">
                <ToolbarGroup lastChild={true}>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <TextField hintText="Search Star Wars Wiki"/>
                </ToolbarGroup>
            </Toolbar>
        )
    }

}

export default SearchBar;
