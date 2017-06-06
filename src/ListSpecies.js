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

class ListSpecies extends React.Component{
    componentWillMount(){
        this.state = {
            specie: this.props.specie,
            mobile: this.props.mobile
        };
    }

    componentWillReceiveProps(nextProps){
        //console.log("Next Props")
        //console.log(nextProps)
        if(nextProps!=null)
        {
            var newArray = this.state.specie.slice();
            nextProps.specie.forEach((specie) => newArray.push(specie));
            this.setState({specie: newArray})
            //console.log(this.state.specie)
        }
    }
    
    showGrid(){
        return <GridList
            cellHeight={250}
            cols={4}
            style={styles.gridList}
        >
            {
                this.state.specie.map((specie)=> {
                    return <GridTile key={specie.name.toString()}
                                     title={specie.name}
                                     subtitle={<span>by <b>{specie.name}</b></span>}
                                     actionIcon={<IconButton><StarBorder color="white" /></IconButton>} />
                })
            }
        </GridList>
    }
    
    showList(){
        return <List> {this.state.specie.map((specie)=> {
            return <ListItem key={specie.name.toString()} primaryText={specie.name} />})}
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

export default ListSpecies;
