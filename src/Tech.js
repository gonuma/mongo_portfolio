import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Tech() {

  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles");
    setArticles(response.data);
    console.log(response);
  }

  useEffect(() => {
    loadArticles();
  }, []);
  
  
  return (
    <>
    <div
    className="pic-frame"
    style={{
      width: "50vh",
      overflow: "hidden",
      display: "flex",
    }}
  >
    <img
      style={{
        maxWidth: "inherit",
        maxHeight: "inherit",
        height: "inherit",
        width: "inherit",
        objectFit: "cover",
      }}
      src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/Raspberry_Pi_4_Model_B_-_Side.jpg"
    />
  </div>
    <table>
      <thead>
        <tr>
          <th style={{textAlign: "center"}}>ID</th>
          <th style={{textAlign: "center"}}>Title</th>
          {/* <th style={{textAlign: "center"}}>Summary</th> */}
        </tr>
      </thead>
      <tbody>
        {articles.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scop="row">{index+1}</th>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </>
  );
}
