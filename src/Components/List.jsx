import { render } from '@testing-library/react';
import React, {Component} from 'react';

// class List extends Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.Data}</p>
//             </div>
//         )
//     }
// }

function List(props){
    return(
        <div>
            <p>{props.Data}</p>
        </div>
    )
}

export default List