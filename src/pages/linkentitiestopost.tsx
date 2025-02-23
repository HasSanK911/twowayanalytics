import { useNavigate } from "react-router-dom";

function LinkEntitiesToPost() {
    const navigate = useNavigate();

    return (
        <div className='container-fluid'>
            <h1 className="font-semibold text-2xl">Link Entities to Post</h1>
            <div className="flex items-center gap-3 justify-start mt-4">
                <button className="bg-[#1A3561] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[165px] text-lg font-semibold rounded-lg"
                >  Link Entities</button>
                <button className="bg-[#AEAEB2] flex items-center justify-center gap-2 btn text-[#ffffff] h-[47px] w-[98px] text-lg font-semibold rounded-lg" onClick={() => navigate("/publications")}>  Cancel</button>
            </div>
            <div className="my-4">
                <h2 className="font-semibold text-xl my-3">Player</h2>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="form-control w-[20px] h-[20px]  border-2 border-gray-400 rounded-md checked:bg-[#1A3561] checked:border-[#1A3561] "
                    />
                    <span className="text-gray-700">Anthony Stolraz</span>
                </label>


            </div>
        </div>
    )
}

export default LinkEntitiesToPost