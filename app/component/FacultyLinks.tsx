import Link from "next/link";

export default function FacultyLinks() {
    return (
        <article >
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                <h1 className="my-4 font-bold text-md">ABOUT UNIVERRSITY</h1>
                <section className="flex flex-col text-gray-400 text-sm">
                    <Link href="https://lcu.edu.ng/index.php/about-us">History & Mission</Link>
                    <Link href="https://lcu.edu.ng/index.php/about-us">Notable Facts & Statistics</Link>
                    <Link href="https://lcu.edu.ng/index.php/careers">Careers</Link>
                    <Link href="#">Alumni Registration</Link>
                    <Link href="http://lcu.edu.ng/tour/index.html">Take a Tour</Link>
                    <Link href="https://lcu.edu.ng/index.php/about-alumni">Alumnus of the Month</Link>
                    <Link href="http://lcu.edu.ng/index.php/testimony-one">Students Speak</Link>
                    <Link href="https://brandedbylola.my.canva.site/lcu-sdg">Sustainable Development Goals</Link>
                </section>
            </div>
            <div>
                <h1 className="my-4 font-bold text-md">Past Events</h1>
                <section className="flex flex-col text-gray-400 text-sm">
                    <Link href="http://lcu.edu.ng/index.php/10th-convocation-pictures">10th Convocation Ceremony</Link>
                    <Link href="http://lcu.edu.ng/index.php/10th-convocation-pictures">The Vice Chancellor was here</Link>
                    <Link href="http://lcu.edu.ng/index.php/tukur-buratai-visits-lcu">Visit by the Chief of Army Staff</Link>
                    <Link href="http://lcu.edu.ng/index.php?option=com_content&view=article&id=187&catid=2">Professor Falola discusses with Lead City 89.1 FM</Link>
                    <Link href="http://lcu.edu.ng/index.php/fabmas-faculty-lecture">Faculty Lecture of the Faculty of Basic Medical and Applied Sciences</Link>
                </section>
            </div>

            <div>
                <h1 className="my-4 font-bold text-md">Applications</h1>
                <section className="flex flex-col text-gray-400 text-sm">
                    <Link href="https://admissions.lcu.edu.ng/">Undergraduate Portal</Link>
                    <Link href="https://lcu.edu.ng/images/PGOnline_Application_Form.pdf">Postgraduate Form</Link>
                    <Link href="https://lcu.edu.ng/index.php/template/template-features-2/overview#">Health Technology Form</Link>
                </section>
            </div>
            <div>
                <h1 className="my-4 font-bold text-md">Admissions</h1>
                <section className="flex flex-col text-gray-400 text-sm">
                    <Link href="https://lcu.edu.ng/index.php/admissions/undergraduate"> Undergraduate</Link>
                    <Link href="https://lcu.edu.ng/index.php/admissions/postgraduate"> Postgraduate</Link>
                </section>
            </div>
            <div>
                <h1 className="my-4 font-bold text-md">Contact Us</h1>
                <section className="flex flex-col text-gray-400 text-sm">
                    <Link href="https://lcu.edu.ng/images/bulletin/Vol-51-No-7.pdf">Vol. 51. No. 7 (April 5, 2021) </Link>
                    <Link href="https://lcu.edu.ng/images/bulletin/Vol-51-No-6.pdf">Vol. 51, No. 6 (March 15, 2021)</Link>
                    <Link href="https://lcu.edu.ng/images/bulletin/Vol-51-No-4.pdf">Vol. 51, No. 4 (February 22, 2021)</Link>
                </section>
            </div>
            </section>

            <hr className="my-6" />

            <section>
                <h1 className="my-4 font-bold text-md">Direct Contacts</h1>
            <section className="text-gray-400 text-sm">
               <p>Senate/Council Affairs - 0815 331 8703   |   Registrar's Office - 0815 331 8702</p>
                <p>Academic Planning - 0815 331 8765    |   Security Gate House - 0815 331 8766</p>
                <p>Fees Office - 0815 331 8764   |   LCU Hospital - 0815 331 8767</p>
            </section>
            <section className="font-bold text-sm text-black mt-6">
                <p className="text-xs text-red-400">For urgent enquiries on admission and fees, please contact our call center:</p>
                02014143228
            </section>

            <section className=" text-gray-400 text-sm mt-6">
                <p className="my-4 "><span className="text-red-600  font-bold ">WhatsApp:</span>  0815 331 8702</p>
                <p><span className="text-red-600 text-sm font-bold">Email Us</span>  </p>
                <p><span className="text-black text-sm font-bold">Result Verification, Complaints, Transcripts & other enquiries: </span><span className="text-blue-400 hover:text-blue-700">registrar@lcu.edu.ng</span> OR <span className="text-blue-400 hover:text-blue-700">leadcity@lcu.edu.ng</span></p>
                <p><span className="text-black text-sm font-bold">Undergraduate Admissions:</span> admissions@lcu.edu.ng</p>
                <p><span className="text-black text-sm font-bold">Postgraduate Admissions:</span> pgschool@lcu.edu.ng , pgcollege@lcu.edu.ng</p>
            </section>
            </section>

            
        </article>
    )
}