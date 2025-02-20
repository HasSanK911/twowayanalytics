import React, { useState } from "react";
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import thumbnail from '../assets/thumbnail.svg'
import deletewhite from '../assets/deletewhite.svg';
import add from '../assets/add.svg'

interface AddModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddModal({ isOpen, onClose }: AddModalProps) {
    if (!isOpen) return null;
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
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000052] bg-opacity-50 z-1000">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-[900px] w-full   ">
                <h2 className="text-2xl font-semibold">Add Post</h2>
                <div className="flex items-end gap-3 justify-between mt-4">
                    <button className="bg-[#AEAEB2] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[98px] text-lg font-semibold rounded-lg" onClick={onClose}>  Cancel</button>
                    <button className="bg-[#1A3561] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[165px] text-lg font-semibold rounded-lg"

                    ><img src={add} alt="filtericon" />  Add Checked</button>
                </div>
                <div className=" overflow-x-auto mt-4">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-gray-200 text-[#9C9C9C] font-normal text-sm">
                                <th className="p-3">Select</th>
                                <th className="p-3">Text</th>
                                <th className="p-3 text-nowrap">Social Network</th>
                                <th className="p-3">Validation</th>
                                <th className="p-3 text-nowrap">Time Stamp</th>
                                <th className="p-3">Thumbnail</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <React.Fragment key={item.id}>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-3">
                                        <input
                                                    type="checkbox"
                                                    className="form-control peer w-[20px] h-[20px]"
                                                />

                                        </td>
                                        <td className="p-3 font-medium text-nowrap">{item.text}</td>
                                        <td className="p-3 flex space-x-2">
                                            {item.socialMedia.map((icon, i) => (
                                                <img key={i} src={icon} alt="Social Icon" className="w-8 h-8" />
                                            ))}
                                        </td>
                                        <td className="p-3">
                                            true
                                        </td>
                                        <td className="p-3 text-gray-500 text-nowrap">
                                            {item.createdDate} {item.createdTime}
                                        </td>
                                        <td className="p-3">
                                            <img src={item.thumbnail} alt="Thumbnail" className="w-12 h-12 rounded-md" />
                                        </td>
                                        <td className="p-3 ">
                                            <div className='flex gap-2 flex-nowrap w-[140px]'>
                                                <button className="bg-[#CE6D6D] flex items-center justify-center btn  h-[37px] w-[39px] rounded-lg"
                                                ><img src={deletewhite} alt="delete" /> </button>
                                            </div>
                                        </td>
                                    </tr>

                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-end mt-4'>
                </div>

            </div>
        </div>
    );
}
