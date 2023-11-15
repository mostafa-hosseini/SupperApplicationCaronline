import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import anim1 from '../assets/Animations/desighn.json';
import kharid from "../assets/images/Icons/house/kharid-sefareshi-01.svg";
import Loading from "../components/Loading";
import RowItem from "../components/RowItem";

export default function DesighnQuickAccess() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    return (
        <Loading isLoading={loading}>
            <div className="row">
                <div className="col-3 p-1">
                    <RowItem
                        imgSrc={kharid}
                        imgalt="ساختمان های روز دنیا"
                        title="ساختمان های روز دنیا"

                    />
                </div><div className="col-3 p-1">
                    <RowItem
                        imgSrc={kharid}
                        imgalt="معماری مدرن"
                        title="معماری مدرن"

                    />
                </div><div className="col-3 p-1">
                    <RowItem
                        imgSrc={kharid}
                        imgalt="مصالح نوین"
                        title="مصالح نوین"

                    />
                </div><div className="col-3 p-1">
                    <RowItem
                        imgSrc={kharid}
                        imgalt="معماری نئوکلاسیک"
                        title="معماری نئوکلاسیک"

                    />
                </div><div className="col-3 p-1">
                    <RowItem
                        imgSrc={kharid}
                        imgalt="معماری سنتی ایران"
                        title="معماری سنتی ایران"

                    />
                </div><div className="col-3 p-1">
                    <RowItem
                        imgSrc={kharid}
                        imgalt="ساختمان های زیبا ایران"
                        title="ساختمان های زیبا ایران"

                    />
                </div><div className="col-3 p-1">
                    <RowItem
                        imgSrc={kharid}
                        imgalt="معماران برتر"
                        title="معماران برتر"

                    />
                </div><div className="col-3 p-1">
                    <RowItem
                        imgSrc={kharid}
                        imgalt="طراحی داخلی"
                        title="طراحی داخلی"

                    />
                </div>
                <div className="w-100"></div>
                <div className="col-12 mt-5 pt-5">
                    <Lottie options={{ animationData: anim1, autoplay: true, loop: true }} />
                </div>
            </div>
        </Loading>
    );
}
