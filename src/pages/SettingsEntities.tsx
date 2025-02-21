

import { useState } from 'react';
import change from '../assets/change.svg';
import edit from '../assets/Editwhite.svg';
import deletewhite from '../assets/deletewhite.svg';
import React from 'react';
import thumbnail from '../assets/thumbnail.svg';
import add from '../assets/add.svg'
function SettingsEntities() {
    const [data] = useState([
        {
            id: 1,
            numberoflinks: 3,
            text: "Super Box Packaging",

        },
        {
            id: 2,
            numberoflinks: 3,
            text: "Super Box Packaging",

        },
    ]);
    return (
        <div className='container-fluid'>
            <h1 className="font-semibold text-2xl">Settings Entities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                <div className="flex items-end gap-3 justify-start mt-4">
                    <button className="bg-[#1A3561] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[165px] text-lg font-semibold rounded-lg"
                    ><img src={add} alt="filtericon" />  Add on Entity</button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                <div>
                    <label htmlFor="" className="text-[#5A5A5A] mb-4">Add New Key</label>
                    <input className="block w-full rounded-3xl  border border-gray-300 bg-white px-3 h-[47px] mt-2 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 form-control" type="text" placeholder="Enter New Key" />
                </div>
                <div className="flex items-end gap-3 justify-start mt-4">
                    <button className="bg-[#1A3561] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[165px] text-lg font-semibold rounded-lg"
                    ><img src={add} alt="filtericon" /> Submit</button>
                </div>
            </div>

            <div className="mt-6 bg-gray-100 ">
                <div className="bg-white rounded-2xl p-4 overflow-x-auto">
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full border-collapse text-left">
                            <thead>
                                <tr className="border-b border-gray-200 text-[#9C9C9C] font-normal text-sm">
                                    <th className="p-3">Entity Key</th>
                                    <th className="p-3 text-nowrap">Image</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">

                                            <td className="p-3 font-medium text-nowrap">{item.text}</td>
                                            <td className="p-3">
                                                <img src={thumbnail} alt="Thumbnail" className="w-12 h-12 rounded-md" />
                                            </td>
                                            <td className="p-3 gap-3 flex ">
                                                <button className="bg-[#8FAF3F] flex items-center justify-center gap-2 btn text-[#ffffff] h-[37px] w-[165px] text-sm font-light rounded-lg"
                                                ><img src={change} alt="filtericon" /> Change Image</button>
                                                <button className="bg-[#52B6EA] flex items-center justify-center btn  h-[37px] w-[39px] rounded-lg"
                                                ><img src={edit} alt="filtericon" /> </button>
                                                <button className="bg-[#CE6D6D] flex items-center justify-center btn  h-[37px] w-[39px] rounded-lg"
                                                ><img src={deletewhite} alt="filtericon" /> </button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsEntities;