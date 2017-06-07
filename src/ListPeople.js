/**
 * Created by AppMasters on 30/05/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Link} from 'react-router-dom';

var url;
var page;

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        marginLeft: 50,
        width: 1000,
        height: 800,
        overflowY: 'auto',
    },
};

class ListPeople extends React.Component{

    componentWillMount(){
        this.state = {
            people: this.props.people,
            mobile: this.props.mobile
        };
        console.log(this.props.people)
        //get current url to get which movie we want
        url = window.location.href;
        page = url.substring(27);
    }

    showGrid(){
        return <GridList
                cellHeight={250}
                cols={4}
                style={styles.gridList}
            >
                {
                    this.state.people.map((person)=> {
                        return <Link to={"/people/" + person.url.substring(27)}>
                                <GridTile key={person.name.toString()}
                                 title={person.name}
                                 subtitle={<span>by <b>{person.name}</b></span>}
                                 actionIcon={<IconButton><StarBorder color="white" /></IconButton>} />
                        </Link>
                    })
                }
            </GridList>
    }

    showList(){
        return <List> {this.state.people.map((person) => {
            return <ListItem key={person.name.toString()} primaryText={person.name}/>
            })} </List>
    }

    render(){
        return(
            <div>
                {this.state.mobile ? this.showList() : this.showGrid()}
            </div>
        )
    }

}

export default ListPeople;
