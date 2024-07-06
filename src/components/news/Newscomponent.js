
import React, { useEffect, useState } from "react";
function NewsComponent() 
{
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-05&sortBy=publishedAt&apiKey=f3237fce0fbf4c56847b5adfb48800fa`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(error => console.err(" Problem with fetching data!!", error))
  }, []);
  return (
    <div className="container">
      <div className="row">
      {
        
      }
        {news.map((video, key) => (
          <div key={key} className="col-2">
            <a href={`https://youtube.com/watch?v=${video.img_id}`}>
              <div className="card">
                <img
                  src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`}
                  alt={video.title}/>
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.channelName}</p>
                  <small>
                    {video.viewsCount} views - {video.likesCount} likes -{" "}
                    {video.duration}m
                  </small>
                </div> 
              </div>
            </a>
          </div>
        ))}
      </div>
   </div>
  );
}
export default NewsComponent;
