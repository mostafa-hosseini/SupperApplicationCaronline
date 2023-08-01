import React, { useState, useEffect } from "react";
import hyperauto from '../assets/images/Icons/shop/hyperauto-01.svg'
import hypersakhteman from '../assets/images/Icons/shop/hypersakhteman-01.svg'
import Loading from "../components/Loading";
import RowItem from "../components/RowItem";
export default function ShopQuikAccess() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <Loading isLoading={loading}>
            <div className="row">
                <div className="col-3">
                    <RowItem
                        imgSrc={hyperauto}
                        imgalt="هایپر خودرو"
                        title="هایپر خودرو"
                        to={"https://mashinto.com/shop"}
                    />
                </div>
                <div className="col-3">
                    <RowItem
                        imgSrc={hypersakhteman}
                        imgalt="هایپر ساختمان"
                        title="هایپر ساختمان"
                        to={"https://amlakto.com/shop"}
                    />
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
            </div>
        </Loading>
    );
}

