import { EnvelopeIcon } from "@heroicons/react/24/outline";

const NewsLetter = () => {
  return (
    <div className="w-full flex flex-col items-center md:mt-20 mt-12 text-center">
      <div className="text-gray-800 md:text-3xl text-lg font-semibold md:w-[60%]">
        Subscribe to our newsletter to get updates to our latest collections
      </div>
      <div className="text-gray-500 font-medium md:m-6 m-3 md:text-base text-sm">
        Get 20% off on your first order just by subscribing to our newsletter
      </div>
      <div className="flex">
        <div className="shadow mr-2 rounded-lg border-gray-200 border-2 bg-gray-50 flex items-center md:px-5 md:py-3 px-3 py-1">
          <EnvelopeIcon color="grey" className="md:w-6 md:h-6 w-5 h-5" />
          <input
            type="email"
            placeholder="Enter your email"
            className="ml-3 focus:outline-none md:text-lg text-sm text-gray-700 bg-transparent md:w-72 "
          />
        </div>
        <button className="shadow rounded-lg bg-gray-800 hover:bg-gray-900 md:text-lg text-sm font-medium text-white px-5 py-3">Subscribe</button>
      </div>
      <div className="md:text-sm text-xs text-gray-400 font-medium text-center mt-4">
      <div>You will be able to unsubscribe at any time.</div>
      <div>Read our Privacy Policy <span className="text-gray-800 underline hover:cursor-pointer">here</span> </div>
      </div>
    </div>
  );
};

export default NewsLetter;
