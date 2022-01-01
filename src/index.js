import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const myArr = [
  { cardTitle: 'Galatasaray', cardContent: 'merhaba galatasaray', cardFooter: '3 dk önce güncellendi', imageUrl: 'https://picsum.photos/id/2/40/40' },
  { cardTitle: 'Fener', cardContent: 'merhaba Fener', cardFooter: '3 dk önce güncellendi', imageUrl: 'https://picsum.photos/id/1/40/50' },
  { cardTitle: 'Beşiktaş', cardContent: 'merhaba beşiktaş', cardFooter: '3 dk önce güncellendi', imageUrl: 'https://picsum.photos/id/3/40/50' }
];

function App() {
  return (
    <div>
      <div className="card-group">

        {
          myArr.map((i) => (<Card cardTitle={i.cardTitle} cardContent={i.cardContent} cardFooter={i.cardFooter} imageUrl={i.imageUrl} />))

        }
      </div>
    </div>
  );
}

function App2()
{
  return (
    <div className="card-group">
      
      <Collapse  href="collapseExample1" name={"Birinci kart"}>
       <Card cardTitle={myArr[0].cardTitle} cardContent={myArr[0].cardContent} cardFooter={myArr[0].cardFooter} imageUrl={myArr[0].imageUrl} ></Card>
      </Collapse>

      <Collapse href="collapseExample2" name={"ikinci kart"}>
       <Card cardTitle={myArr[1].cardTitle} cardContent={myArr[1].cardContent} cardFooter={myArr[1].cardFooter} imageUrl={myArr[1].imageUrl} ></Card>
      </Collapse>
      
      <Collapse href="collapseExample3" name="üçüncü kart">
       <Card cardTitle={myArr[2].cardTitle} cardContent={myArr[2].cardContent} cardFooter={myArr[2].cardFooter} imageUrl={myArr[2].imageUrl} ></Card>
      </Collapse>
    </div>
  );
}

//  ReactDOM.render(<App />, document.getElementById("root2"));

ReactDOM.render(<App2 />, document.getElementById("root1"));
