export default function EmailLoginSection() {
  return (
    <>
      <div className="mt-4 hidden lg:block">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Username
        </label>
        <input
          className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
          type="email"
        />
      </div>
      <div className="mt-4 hidden lg:block">
        <div className="flex justify-between">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Password
          </label>
          <a href="#" className="text-xs text-gray-500">
            Forget Password?
          </a>
        </div>
        <input
          className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
          type="password"
        />
      </div>
      <div className="mt-8 hidden lg:block">
        <button className="w-full rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600">
          Login
        </button>
      </div>
      <div className="mt-4 hidden items-end justify-between lg:flex">
        {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
        <a href="#" className="text-xs uppercase text-gray-500">
          or guest sign up
        </a>
        {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
      </div>
    </>
  );
}
