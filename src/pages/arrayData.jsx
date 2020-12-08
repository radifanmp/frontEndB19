import '../App.css';

import {Link} from 'react-router-dom';

function ArrayData(){
    
    const students = ["Vian", "Ilyas", "Seiga", "Satrian"];
    return(
        <div className="App-content">
            {students.map((student, index) => (<p key={index}>{student}</p>))}


            <Link to="/objectData"><button>Object Data</button></Link>
        </div>
    )
}


export default ArrayData