const universeNews = [
  {
    id: 1,
    path:"europa",
    title: "New Discoveries on Europa's Satellite",
    text: "Scientists have recently discovered evidence of liquid water beneath the icy surface of Europa, one of Jupiter's moons. This finding has sparked excitement among researchers who believe that Europa's subsurface ocean could harbor conditions suitable for life."
  },
  {
    id: 2,
    path: "voyager",
    title: "Voyager Spacecraft Enters Interstellar Space",
    text: "After decades of exploration, NASA's Voyager 1 spacecraft has officially crossed into interstellar space, becoming the first human-made object to do so. Voyager 1 continues to send back valuable data about the conditions at the edge of our solar system."
  },
  {
    id: 3,
    path: "blackhole",
    title: "Groundbreaking Discovery of a Supermassive Black Hole",
    text: "Astronomers have made a groundbreaking discovery of a supermassive black hole at the center of a distant galaxy. This black hole is one of the largest ever observed, with a mass billions of times that of our Sun."
  },
  {
    id: 4,
    path: "exoplanet",
    title: "New Exoplanet Found in the Habitable Zone",
    text: "Scientists have identified a new exoplanet located within the habitable zone of its star. This discovery raises hopes for the possibility of finding extraterrestrial life beyond our solar system. "
  }
];

  
function News() {
  return (
    <div className="news-container container"> 
      {universeNews.map(news => (
        <div className="news-item" key={news.id}> 
          <img className="newsImg" src={"static/" + news.path + ".jpg"} alt={news.path}  />
          <h1 className="news-title">{news.title}</h1> 
          <div className="news-text">{news.text}</div>
        </div>
      ))}
    </div>
  );
}

  export default News;