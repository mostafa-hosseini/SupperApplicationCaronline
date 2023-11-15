import React from 'react'
import { useState } from 'react'
import http from '../../api/index';

export default function AddNewStory() {
    const api = http();
    const [input, setinput] = useState({
        file: null,
        fileType: "",
        Title: ""
    })
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <label htmlFor="">
                        عنوان استوری
                    </label>
                    <input type="text" className="form-control" value={input.Title} onChange={(e) => setinput({ ...input, Title: e.target.value })} />
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <label htmlFor="">
                        فایل استوری
                    </label>
                    <input type="file" className="form-control" onChange={(e) => setinput({ ...input, file: e.target.files[0] })} />
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <label htmlFor="">
                        نوع استوری
                    </label>
                    <select className='form-control' onChange={(e) => setinput({ ...input, fileType: e.target.value })} value={input.fileType} id="">
                        <option selected hidden value="">نوع استوری را مشخص کنید</option>
                        <option value="video">ویدئو</option>
                        <option value="image">عکس</option>
                    </select>
                </div>

                <div className="w-100 mt-5"></div>
                <div className="col-6 col-md-4 mt-2 mx-auto">
                    <button className="btn btn-custom-success w-100" onClick={() => {
                        const form = new FormData();
                        Object.keys(input).map((item) => {
                            form.append(item, input[item])
                        });
                        api.AddNewStory(({ data }) => {

                        }, form);
                    }}>
                        ثبت استوری
                    </button>
                </div>
            </div>
        </div>
    )
}
