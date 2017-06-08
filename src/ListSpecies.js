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
                                     actionIcon={<IconButton onTouchTap={()=>this.setFav(specie)}>{this.getFav(specie)}</IconButton>} />
                })
            }
        </GridList>
    }
    
    showList(){
        return <List> {this.state.specie.map((specie)=> {
            return <ListItem key={specie.name.toString()} primaryText={specie.name} rightIconButton={<IconButton onTouchTap={()=>this.setFav(specie)}>{this.getFav(specie)}</IconButton>}/>})}
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
