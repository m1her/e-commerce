const LoadingItem = () => {
  return (
    <div className="w-[228px] h-[450px] font-Montserrat bg-[#fdfdfd] border border-[#eeecec] rounded relative">
      <div className="relative h-[228px] w-full rounded-t animate-pulse bg-gray-200"></div>
      <div className="w-full p-2 h-full">
        <div className="animate-pulse w-full rounded h-6 font-semibold text-[#383737] mb-2 sm:text-base text-xs bg-gray-100"></div>
        <div className="animate-pulse w-full h-4 rounded text-[#383737] mb-2 sm:text-sm text-xs bg-gray-100"></div>
        <div className="animate-pulse w-full h-4 rounded text-[#383737] mb-2 sm:text-sm text-xs bg-gray-100"></div>
        <div className="animate-pulse w-full h-4 rounded text-[#383737] mb-2 sm:text-sm text-xs bg-gray-100"></div>
        <div className="w-1/2 h-4 rounded text-[#383737] mb-2 sm:text-sm text-xs bg-gray-100"></div>
        <div className="flex absolute bottom-2 left-2">
          <div className="animate-pulse w-8 h-8 rounded sm:text-2xl text-base font-semibold text-[#383737] bg-gray-200 "></div>
        </div>
      </div>
    </div>
  );
};
export default LoadingItem;
