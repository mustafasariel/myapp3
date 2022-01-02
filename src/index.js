import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const myArr = [
  {
    cardTitle: "1",
    cardContent: "merhaba",
    cardFooter: "3 dk önce güncellendi",
    imageUrl:   "./logo192.png",
  },
  {
    cardTitle: "fdf",
    cardContent: "merhaba",
    cardFooter: "3 dk önce güncellendi",
    imageUrl: "./logo192.png",
  },
  {
    cardTitle: "3",
    cardContent: "merhaba",
    cardFooter: "3 dk önce güncellendi",
    imageUrl: "./logo192.png",
  },
];

// function App() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col"></div>
//         <div className="card-group W-100">
//           {myArr.map((i) => (
//             <Card
//               cardTitle={i.cardTitle}
//               cardContent={i.cardContent}
//               cardFooter={i.cardFooter}
//               imageUrl={i.imageUrl}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

function App2() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group W-100">
  

        <div className="col">
            <Collapse href="collapseExample1" name={"1"}>
              <Card
                cardTitle={myArr[0].cardTitle}
                cardContent={myArr[0].cardContent}
                cardFooter={myArr[0].cardFooter}
                imageUrl={myArr[0].imageUrl}
              ></Card>
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2" name={"2"}>
              <Card
                cardTitle={myArr[1].cardTitle}
                cardContent={myArr[1].cardContent}
                cardFooter={myArr[1].cardFooter}
                imageUrl={myArr[1].imageUrl}
              ></Card>
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3" name={"3"}>
              <Card
                cardTitle={myArr[2].cardTitle}
                cardContent={myArr[2].cardContent}
                cardFooter={myArr[2].cardFooter}
                imageUrl={myArr[2].imageUrl}
              ></Card>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

//  ReactDOM.render(<App />, document.getElementById("root2"));

ReactDOM.render(<App2 />, document.getElementById("root1"));
