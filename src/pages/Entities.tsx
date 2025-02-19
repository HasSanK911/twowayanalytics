import filtericon from '../assets/filter.svg'
import { useState } from 'react';
import link from '../assets/Links.svg';
import view from '../assets/view.svg'
import add from '../assets/add.svg'
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Entities() {
    const navigate = useNavigate();

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
        <div>
            <h1 className="font-semibold text-2xl">Filter Entities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                <div>
                    <label htmlFor="" className="text-[#5A5A5A] mb-4">Begin</label>
                    <input className="block w-full rounded-3xl  border border-gray-300 bg-white px-3 h-[47px] mt-2 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 form-control" type="date" />

                </div>
                <div>
                    <label htmlFor="" className="text-[#5A5A5A] mb-4">End</label>
                    <input className="block w-full rounded-3xl  border border-gray-300 bg-white px-3 h-[47px] mt-2 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 form-control" type="date" />

                </div>
                <div className="flex items-end gap-3 justify-start mt-4">
                    <button className="bg-[#1A3561] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[98px] text-lg font-semibold rounded-lg"><img src={filtericon} alt="filtericon" />  Filter</button>
                    <button className="bg-[#1A3561] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[165px] text-lg font-semibold rounded-lg"
                    onClick={() => navigate("/settingsentities")}
                    ><img src={add} alt="filtericon" />  Add on Entity</button>
                </div>
            </div>
            <h1 className="font-semibold mt-6 text-2xl">Player</h1>

            <div className="mt-6 bg-gray-100 ">
                <div className="bg-white rounded-2xl p-4 overflow-x-auto">
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full border-collapse text-left">
                            <thead>
                                <tr className="border-b border-gray-200 text-[#9C9C9C] font-normal text-sm">
                                    <th className="p-3">Value</th>
                                    <th className="p-3 text-nowrap">Number of Links</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">

                                            <td className="p-3 font-medium text-nowrap">{item.text}</td>
                                            <td className="p-3">
                                                {item.numberoflinks}
                                            </td>
                                            <td className="p-3 flex ">
                                                <button className="p-2 rounded-md btn ">
                                                    <img src={view} alt="edit" />
                                                </button>
                                                <button className="p-2 rounded-md btn ">
                                                    <img src={link} alt="check" />
                                                </button>

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

export default Entities;