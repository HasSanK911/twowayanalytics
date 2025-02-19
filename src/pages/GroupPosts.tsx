import { useState } from 'react';
import filtericon from '../assets/filter.svg'
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import React from 'react';
import edit from '../assets/Edit.svg';
import arrow from '../assets/Down 2.svg';
import check from '../assets/Check.svg'
import thumbnail from '../assets/thumbnail.svg'
function GroupPosts() {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const [data] = useState([
    {
      id: 1,
      thumbnail: thumbnail,
      text: "Super Box Packaging",
      socialMedia: [facebookIcon, instagramIcon],

      createdDate: "Sep 28, 2024",
      createdTime: "03:14pm",
      status: "Unpublished",
    },
    {
      id: 2,
      thumbnail: thumbnail,
      text: "Super Box Packaging",
      socialMedia: [facebookIcon, instagramIcon, linkedinIcon],

      createdDate: "Sep 28, 2024",
      createdTime: "03:14pm",
      status: "Published",
    },
  ]);

  const toggleRow = (id: any) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div>
      <h1 className="font-semibold text-2xl">Filter Publications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
        <div>
          <label htmlFor="" className="text-[#5A5A5A] mb-4">Begin</label>
          <input className="block w-full rounded-3xl  border border-gray-300 bg-white px-3 h-[47px] mt-2 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 form-control" type="date" />

        </div>
        <div>
          <label htmlFor="" className="text-[#5A5A5A] mb-4">End</label>
          <input className="block w-full rounded-3xl  border border-gray-300 bg-white px-3 h-[47px] mt-2 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 form-control" type="date" />

        </div>
        <div>
          <label htmlFor="" className="text-[#5A5A5A] mb-4">Type</label>
          <select className="block w-full rounded-3xl  border border-gray-300 bg-white px-3 h-[47px] mt-2 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200">
            <option value="">All</option>
            <option value="1">Option One</option>
            <option value="2">Option Two</option>
            <option value="3">Option Three</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="text-[#5A5A5A] mb-4">Social Network</label>
          <select className="block w-full rounded-3xl  border border-gray-300 bg-white px-3 h-[47px] mt-2 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200">
            <option value="">All</option>
            <option value="1">Facebook</option>
            <option value="2">Instagram</option>
            <option value="3">twitter</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="bg-[#1A3561] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[98px] text-lg font-semibold rounded-lg"><img src={filtericon} alt="filtericon" />  Filter</button>
        </div>
      </div>
      <div className="mt-6 bg-gray-100 ">
        <div className="bg-white rounded-2xl p-4 overflow-x-auto">
          <div className="w-full overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 text-[#9C9C9C] font-normal text-sm">
                  <th className="p-3">Text</th>
                  <th className="p-3 text-nowrap">Social Media</th>
                  <th className="p-3 text-nowrap">Created Time</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Thumbnail</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">

                      <td className="p-3 font-medium text-nowrap">{item.text}</td>
                      <td className="p-3 flex space-x-2">
                        {item.socialMedia.map((icon, i) => (
                          <img key={i} src={icon} alt="Social Icon" className="w-8 h-8" />
                        ))}
                      </td>
                      <td className="p-3 text-gray-500 text-nowrap">
                        {item.createdDate} {item.createdTime}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-4 py-1 rounded-2xl text-sm font-medium ${item.status === "Published"
                            ? "bg-[#EEFFEE] text-[#35C335]"
                            : "bg-[#FFF5EE] text-[#FF5C00]"
                            }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <img src={item.thumbnail} alt="Thumbnail" className="w-12 h-12 rounded-md" />
                      </td>
                      <td className="p-3 flex ">
                        <button className="p-2 rounded-md btn ">
                          <img src={edit} alt="edit" />
                        </button>
                        <button className="p-2 rounded-md btn ">
                          <img src={check} alt="check" />
                        </button>
                        <button
                          className="p-2 rounded-md btn "
                          onClick={() => toggleRow(item.id)}
                        >
                          {expandedRows[item.id] ? (
                            <img src={arrow} alt="arrow" />
                          ) : (
                            <img src={arrow} alt="arrow" />
                          )}
                        </button>
                      </td>
                    </tr>
                    {expandedRows[item.id] && (
                      <tr className="border-b-1 border-b-gray-200">
                        <td className="p-3 font-medium text-nowrap">{item.text}</td>
                        <td className="p-3 flex ">
                          <div className='flex items-center h-[226px]'>
                          {item.socialMedia.map((icon, i) => (
                            <img key={i} src={icon} alt="Social Icon" className="w-8 h-8" />
                          ))}
                          </div>
                        </td>
                        <td className="p-3 text-gray-500 text-nowrap">
                          {item.createdDate} {item.createdTime}
                        </td>
                        <td className="p-3">
                        <span
                          className={`px-4 py-1 rounded-2xl text-sm font-medium ${item.status === "Published"
                            ? "bg-[#EEFFEE] text-[#35C335]"
                            : "bg-[#FFF5EE] text-[#FF5C00]"
                            }`}
                        >
                          {item.status}
                        </span>
                        </td>
                        <td className="p-3">
                          <img src={item.thumbnail} alt="Thumbnail" className="w-[200px] h-[200px] rounded-md" />
                        </td>
                        <td className="p-3 flex ">

                        </td>
                      </tr>
                      
                    )}
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

export default GroupPosts