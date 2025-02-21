import { useState } from 'react';
import filtericon from '../assets/filter.svg'
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import edit from '../assets/Edit.svg';
import arrow from '../assets/Down 2.svg';
import check from '../assets/Check.svg'
import thumbnail from '../assets/thumbnail.svg'
import Editmodal from './editmodal';
import AddModal from "./addModal";
function GroupPosts() {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

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
    <div className='container-fluid'>
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
      <div className="mt-6 bg-gray-100 p-4 rounded-xl">
        <div className="bg-white rounded-xl p-4 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="p-3">Text</th>
                  <th className="p-3">Social Media</th>
                  <th className="p-3">Created Time</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Thumbnail</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <>
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-nowrap">{item.text}</td>
                      <td className="p-3 flex space-x-2">
                        {item.socialMedia.map((icon, i) => (
                          <img key={i} src={icon} alt="Social Icon" className="w-6 h-6" />
                        ))}
                      </td>
                      <td className="p-3 text-gray-500">{item.createdDate} {item.createdTime}</td>
                      <td className="p-3">
                        <span className={`px-4 py-1 rounded-xl text-sm font-medium ${item.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>{item.status}</span>
                      </td>
                      <td className="p-3">
                        <img src={item.thumbnail} alt="Thumbnail" className="w-12 h-12 rounded-md" />
                      </td>
                      <td className="p-3 flex gap-2">
                        <button className="p-2 rounded-md btn" onClick={() => setIsModalOpen(true)}>
                          <img src={edit} alt="edit" />
                        </button>
                        <button className="p-2 rounded-md btn">
                          <img src={check} alt="check" />
                        </button>
                        <button className="p-2 rounded-md btn" onClick={() => toggleRow(item.id)}>
                          <img src={arrow} alt="toggle" className={`${expandedRows[item.id] ? 'rotate-180' : ''} transition-transform`} />
                        </button>
                      </td>
                    </tr>
                    {expandedRows[item.id] && (
                      <tr className="border-b border-gray-200">
                        <td colSpan={6} className="p-4 bg-gray-50">
                          <div className="flex flex-col sm:flex-row items-center gap-4">
                            <img src={item.thumbnail} alt="Thumbnail" className="w-32 h-32 rounded-md" />
                            <div>
                              <p className="text-lg font-semibold">{item.text}</p>
                              <p className="text-gray-500">{item.createdDate} {item.createdTime}</p>
                              <div className="flex space-x-2 mt-2">
                                {item.socialMedia.map((icon, i) => (
                                  <img key={i} src={icon} alt="Social Icon" className="w-6 h-6" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Editmodal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenAddModal={() => {
          setIsModalOpen(false);
          setIsAddModalOpen(true);
        }}
      />
            <AddModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />

    </div>
  )
}

export default GroupPosts