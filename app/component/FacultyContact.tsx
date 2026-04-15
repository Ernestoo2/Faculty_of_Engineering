import Image from "next/image";

type FacultyContactPerson = {
    title: string;
    image: string;
    name: string;
    biography: string;
    tel: string;
    email: string;
};

const facultyMembers: FacultyContactPerson[] = [
    {
        title: "Head, Department of Electrical and Electronic Engineering",
        image: "/Assets/Babatunde.jpg",
        name: "Babatunde S. Emmanuel, PhD, R. Engr (COREN), MNSE",
        biography: "Dr. Babatunde S. Emmanuel is the Head, Department of Electrical and Electronic Engineering, Lead City University, Ibadan, Nigeria. He is a registered Electrical Engineer and licensed by the Council for the Regulation of Engineering in Nigeria (COREN). He holds PhD in Electrical Engineering from the Ahmadu Bello University, Zaria; MSc in Microprocessor and Control Engineering from the University of Ibadan, and BEng in Electrical and Electronic Engineering from the University of Agriculture, Makurdi. His research areas of interest include systems automation, optimization and control with applications in renewable energy systems as well as biomedical measurement and instrumentation; and his works are well-published in these areas. He is a member of the International Biometric Society, the Nigerian Institute of Electrical and Electronic Engineers, and Nigerian Society of Engineers. Dr. Emmanuel is currently the Acting Dean of the Faculty of Engineering.",
        tel: "+2348055825719",
        email: "babatunde.emmanuel@lcu.edu.ng",
    },
    {
        title: "Head, Department of Mechanical Engineering",
        image: "/Assets/Towoju.jpg",
        name: "Olumide A. Towoju, PhD, R. Engr (COREN)",
        biography: "Dr. Olumide A. Towoju is the Head, Department of Mechanical Engineering, Lead City University, Ibadan, Nigeria. He is a graduate of mechanical engineering of Ladoke Akintola University of Technology Nigeria, where he emerged as the best graduating student of mechanical engineering department of his set. He bagged a M.Sc. degree in mechanical engineering from the University of Ibadan, and has a Ph.D. also in mechanical engineering (thermo-fluids) from the University of Ibadan. He is a registered mechanical engineer with the council for the regulation of engineering in Nigeria (COREN), and a member of the Nigeria society of engineers. Dr. Towoju was the pioneer Coordinator of the Department of Mechanical Engineering, Adeleke University, Ede, between 2015 and 2016. He has many publications in peer reviewed journals and conference proceedings.",
        tel: "+2348055934207",
        email: "olumide.towoju@lcu.edu.ng",
    },
    {
        title: "Acting Head, Department of Civil Engineering",
        name: "Prof. Kolawole OGEDENGBE",
        image: "/Assets/Adebola.png",
        biography: "Engr Adebola Akolade is the acting Head, Department of Civil Engineering, Lead City University, Ibadan, Nigeria. He is an established academic and research scholar. He had his Bachelor and Master Degrees in Civil Engineering from the prestigious Ladoke Akintola University of Technology, Ogbomoso and University of Ibadan, respectively. In the past one decade, he has taught hundreds of Students at undergraduate level in Civil Engineering, Construction Materials Engineering and Foundation Engineering. He has also handled many projects as a Consultant and has featured as facilitators for Continuing Engineering Training in a number of Consulting Engineering Firms and institutions. Engr. Akolade is an expert on Structural Performance and Construction materials, with over twenty-five (25) high quality publications in reputable journals and conference proceedings. He is a member of many national and international professional bodies. He is blessed with twins.",
        tel: "+2347060961769",
        email: "akolade.adebola@lcu.edu.ng",
    },
];

export default function FacultyContact() {
    return (
        <div className="space-y-10">
            {facultyMembers.map((member, index) => (
                <article key={index} className="grid gap-6 border p-6 md:grid-cols-[280px_1fr]">
                    <div className="overflow-hidden h-3/4 ">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={420}
                            height={520}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="space-y-5 text-gray-400">
                        <div className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{member.title}</p>
                            <h2 className="text-2xl font-semibold text-slate-600">{member.name}</h2>
                        </div>
                        <p className="leading-7 text-sm text-gray-400">{member.biography}</p>
                        <div className="space-y-2 text-sm">
                            <p>
                                <span className="font-semibold text-slate-300">Tel:</span>{" "}
                                <a href={`tel:${member.tel}`} className="text-sky-400 hover:text-sky-300">
                                    {member.tel}
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold text-slate-300">Email:</span>{" "}
                                <a href={`mailto:${member.email}`} className="text-sky-400 hover:text-sky-300">
                                    {member.email}
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
