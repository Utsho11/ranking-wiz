import Link from "next/link";

import { Logo } from "../../icons";

const Footer = () => {
  return (
    <div className="bg-[#bd8fc5] grid sm:grid-cols-4 p-4 sm:p-16">
      <div className="px-8">
        <Link href="/">
          <div className="flex items-center">
            <Logo size={42} />
            <p className="font-bold text-4xl">RankingWiz</p>
          </div>
        </Link>
      </div>
      <div className="px-8">
        <h1 className="text-3xl font-semibold my-4">Organic Search</h1>
        <hr />
        <ul className="mt-4">
          <li className="hover:underline">
            <Link href="/">SEO</Link>
          </li>
          <li className="hover:underline">
            <Link href="/">E-commerce SEO</Link>
          </li>
        </ul>
      </div>
      <div className="px-8">
        <h1 className="text-3xl font-semibold my-4">Digital Marketing</h1>
        <hr />
        <ul className="mt-4">
          <li className="hover:underline">
            <Link href="/">Social Media Marketing</Link>
          </li>
          <li className="hover:underline">
            <Link href="/">Monitoring</Link>
          </li>
        </ul>
      </div>
      <div className="px-8">
        <h1 className="text-3xl font-semibold my-4">Design & Development</h1>
        <hr />
        <ul className="mt-4">
          <li className="hover:underline">
            <Link href="/">Web Design</Link>
          </li>
          <li className="hover:underline">
            <Link href="/">Web Development</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
