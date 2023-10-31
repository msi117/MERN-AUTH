const Hero = () => {
  return (
    <div className="py-5">
      <div className="flex justify-center">
        <div className="p-5 flex flex-col items-center bg-light w-3/4">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            This is boilerplate for MERN Authentication that stores a JWT in an
            HTTP-Only cookie. It also used Redux Toolkit and the tailwindCSS
          </p>
          <div className="flex">
            <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
              Sign In
            </a>
            <a href="/register" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
