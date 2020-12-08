import '../App.css'

function gaya(){
    return(
        <div className="App-content">
            <p style={style.bigPink}>Internal Css Nich</p>
            <p style={{color: "#cabfff", fontSize: "50px"}}>Inline Css Nich</p>
        </div>
    )
}

const style = {
    bigPink : {
        fontSize: "100px",
        color: "#ffc0cb",
        fontWeight: "bold"
    }
}

export default gaya