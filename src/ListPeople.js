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

class ListPeople extends React.Component{

    componentWillMount(){
        this.state = {people: this.props.people};
        console.log("Estou aqui");
        console.log(this.props.people);
        console.log("Passei do props");
    }

    showList(){
        const list = this.state.people.map((person)=> {
            return <ListItem key={person.name.toString()} primaryText={person.name} />})
        return list;
    }

    render(){
        return(
            <div>
                <List>
                    {this.showList()}
                </List>
            </div>
        )
    }

    // render(){
    //     return(
    //         <div>
    //             <List>
    //                 <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
    //                 <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
    //                 <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
    //                 <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
    //                 <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
    //             </List>
    //             <Divider />
    //             <List>
    //                 <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
    //                 <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
    //                 <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
    //                 <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
    //             </List>
    //         </div>
    //     )
    // }
}

export default ListPeople;
