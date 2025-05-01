import ForgotCard from "@/components/custom/login/ForgotCard";

const page = () => {

    return (
        <section className="w-screen h-screen flex items-center justify-center">
            <div className="min-w-[350px] md:min-w-[500px] w-fit">
                <div className="flex flex-col gap-4">
                    <ForgotCard/>
                </div>
            </div>
        </section>
    );
};

export default page;
