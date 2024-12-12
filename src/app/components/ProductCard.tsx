import Image from "next/image";

function ProductCard() {
    return (
        <div className="flex flex-wrap justify-center gap-5 p-5 mt-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
            {/* First Card */}
            <div className="w-full md:w-[48%] lg:w-[30%] border border-yellow-500 rounded-2xl p-5 h-[490px] bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg">
                <div className="flex items-center justify-center h-[300px]">
                    <Image
                        src="/watch1.PNG"
                        alt="Elegant Black Watch"
                        width={250}
                        height={250}
                        className="object-contain"
                    />
                </div>
                <p className="text-center pt-5 font-semibold text-[1.5rem] text-yellow-400">Elegant Black Watch</p>
                <p className="text-center font-bold text-[1.25rem] text-white mt-2">PKR 12,000</p>
                <div className="flex justify-center items-center mt-5">
                    <button className="px-8 py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Second Card */}
            <div className="w-full md:w-[48%] lg:w-[30%] border border-yellow-500 rounded-2xl p-5 h-[490px] bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg">
                <div className="flex items-center justify-center h-[300px]">
                    <Image
                        src="/watch2.PNG"
                        alt="Silver Chronograph Watch"
                        width={250}
                        height={250}
                        className="object-contain"
                    />
                </div>
                <p className="text-center pt-5 font-semibold text-[1.5rem] text-yellow-400">Silver Chronograph Watch</p>
                <p className="text-center font-bold text-[1.25rem] text-white mt-2">PKR 18,500</p>
                <div className="flex justify-center items-center mt-5">
                    <button className="px-8 py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Third Card */}
            <div className="w-full md:w-[48%] lg:w-[30%] border border-yellow-500 rounded-2xl p-5 h-[490px] bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg">
                <div className="flex items-center justify-center h-[300px]">
                    <Image
                        src="/watch3.PNG"
                        alt="Classic Leather Watch"
                        width={250}
                        height={250}
                        className="object-contain"
                    />
                </div>
                <p className="text-center pt-5 font-semibold text-[1.5rem] text-yellow-400">Classic Leather Watch</p>
                <p className="text-center font-bold text-[1.25rem] text-white mt-2">PKR 15,000</p>
                <div className="flex justify-center items-center mt-5">
                    <button className="px-8 py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
