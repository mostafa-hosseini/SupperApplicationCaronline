import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import priceNumber from "../utils/priceNumber";
import SmallLoading from "./SmallLoading";
import CryptoItem from "./CryptoItem";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function CryptoList() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  //   const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          "https://api.tgju.org/v1/market/dataservice/crypto-assets?category=&type=overview&draw=1&columns%5B0%5D%5Bdata%5D=title&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=symbol&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=p&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=p_irr&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=d&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=dp&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=cap&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=volume&columns%5B7%5D%5Bname%5D=&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B8%5D%5Bdata%5D=datetime&columns%5B8%5D%5Bname%5D=&columns%5B8%5D%5Bsearchable%5D=true&columns%5B8%5D%5Borderable%5D=true&columns%5B8%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B8%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B9%5D%5Bdata%5D=9&columns%5B9%5D%5Bname%5D=&columns%5B9%5D%5Bsearchable%5D=true&columns%5B9%5D%5Borderable%5D=true&columns%5B9%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B9%5D%5Bsearch%5D%5Bregex%5D=false&start=0&length=100&search%5Bvalue%5D=&search%5Bregex%5D=false&_=1699089719708"
        );

        const data = await res.json();
        setCoins([...data.data]);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        toast.error("مشکلی رخ داده.\n لطفا دوباره تلاش کنید.");
        console.log(e);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <SmallLoading />;
  }

  return (
    <div className="pt-4">
      {!coins.length ? (
        <p className="text-center font-size-3x my-4">ارزی پیدا نشد!</p>
      ) : (
        <div className="row justify-content-center">
          <div className="col-12">
            <input
              type="text"
              name="search-currency"
              className="form-control back-ground mb-4 bg-white"
              placeholder="جستجو در ارز ها"
              id="currency-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {coins
            .filter(
              (coin) =>
                coin.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
                coin.combine_symbol
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            )
            .map((item, index) => (
              <div
                className="col-12 col-lg-6 mb-2 row justify-content-center"
                key={index}
              >
                <Link to={`/Crypto/${item?.symbol}`} className="p-0">
                  <CryptoItem
                    imgSrc={"https://static.tgju.org/images/crypto/icons/" + item.combine_symbol+".png"}
                    name={item.title}
                    topPrice={
                      item.dp 
                    }
                    topPriceStyle={item.dt == "high"}
                    CurrentPriceStyle={item.dt == "high"}
                    CurrentPrice={"$" + priceNumber(item.p)}
                  // desc={item.symbol}
                  />
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default CryptoList;
