import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Challenge 1",
  description: "See the NFT new world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="max-w-[1200px] m-auto flex flex-col items-start p-0 gap-[120px] max-sm:gap-[80px] max-md:w-[676px] max-sm:w-[400px]">
          {/*  */}
          <NavBar />
          {children}
          {/*  */}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
