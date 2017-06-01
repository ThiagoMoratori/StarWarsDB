/**
 * Created by AppMasters on 30/05/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        marginLeft: 250,
        width: 1500,
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
                                     subtitle={<span>by <b>{vehicle.name}</b></span>}
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
            <div align="center">
                {this.state.mobile ? this.showList() : this.showGrid()}
            </div>
        )
    }
}

export default ListVehicles;
