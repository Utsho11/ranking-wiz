import { Image } from "@nextui-org/image";

const WhoAreWe = () => {
  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Who We Are?</h1>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 p-6">
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            isBlurred
            alt="Web Development Services"
            className="rounded-lg"
            height={400}
            src="/banner2.png"
            width={400}
          />
        </div>
        <div className="flex-1">
          <p className="my-4 text-xl">
            We are a passionate team of developers, designers, and strategists
            dedicated to creating impactful digital experiences. With over 5
            years of expertise, we help businesses thrive in the online world.
          </p>
          <p className="italic">Let’s grow your business together!</p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
