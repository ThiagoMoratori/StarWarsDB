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
        height: 800,
        overflowY: 'auto',
    },
};

class ListMovies extends React.Component{

    componentWillMount(){
        this.state = {
            movie: this.props.movie,
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
                this.state.movie.map((movies)=> {
                    return <GridTile key={movies.title.toString()}
                                     title={<Link to={"/movies/" + movies.episode_id +"/"} style={{textDecoration: 'none'}}>{movies.title}</Link>}
                                     subtitle={<span>by <b>{movies.director}</b></span>}
                                     actionIcon={<IconButton><StarBorder color="white" /></IconButton>} />
                })
            }
        </GridList>
    }

    showList(){
        return <List>{this.state.movie.map((movie)=> {
            return <ListItem key={movie.title.toString()} primaryText={movie.title} />
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

export default ListMovies;
