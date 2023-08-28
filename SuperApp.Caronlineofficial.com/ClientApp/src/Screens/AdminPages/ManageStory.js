import React, { useEffect } from 'react'
import UseCheckAdmin from '../../hooks/UseCheckAdmin';
import { useState } from 'react';
import http from '../../api/index';
import Loading from '../../components/Loading';

export default function ManageStory() {
    const api = http();
    const isAdmin = UseCheckAdmin();
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {

        api.GetActiveStories(({ data }) => {
            setData(data)
            setloading(false)
        }, {}, () => { setloading(false) })
        return () => {

        }
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <div className='row'>
            {data.map(item => <div className="col-12 col-md-6 ">
                <img src={item.url} alt="" className="w-100" />
                <h6 className="text-center">
                    {item.header.heading}
                </h6>
                <button className="btn btn-danger" onClick={() => {
                    api.Delete(({ data }) => {
                        if (data.isSuccess) {
                            api.GetActiveStories(({ data }) => {
                                setData(data)
                                setloading(false)
                            }, {}, () => { setloading(false) })
                        }
                    }, item.id)
                }}>
                    حذف استوری
                </button>
            </div>)}
        </div>
    )
}
