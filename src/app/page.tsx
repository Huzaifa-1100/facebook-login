import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 text-black h-screen flex items-center justify-center md:flex-wrap">
      {/* left side */}
      <div className="text-3xl w-1/2 px-7">
        <Image
          src={"/pictures/facebookLogo.svg"}
          width={300}
          height={100}
          alt="facebook"
        />
        <p className="ml-8 -mt-2">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      {/* right side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3 shadow-md shadow-gray-400">
        <input
          className="my-2 border border-1 border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-500"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-1 border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-500"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-500 py-2 rounded-md font-bold text-white my-2 hover:bg-blue-700 ">
          Log in
        </button>
        <p className="text-blue-500 cursor-pointer text-center hover:underline">Forgotten password?</p>
        <span className="my-3">
          <hr></hr>
        </span>
        <button className="bg-green-500 text-white font-bold m-4 py-3 w-fit px-2 mx-auto rounded-md text-[20px] hover:bg-green-700 ">Create new account</button>
      </div>
    </div>
  );
}
