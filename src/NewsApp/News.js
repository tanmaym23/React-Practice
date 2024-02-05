import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Newsitem from "./Newsitem";
import "./News.css"
function News() {
const [articles, setarticles] = useState([]);

const fetchdata = async () => {
  const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-12-22&sortBy=publishedAt&apiKey=87b4b5f8ff9341d091cd68d8d382d8ec");
  const jsondata = await response.json();
  console.log(jsondata);
  setarticles(jsondata.articles);
};

useEffect(() => {
  fetchdata();
},[]);
return (
  <div className="main">
       <div className='container'>
            {articles?.map((item,index)=>(
                <Newsitem key={index} title={item.title} description={item.description}
                img ={item.urlToImage} url = {item.url}/>
            ))}
        </div>
  </div>
);
}

export default News;
