
import LoginCard from "@/components/custom/login/LoginCard";

const page = () => {

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="min-w-[350px] w-fit">
        <div className="flex flex-col gap-4">
          <LoginCard/>
        </div>
      </div>
    </section>
  );
};

export default page;
