/**
 * Created by AppMasters on 30/05/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

class ListPlanets extends React.Component{
    componentWillMount(){
        this.state = {
            planet: this.props.planet,
            mobile: this.props.mobile
        };
    }

    componentWillReceiveProps(nextProps){
        //console.log("Next Props")
        //console.log(nextProps)
        if(nextProps!=null)
        {
            var newArray = this.state.planet.slice();
            nextProps.planet.forEach((planet) => newArray.push(planet));
            this.setState({planet: newArray})
            //console.log(this.state.planet)
        }
    }
    
    showGrid(){
        return <GridList
            cellHeight={250}
            cols={4}
            style={styles.gridList}
        >
            {
                this.state.planet.map((planet)=> {
                    return <GridTile key={planet.name.toString()}
                                     title={planet.name}
                                     subtitle={<span>by <b>{planet.name}</b></span>}
                                     actionIcon={<IconButton><StarBorder color="white" /></IconButton>} />
                })
            }
        </GridList>
    }

    showList(){
        return <List>{ this.state.planet.map((planet)=> {
            return <ListItem key={planet.name.toString()} primaryText={planet.name} />})}
            </List>
    }

    render(){
        return(
            <div>
                {this.state.mobile ? this.showList() : this.showGrid()}
            </div>
        )
    }
}

export default ListPlanets;
