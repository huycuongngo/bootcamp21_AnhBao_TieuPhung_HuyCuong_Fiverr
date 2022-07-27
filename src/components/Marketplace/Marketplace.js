import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BaseService } from "../../services/baseService";

import "./marketplace.scss";

const imgSources = [
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",
]
// console.log("imgSource", imgSources);

let typeWorkService = new BaseService();

export default function Marketplace() {
  const [typeWork, setTypeWork] = useState([]);
  const navigate = useNavigate();
  // const handleListTypeWorkPage = (id) => {
  //   navigate(`/list_type/${id}`)
  // }

  useEffect(() => {
    typeWorkService
      .get("api/type-jobs")
      .then((res) => {
        console.log("typeWork", res.data);

        setTypeWork(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("typeWork", typeWork);

  return (
    <div className="marketplace">
      <h2>Explore the marketplace</h2>
      {/* ${typeWorkID[0]} */}
      {/* to={`/list_type/`} */}

      <ul>
        {
          typeWork.map((item, index) => {
            // console.log(index);
            return (
              <li key={item._id}>
                <a href={`/list_type/${item._id}`}>
                  <img
                    src={imgSources[index]}
                    alt="Digital Marketing"
                    loading="lazy"
                  />
                  {item.name}
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
