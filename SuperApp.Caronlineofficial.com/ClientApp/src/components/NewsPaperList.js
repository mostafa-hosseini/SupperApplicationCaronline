import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/testApi";
import SmallLoading from "./SmallLoading";
import BlogListItem from "./BlogListItem";

export default function NewsList({ id = 1, onChange }) {
  const navigate = useNavigate();
  const api = http();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.GetNewsPaper(({ data }) => {
      setLoading(false);
      setNews(data);
    }, id);
  }, []);

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
        <div className="row pt-4">
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
          {news
            .filter((item) => item.title.includes(search))
            .map((item) => (
              <div className="col-12 col-lg-6 mb-3 col-lg-4 mb-2 ">
                <BlogListItem
                  imgSrc={item.src}
                  title={item.title}
                  disc={item.title}
                  noBottom
                  fitImg
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
}
