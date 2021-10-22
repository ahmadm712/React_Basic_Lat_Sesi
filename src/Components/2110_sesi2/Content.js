import React from "react";
import Card from "./Card/Card";


function Content() {
  let data = [
    {
      title: "Card 1",
      date: "21 Oktober 2021",
      text: "Ini Contoh yaa",
      value:20
    },
    {
      title: "Card 2",
      date: "22 Oktober 2021",
      text: "Ini Contoh yaa",
      value:10
    },
    {
        title: "Card 3",
        date: "22 Oktober 2021",
        text: "Ini Contoh yaa",
        value:52
      },
  ];
  return (
    <div>
      {data.map((item) => {
        return <Card title={item.title} date={item.title} text={item.text} value={item.value}/>
      })}
    </div>
  );
}

export default Content;
