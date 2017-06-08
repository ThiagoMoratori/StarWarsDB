/**
 * Created by AppMasters on 30/05/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Link} from 'react-router-dom';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        marginLeft: 50,
        width: 1000,
        height: 800
    },
};

class ListPeople extends React.Component{

    componentWillMount(){
        this.state = {
            people: this.props.people,
            mobile: this.props.mobile,
            render: 0
        };
        //console.log(this.props.people)
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
                    this.state.people.map((person)=> {
                        return <GridTile key={person.name.toString()}
                                 title={<Link to={"/people/" + person.url.substring(27)} style={{textDecoration: 'none'}}>{person.name}</Link>}
                                 actionIcon={<IconButton onTouchTap={()=>this.setFav(person)}>{this.getFav(person)}</IconButton>} />

                    })
                }
            </GridList>
    }

    showList(){
        return <List> {this.state.people.map((person) => {
            return <ListItem key={person.name.toString()} primaryText={person.name} rightIconButton={<IconButton onTouchTap={()=>this.setFav(person)}>{this.getFav(person)}</IconButton>}/>
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
