export default function EmailLoginSection() {
  return (
    <>
      <div className="hidden lg:block mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
        />
      </div>
      <div className="hidden lg:block mt-4">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <a href="#" className="text-xs text-gray-500">
            Forget Password?
          </a>
        </div>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
        />
      </div>
      <div className="hidden lg:block mt-8">
        <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
          Login
        </button>
      </div>
      <div className="hidden lg:flex mt-4 items-end justify-between">
        {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
        <a href="#" className="text-xs text-gray-500 uppercase">
          or guest sign up
        </a>
        {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
      </div>
    </>
  );
}
