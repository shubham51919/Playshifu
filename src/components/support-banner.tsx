export default function CustomerSupportBanner({ image, title, subTitle, btnText }) {
    return (
        <div className="flex flex-col sm:flex-row w-full rounded-lg overflow-hidden shadow-md">
            {/* Image section */}
            <div className="bg-[#822382] sm:min-w-[35%] sm:w-[40%] flex items-center justify-center">
                <img src={image} className="object-contain w-full h-full" alt="" />
            </div>

            {/* Content section */}
            <div className="bg-yellow-50 w-full p-6 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h2>
                <p className="text-2xl text-gray-700 mb-6 text-center">{subTitle}</p>

                <button className="bg-[#822382] text-white font-semibold py-3 px-8 rounded-full w-4/5 text-xl">
                    {btnText}
                </button>
            </div>
        </div>
    );
}
