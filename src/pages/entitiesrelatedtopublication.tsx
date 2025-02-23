import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function EntitiesRelatedtoPublication() {
  const navigate = useNavigate();

      const [data] = useState([
            {
                id: 1,
                value:'Anthony Stolarz',
                key:'Player'
    
            },
            {
                id: 2,
                value:'Anthony Stolarz',
                key:'Player'
    
            },
        ]);
  return (
    <div className='container-fluid'>
        <div className="flex items-center gap-3 justify-between mt-4">
    <h1 className="font-semibold text-2xl">Entities Related to Publication</h1>
        <button className="bg-[#AEAEB2] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[98px] text-lg font-semibold rounded-lg" onClick={() => navigate("/publications")}>  Cancel</button>
        </div>
    <div className="mt-6 bg-gray-100 ">
        <div className="bg-white rounded-2xl p-4 overflow-x-auto">
            <div className="w-full overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b border-gray-200 text-[#9C9C9C] font-normal text-sm">
                            <th className="p-3"> Key</th>
                            <th className="p-3 text-nowrap">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <React.Fragment key={item.id}>
                                <tr className="border-b border-gray-100 hover:bg-gray-50">

                                    <td className="p-3 font-medium text-nowrap">{item.key}</td>
                                    <td className="p-3 font-medium text-nowrap">
                                       {item.value}
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

export default EntitiesRelatedtoPublication