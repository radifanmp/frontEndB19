import React, {Component} from 'react';
import "../App.css";

class Content extends Component{

    getBatch(){
        return 15+4;
    }

    clickMe() {
        window.alert("Hallo Batch 19 With Class")
    }

    render(){
        const companyName = "Dumbways.id";
        return(
            <div className="App-content">
                <p>This Is Content and Wellcome {this.getBatch()} Bootcamp {companyName}</p>

                <img style={{width: "300px", height:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUwqudbSHAUQZR1nMHjlyW9bFQDXLyq5zwg&usqp=CAU"/>
                
                <img style={{width: "300px", height:"300px"}} src="https://variety.com/wp-content/uploads/2020/03/zayn-e1583362497497.jpg"/>

                <button onClick={this.clickMe}>Hit Me</button>
            </div>
        )
    }
}


// function Content(){

//     function getBatch(){
//         return 16+3;
//     }

//     function clickMe(){
//         window.alert("Hello Batch 19 With Function");
//     }

//     const companyName = "DumbWays.id";

//     return(
//         <div className="App-content">
//             <p>This Is Content and Wellcome {getBatch()} Bootcamp {companyName}</p>

                // <img style={{width: "300px", height:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUwqudbSHAUQZR1nMHjlyW9bFQDXLyq5zwg&usqp=CAU"/>
                
                // <img style={{width: "300px", height:"300px"}} src="https://variety.com/wp-content/uploads/2020/03/zayn-e1583362497497.jpg"/>

//             <button onClick={clickMe}>Hit Me</button>
//         </div>
//     )
// }

export default Content;