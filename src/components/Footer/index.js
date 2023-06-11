const Footer = () => {
  return (
    <footer className="bg-[#e7ecee] mt-24 font-Montserrat sm:py-6 py-2 lg:px-24 md:px-10 px-6">
      <div className="grid md:grid-cols-5 md:grid-rows-none grid-rows-3 py-8 w-full lg:gap-8 md:gap-4">
        <div className="md:col-span-2 row-span-1 lg:pr-20">
          <div className="md:text-2xl text-lg font-bold text-gray-700 mb-4">FakeStore</div>
          <div className="md:text-sm text-xs font-medium text-gray-400">
            Specializes in providing high-quality, stylish products for your
            wardrobe
          </div>
        </div>
        <div className="md:col-span-3 row-span-2 grid md:grid-cols-4 grid-cols-2 lg:gap-x-0 md:gap-x-4 gap-y-4">
          <div className="">
            <div className="md:text-base text-sm font-semibold text-gray-700 mb-4">SHOP</div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              All Collections
            </div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              Winter Edition
            </div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              Discount
            </div>
          </div>
          <div className="">
            <div className="md:text-base text-sm font-semibold text-gray-700 mb-4">COMPANY</div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              About Us
            </div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              Contact
            </div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              Affiliates
            </div>
          </div>
          <div className="">
            <div className="md:text-base text-sm font-semibold text-gray-700 mb-4">SUPPORT</div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">FAQ's</div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              Cookie Policy
            </div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              Terms Of Use
            </div>
          </div>
          <div className="">
            <div className="md:text-base text-sm font-semibold text-gray-700 mb-4">
              PAYMENT METHODS
            </div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">
              Credit Card
            </div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">Visa</div>
            <div className="md:text-sm text-xs font-medium text-gray-400 mb-2">PayPal</div>
          </div>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-300 mb-7 mt-2"/>
      <div className="w-full text-center text-sm font-medium my-2 text-gray-400">Copyright ©2023 FakeStore. All right reserved</div>
    </footer>
  );
};

export default Footer;
