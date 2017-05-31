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

class ListMovies extends React.Component{
    render(){
        return(
            <div>
                <List style={{marginTop:75, marginLeft: 160}}>
                    <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                    <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                    <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                    <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                    <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                </List>
                <Divider />
                <List style={{marginTop:75, marginLeft: 160}}>
                    <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
                    <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                    <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                    <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                </List>
            </div>
        )
    }
}

export default ListMovies;
