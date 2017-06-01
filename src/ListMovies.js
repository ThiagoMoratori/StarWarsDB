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
                                     title={movies.title}
                                     subtitle={<span>by <b>{movies.title}</b></span>}
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
            <div align="center">
                {this.state.mobile ? this.showList() : this.showGrid()}
            </div>
        )
    }
}

export default ListMovies;
