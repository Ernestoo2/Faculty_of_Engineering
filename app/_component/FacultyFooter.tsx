import Link from "next/link";

export default function FacultyFooter() {
    return (
        <article className="text-center space-y-6 text-gray-400 text-xs font-light tracking-tighter">
            <div className="text-gray-400 text-xs font-bold">
                <Link className="hover:underline mr-3" href="https://lcu.edu.ng/index.php/template/template-features-2/overview#">Accessibility</Link>
                |
                <Link className="hover:underline mx-3" href="https://lcu.edu.ng/index.php/template/template-features-2/overview#">About Us</Link>
                |
                <Link className="hover:underline ml-3" href="https://lcu.edu.ng/index.php/privacy">Privacy Policy</Link>
            </div>
            <div className="text-center space-y-6">
                <p className="text-gray-400 text-xs space-x-6 font-bold">
                    University Address: Lagos-Ibadan Express Way Toll Gate Area Ibadan, Oyo State Nigeria
                </p>
                <p className="text-gray-400 text-xs font-bold">Copyright 2021 - Lead City University, Ibadan</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <span className="h-4 w-4 rounded-sm bg-orange-500"></span>
                <span className="h-4 w-4 rounded-sm bg-yellow-400"></span>
                <span className="h-4 w-4 rounded-sm bg-cyan-300"></span>
                <span className="h-4 w-4 rounded-sm bg-sky-400"></span>
            </div>
        </article>
    )
}
