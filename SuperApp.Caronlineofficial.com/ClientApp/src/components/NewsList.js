import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/index";
import SmallLoading from "./SmallLoading";
import BlogListItem from "./BlogListItem";

export default function NewsList({ id = 1, onChange }) {
  const navigate = useNavigate();
  const api = http();

  const [news, setNews] = useState(["1", "2"]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  //   useEffect(() => {
  //     api.GetNews(
  //       ({ data }) => {
  //         setNews(data);
  //         setLoading(false);
  //       },
  //       { categoryId: id }
  //     );
  //   }, []);

  useEffect(() => {
    if (onChange) {
      onChange();
    }
  }, [search]);

  return (
    <>
      {loading ? (
        <SmallLoading />
      ) : (
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              name="search-currency"
              className="form-control back-ground mb-4 bg-white"
              placeholder="جستجو در اخبار"
              id="news-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* {news
          .filter((item) => item.title.includes(search))
          .map((item) => (
            <>
              <div className="col-12 col-md-6 mb-3 col-lg-4 mb-2 ">
                <div
                  className="row w-100 news-item"
                  onClick={() =>
                    navigate("/DetailNews/" + item.id, {
                      state: { news: item },
                    })
                  }
                >
                  <div className="col-4 p-0">
                    <img
                      className="w-100"
                      style={{ borderRadius: 15, height: 100 }}
                      src={item.imageSrc}
                      alt={item.title}
                    />
                  </div>
                  <div className="col-8">
                    <h5 className="text-right">{item.title}</h5>
                    <h6 className="text-right mt-4">{item.type}</h6>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-6 mb-3"
                onClick={() =>
                  navigate("/DetailNews/" + item.id, {
                    state: { news: item },
                  })
                }
              >
                <BlogListItem
                  imgSrc={item.imageSrc}
                  title={item.title}
                  disc={item.title}
                  date={item.type}
                />
              </div>
            </>
          ))} */}
        </div>
      )}
    </>
  );
}
