export default function CustomerSupportBanner({ image, title, subTitle, btnText }) {
    return (
        <div className="flex md:h-[200px] h-[120px] w-11/12 max-w-md mx-auto rounded-lg overflow-hidden shadow-md sm:flex-row sm:w-full sm:max-w-none">
            {/* Image section */}
            <div className="bg-[#822382] w-full md:h-full min-h-[30px] flex items-center justify-center sm:min-w-[35%] sm:w-[40%]">
                <img src={image} className="md:object-cover md:object-cover md:w-full md:h-full md:h-3/4 sm:w-full sm:h-full" alt="" />
            </div>

            {/* Content section */}
            <div className="bg-yellow-50 w-full py-4 px-4 flex flex-col sm:p-6">
                <h2 className="md:text-2xl text-[12px] font-medium  text-gray-800 mb-2  sm:text-2xl">{title}</h2>
                <p className="md:text-2xl text-[12px] font-medium text-gray-700 mb-4  sm:text-2xl">{subTitle}</p>

                <button className="py-1 bg-[#822382] text-[12px] text-white md:font-medium md:py-2 md:px-6 rounded-full w-4/5 text-lg sm:py-3 sm:px-8 sm:text-xl">
                    {btnText}
                </button>
            </div>
        </div>
    );
}
