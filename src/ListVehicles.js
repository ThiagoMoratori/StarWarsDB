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

class ListVehicles extends React.Component{
    componentWillMount(){
        this.state = {
            vehicle: this.props.vehicle,
            mobile: this.props.mobile
        };
    }
    
    showGrid(){
        return <GridList
            cellHeight={250}
            cols={4}
            style={styles.gridList}
        >
            {
                this.state.vehicle.map((vehicle)=> {
                    return <GridTile key={vehicle.name.toString()}
                                     title={vehicle.name}
                                     actionIcon={<IconButton><StarBorder color="white" /></IconButton>} />
                })
            }
        </GridList>
    }
    
    showList(){
        return <List>{this.state.vehicle.map> this.state.vehicle.map((vehicle)=> {
            return <ListItem key={vehicle.name.toString()} primaryText={vehicle.name} />})}
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

export default ListVehicles;
