import { FaXTwitter } from "react-icons/fa6";
import FacultyHeader from "../_component/FacultyHeader";
import FacultyTabs from "../_component/FacultyTabs";
import FacultyLinks from "../_component/FacultyLinks";
import FacultyFooter from "../_component/FacultyFooter";
import Link from "next/link";

export default function HomePage() {
  return (
    <main >
      <FacultyHeader />

      <section className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        <h1 className="text-3xl font-bold text-slate-900">Overview - Faculty of Engineering and Technology</h1>
        <FacultyTabs />

        <hr className="text-gray-400 my-6" />
        {/* <Link
        href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Flcu.edu.ng%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Overview%20-%20Faculty%20of%20Enginnering%20and%20Technology&url=https%3A%2F%2Flcu.edu.ng%2Findex.php%2Ftemplate%2Ftemplate-features-2%2Foverview&via=lcu_ibdan"
        target="_blank"
        className="flex gap-1 mx-auto w-18 items-center bg-black hover:bg-blue-700 text-white text-xs font-medium py-1 px-4 rounded-full"
      > */}
        <Link
          href="#"
          target="_blank"
          className="flex gap-1 mx-auto w-18 items-center bg-black hover:bg-blue-700 text-white text-xs font-medium py-1 px-4 rounded-full"
        >
          <FaXTwitter size={12} />Post
        </Link>

        <hr className="text-gray-400 my-6" />

        <FacultyLinks />

        <hr className="text-gray-400 my-6" />
      </section>
      <FacultyFooter />
    </main>
  );
}
