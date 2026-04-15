

export default function FacultyAbout() {
    return (
        <article >
            <h3 className="font-bold text-md">About the Faculty</h3>
            <section className="mt-6 text-sm  font-light text-gray-400 tracking-tighter text-wrap">
                <p>
                    The LCU Faculty of Engineering had its first set of students in the 2019/2020 academic session after a successful resource
                    inspection and approval by the National University Commission (NUC).
                    The founding academic departments include: Electrical and Electronic Engineering, Civil Engineering,
                    Mechanical Engineering, as well as Wood Products Engineering.
                </p>

                <p className="mt-5">
                    The Faculty is committed to the delivery of the highest quality engineering
                    education based on a well-structured academic curriculum as well as systematic
                    teaching and learning processes.
                    In addition, we are involved in innovative interdisciplinary engineering research
                    efforts which are problem solving in design and beneficial to the society in implementation.
                    These are achieved through our state-of-the-art laboratory and workshop facilities.
                    All these are targeted at providing our engineering students with in-depth theoretical
                    knowledge and practical skills needed to make productive impact in the
                    development of the society.
                </p>
            </section>

            <hr className="my-12 text-gray-400" />

            <h3 className="font-bold text-md">Our vision</h3>
            <p className=" text-sm mt-4 font-light text-gray-400 tracking-tighter text-wrap">
                Our Vision is to produce engineering graduate professionals
                that are second to none in Africa; who would be in
                very high demand in the industry by virtue of their well-developed engineering skills and professional/academic integrity.
            </p>

            <h3 className="font-bold mt-6 text-md">Our Mission</h3>
            <article className="text-sm font-light text-gray-400 tracking-tighter">
                <p className="mb-4">At the Faculty of Engineering, our missions are to: </p>
                <ul className="list-disc list-inside marker:text-gray-400 mt-5 text-sm font-light tracking-tighter">
                    <li>Offer high-quality engineering programs that prepare students professionally for contemporary challenges and that inculcate life-long intellectual capabilities</li>
                    <li>Conduct engineering researches that are by design responsive and applicable to current national and international challenges as well as beneficial to humanity in outcomes</li>
                    <li>Employ advanced techniques and tools for teaching and learning processes as well as well-equipped laboratories and workshops to facilitate effective and productive practical-oriented learning.</li>
                    <li>Facilitate exciting and fulfilling student experience through the promotion of student-focused academic engagements and industrial excursions</li>
                    <li>Develop state-of-the-art academic environment that attracts and retains the best academic staff members that are committed to the intellectual and professional development of our students</li>
                    <li>Engage in value-added activities that serve and address the needs of the engineering industry and profession, as well as advance the economic, environmental and social welfare of our nation.</li>
                </ul>
                <p className="my-6">The undergraduate programmes offered at various departments of the Faculty of Engineering include:</p>
                <ul style={{ listStyleType: "square" }} className="list-inside marker:text-gray-400 mt-5 space-y-3 text-sm font-light tracking-tighter text-gray-400">
                    <li>Electrical and Electronic Engineering</li>
                    <li>Civil Engineering</li>
                    <li>Mechanical Engineering</li>
                    <li>Wood Products Engineering</li>
                </ul>
            </article>

            <hr className="text-gray-400 my-6" />

            <h3 className="font-bold text-md">Admission Requirements</h3>
            <p className="text-gray-400 mt-3 text-sm tracking-tight font-light ">
                At least five (5) credits in SSCE/GCE/NECO including Mathematics, English Language, Physics and Chemistry.
            </p>
            <p className="text-gray-400 text-sm tracking-tight font-light mt-5">
                Admissible score in UTME and post-UTME screening.
            </p>
            <p className="text-gray-400 text-sm tracking-tight font-light mt-5">
                Admissible results in JUPEB/IJMB for ‘A’ Level candidates
            </p>
            <p className="text-gray-400 text-sm tracking-tight font-light mt-5">
                OND and HND candidates with requisite qualification are also admissible through Direct Entry and Conversion options
            </p>

            <h3 className="font-bold my-6 text-md">Why You Should Study Engineering at LCU</h3>
            <p className="text-gray-400 text-sm tracking-tight font-light ">
                Engineering is a broad field that offers exciting career opportunities for creativity and for finding
                solutions to problems. If you are considering a career in engineering, you should consider Lead City University as
                your preferred choice for engineering education for at least three reasons:
            </p>
            <ul style={{ listStyle: 'lower-roman' }} className=" px-6 text-gray-400 mt-5 space-y-3 text-sm font-light tracking-tighter ">
                <li>We are resolutely committed to the efforts of expanding the frontiers of contemporary engineering knowledge</li>
                <li>Our engineering laboratories and workshops are well-equipped for modern engineering applications that cut across diverse industrial sectors.</li>
                <li>We are passionate about the wholistic development of our students both in learning and in character to make them ready for problem-solving
                    creativity requisite for addressing the challenging tasks of societal development
                </li>
            </ul>


        </article>
    );
}