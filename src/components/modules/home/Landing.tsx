// import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">
          Best Web Development Company
        </h1>
        <p className="my-4 text-medium text-slate-500">
          Design your website with the best web developers in Bangladesh. Our
          web design company has served 1000+ clients with a 90% client
          retention rate since 2024.
        </p>
        <Link href="/contact">
          <button className="bg-[#BA68C8] text-base p-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#BA68C8]">
            Contact us
          </button>
        </Link>
      </div>
      <div className="hidden sm:flex-1 sm:flex justify-center lg:justify-end">
        <Image
          isBlurred
          alt="Web Development Services"
          className="rounded-lg"
          height={400}
          src="/banner1.png"
          width={400}
        />
      </div>
    </div>
  );
};

export default Landing;
