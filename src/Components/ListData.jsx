import List from './List';
import React, {Component} from 'react';
import "../App.css";

class ListData extends Component{

    render(){
        return(
            <div className="App-content">
                <List Data="SEIGA" />
                <List Data="ILYAS" />
                <List Data="AMANUDIN" />
                <List Data="ARDIAN" />
                <List Data="RYDWAN" />
            </div>
        )
    }
}

export default ListData