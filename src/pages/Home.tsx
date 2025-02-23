import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import dailyposts from '../assets/dailyposts.png';
import validposts from '../assets/validposts.png';
import invalidposts from '../assets/invalidposts.png';
import { useState } from 'react';
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import edit from '../assets/Edit.svg';
import arrow from '../assets/Down 2.svg';
import check from '../assets/Check.svg'
import thumbnail from '../assets/thumbnail.svg'
import Editmodal from './editmodal';
import AddModal from './addModal';
import { DatePicker } from 'antd';
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const chartdata = [
  { name: 'Mon', posts: 4000, valid: 3000, invalid: 1000 },
  { name: 'Tue', posts: 3000, valid: 2500, invalid: 500 },
  { name: 'Wed', posts: 5000, valid: 4000, invalid: 1000 },
  { name: 'Thu', posts: 4500, valid: 3200, invalid: 1300 },
  { name: 'Fri', posts: 4800, valid: 3500, invalid: 1300 },
];


const Dashboard = () => {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [dates, setDates] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null] | null>(null);

  const handleDateChange = (values: any) => {
    setDates(values);
  };
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
    {
      id: 3,
      thumbnail: thumbnail,
      text: "Super Box Packaging",
      socialMedia: [facebookIcon, instagramIcon, linkedinIcon],

      createdDate: "Sep 28, 2024",
      createdTime: "03:14pm",
      status: "Published",
    },
    {
      id: 4,
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
    <div className="p-2 bg-gray-100 ">
    <div className='flex justify-between gap-2 flex-col lg:flex-row xl:flex-row'>
  <div>
    <h1 className="text-2xl font-bold">Welcome back, John</h1>
    <p className="text-gray-500">Measure your advertising ROI and report website traffic.</p>
  </div>
  <div className="flex flex-col items-center justify-center p-6">
    <RangePicker
      onChange={handleDateChange}
      className="rounded-lg shadow-md p-2"
      allowClear
    />
  </div>
</div>


      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg h-[224px]">
          <div className="flex items-center gap-2">
            <img src={dailyposts} alt="" className="w-auto" />
            <h2 className="text-[#52B6EA] text-[12px] font-light "> Daily Posts</h2>
          </div>
          <p className="text-2xl font-semibold">50.8K <span className="text-sm text-green-500">↑ 28.4%</span></p>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={chartdata}>
              <defs>
                <linearGradient id="colorPosts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000080" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#000080" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="posts" stroke="#000080" fill="url(#colorPosts)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-lg h-[224px]">
          <div className="flex items-center gap-2">
            <img src={validposts} alt="" className="w-auto" />
            <h2 className="text-[#52B6EA] text-[12px] font-light ">Valid Posts</h2>
          </div>
          <p className="text-2xl font-semibold">32.4K <span className="text-sm text-green-500">↑ 70.9%</span></p>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={chartdata}>
              <defs>
                <linearGradient id="colorValid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#008000" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#008000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="valid" stroke="#008000" fill="url(#colorValid)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-lg h-[224px]">
          <div className="flex items-center gap-2">
            <img src={invalidposts} alt="" className="w-auto" />
            <h2 className="text-[#52B6EA] text-[12px] font-light ">Invalid Posts</h2>
          </div>
          <p className="text-2xl font-semibold">20.6K <span className="text-sm text-red-500">↓ 30.1%</span></p>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={chartdata}>
              <defs>
                <linearGradient id="colorInvalid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF0000" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF0000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="invalid" stroke="#FF0000" fill="url(#colorInvalid)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div >
        <div className="mt-6 bg-gray-100 rounded-xl">
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
  );
};

export default Dashboard;