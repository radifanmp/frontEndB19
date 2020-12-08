import '../App.css';
import dataNews from '../API/dataNew.json'

function ObjectData(){
    
    // const newses = [
    //     {id: 1, title: 'Hello Seiga', content: 'Seiga sedang belajar ReactJs'},
    //     {id: 2, title: 'Hello Satria', content: 'Satria lagi bingung'},
    //     {id: 3, title: 'Bara', content: 'Bara kepergok jalan sama lola'}
    // ]
    return(
        <div className="App-content">
            {dataNews.map((news) => (
                <div key={news.id}>
                    <p>{news.id}</p>
                    <p>{news.title}</p>
                    <p>{news.content}</p>
                </div>
            ))}
        </div>
    )
}


export default ObjectData