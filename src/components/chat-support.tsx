import CustomerSupportBanner from "./support-banner";

export default function ChatSupport() {
    return (
        <div className="px-4 md:px-[100px] py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
                <CustomerSupportBanner
                    title={"Have any questions?"}
                    subTitle={"We’re here to help 24x7"}
                    image={"/images/owl.png"}
                    btnText={"Contact Us"}
                />
                <CustomerSupportBanner
                    title={"Have any questions?"}
                    subTitle={"We’re here to help 24x7"}
                    image={"/images/bird.png"}
                    btnText={"Contact Us"}
                />
            </div>
        </div>
    );
}
