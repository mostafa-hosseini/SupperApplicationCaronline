import React, { useEffect } from 'react'
import Stories from 'react-insta-stories';
import { useNavigate } from 'react-router-dom';
import http from '../api';
import { useState } from 'react';
import Loading from '../components/Loading';
import { AiOutlineLeft } from 'react-icons/ai';

export default function Story() {
    const navigate = useNavigate();
    const api = http();
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [index, setindex] = useState(0)
    let currentStoryId = localStorage.getItem("story");
    useEffect(() => {
        api.UserGetActiveStories(({ data }) => {
            setData(data);
            setloading(false)
            var findedIndex = data.findIndex(c => c.id == currentStoryId);
            if (findedIndex != -1) {
                setindex(findedIndex)
            }
        }, {}, () => { setloading(false) })

        return () => {

        }
    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="row" style={{ direction: "ltr" }}>
                <div className={`col-12 ${data.length > 0 ? "storis-mobile" : ""}`}>
                    {data.length > 0 ? <Stories
                        stories={data}
                        defaultInterval={1500}
                        currentIndex={data.findIndex(c => c.id == currentStoryId)}
                        width={"100%"}
                        onAllStoriesEnd={() => {
                            navigate("/")
                            localStorage.setItem("story", data[data.length - 1].id)
                        }}
                        onNext={() => {
                            let newIndex = index + 1;
                            if (data[newIndex] != null) {
                                localStorage.setItem("story", data[newIndex].id)
                            }
                            setindex(newIndex);
                            console.log(index)
                        }}
                        height={"100vh"}
                    /> : null}


                </div>

                <div style={{ position: "fixed", bottom: 20, zIndex: 9999999999 }} className='d-md-none'>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="btn  bg-suc img-icon me-2 back-button"
                    >
                        بازگشت به صفحه اصلی
                    </button>
                </div>
                {data.length < 1 ? <><div className="col-12">
                    <h4 className="text-center">
                        !فعلا خبری نیست

                    </h4>
                </div>
                    <div className="col-10 col-md-6 mx-auto">
                        <img src={require("../assets/images/noNews.png")} className='w-100' alt="" />
                    </div></> : null}
            </div>
        </div>
    )
}
