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
    }

    componentWillReceiveProps(nextProps){
        //console.log("Next Props")
        //console.log(nextProps)
        if(nextProps!=null)
        {
            var newArray = this.state.people.slice();
            nextProps.people.forEach((person) => newArray.push(person));
            this.setState({people: newArray})
            //console.log(this.state.people)
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
                             title={person.name}
                             subtitle={<span>by <b>{person.name}</b></span>}
                             actionIcon={<IconButton><StarBorder color="white" /></IconButton>} />
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
            <div align="center">
                {this.state.mobile ? this.showList() : this.showGrid()}
            </div>
        )
    }

}

export default ListPeople;
