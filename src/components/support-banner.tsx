export default function CustomerSupportBanner({ image, title, subTitle, btnText }) {
    return (
        <div className="flex w-full rounded-lg overflow-hidden">
            {/* Purple section with characters */}
            <div className="bg-[rgb(130,35,130)] min-w-[35%] w-[40%] max-h-[50%] flex items-center justify-center">
                <img src={image} height={"100%"} width={"100%"} alt="" />
            </div>

            {/* Content section */}
            <div className="bg-yellow-50 w-full p-6 flex flex-col  items-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-2xl text-gray-700 mb-6">{subTitle}</p>

                <button className="bg-purple-800 text-white font-semibold py-3 px-8 rounded-full w-4/5 text-xl">
                    {btnText}
                </button>
            </div>
        </div>
    )
}
