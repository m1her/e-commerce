import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FilterSideBar from "@/components/FilterBar";

export default function RootLayout({ children }) {
  return (
    <div className="flex w-full justify-center lg:px-24 md:px-14 px-6 font-Montserrat flex-col items-center">
    {children}
    </div>
  );
}
