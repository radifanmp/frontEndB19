import React, {Component} from 'react';

// class Header extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.judul}</h1>
//             </div>
//         )
//     }
// }

function Header(props){
    return(
        <div>
            <h1>{props.judul}</h1>
        </div>
    )
}

export default Header;