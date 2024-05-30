import { Input, Nav } from "../components";
// import Nav from "../components";

function Header() {
  return (
    <div>
      <div className="w-full h-[360px] bg-cover bg-center bg-no-repeat bg-header mb-8 md:h-[400px]">
        <Nav />
        {/* <h1 className="text-white text-center py-7 sm:py-12 text-3xl sm:text-5xl font-bold">Find Your<span className="text-green-400 font-black text-4xl sm:text-6xl "> Dream Tech</span> Job</h1> */}
        <h1 className=" text-white text-center py-5 sm:py-11 font-bold text-4xl sm:text-5xl text-wrap">Find Your <span className=" text-green-400 font-black text-5xl sm:text-6xl text-wrap">Dream Tech </span>Job</h1>
        <div className="">
          <Input />
        </div>
      </div>
      {/* input field */}
    </div>
  );
}

export default Header;
