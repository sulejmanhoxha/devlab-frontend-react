import { Cat, Dog, HandHelping, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero m-0 flex min-h-screen flex-col items-center justify-center">
        <div
          className="flex max-w-xl flex-col items-center pb-16 text-center lg:pb-48 lg:pt-32"
          style={{ marginBottom: "150px" }}
        >
          <h1 className="mb-8 text-4xl font-bold text-white md:mb-12">
            Find your new best friend
          </h1>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            ></a>
            <a
              href="#"
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            ></a>
          </div>
        </div>
      </section>

      {/* <HoverDevCards /> */}
    </>
  );
};

export default Hero;

const HoverDevCards = () => {
  return (
    <div className="mx-auto -mt-[20%] w-full max-w-4xl">
      <div className="mg:grid-cols-2 grid grid-cols-1 gap-4 px-8 lg:grid-cols-4">
        <Card
          title="Account"
          subtitle="Manage profile"
          href="#"
          Icon={PawPrint}
        />
        <Card title="Email" subtitle="Manage email" href="#" Icon={Cat} />
        <Card title="Team" subtitle="Manage team" href="#" Icon={HandHelping} />
        <Card title="Billing" subtitle="Manage cards" href="#" Icon={Dog} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="group relative w-full overflow-hidden rounded border-[1px] border-slate-300 bg-white p-4"
    >
      <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-violet-600 to-indigo-600 transition-transform duration-300 group-hover:translate-y-[0%]" />

      <Icon className="absolute -right-12 -top-12 z-10 text-9xl text-slate-100 transition-transform duration-300 group-hover:rotate-12 group-hover:text-violet-400" />
      <Icon className="relative z-10 mb-2 text-2xl text-violet-600 transition-colors duration-300 group-hover:text-white" />
      <h3 className="relative z-10 text-lg font-medium text-slate-950 duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="relative z-10 text-slate-400 duration-300 group-hover:text-violet-200">
        {subtitle}
      </p>
    </a>
  );
};
