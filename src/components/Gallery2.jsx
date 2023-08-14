import "lightgallery/css/lightgallery.css";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import LightGallery from "lightgallery/react/Lightgallery.umd";
import lgThumbnail from "lightgallery/plugins/thumbnail/lg-thumbnail.umd";
import lgVideo from "lightgallery/plugins/video/lg-video.umd";
import { underwater } from "../pages/underwater/underwater";

export const Gallery2 = ({ content }) => {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgVideo]}
      download={0}
      elementClassNames={`portfolio portfolio-alt ${
        content === underwater && "bg-blue"
      }`}
    >
      {content.map((item) => {
        return (
          <div
            className="portfolio__card"
            data-lg-size="1280-720"
            data-src={item.link}
            data-sub-html={`<h4>${item.title}</h4>`}
            data-poster={item.img}
            key={item.id}
          >
            <div className="portfolio__card-img">
              <img src={item.img} alt={item.title.toLowerCase()} />
            </div>
            <div className="portfolio__card-text">
              <h4>{item.title}</h4>
              {item.prod && <p>Prod: {item.prod}</p>}
              {item.dir && <p>Dir: {item.dir}</p>}
              {item.dp && <p>Dp: {item.dp}</p>}
            </div>
          </div>
        );
      })}
    </LightGallery>
  );
};
