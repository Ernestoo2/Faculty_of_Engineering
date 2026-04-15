type FacultyMember = {
    name: string;
    designation: string;
    qualifications: string;
};

const facultyMembers: FacultyMember[] = [
    {
        name: "Prof. Kolawole OGEDENGBE",
        designation: "Professor (Contract)",
        qualifications: "B.Sc. (Ibadan), M.Sc. (England), M.Phil (France), Ph.D (Ibadan)",
    },
    {
        name: "Engr. Prof. David O. ABORISADE",
        designation: "Visiting Professor",
        qualifications: "B.Eng (Owerri), M.Eng., Ph.D (Ilorin)",
    },
    {
        name: "Dr. B.S. EMMANUEL",
        designation: "Senior Lecturer",
        qualifications: "B.Eng (Makurdi), M.Sc. (Ibadan), Ph.D (Zaria)",
    },
    {
        name: "Dr. Olumide A. TOWOJU",
        designation: "Senior Lecturer",
        qualifications: "B.Tech. (Lautech), M.Sc. (Ibadan), Ph.D (Ibadan)",
    },
    {
        name: "Dr. S.O. ENOCHOGHENE",
        designation: "Lecturer I",
        qualifications: "B.Eng (Ekpoma), M.Sc., Ph.D (Ife)",
    },
    {
        name: "Engr. (Dr.) Olusayo A. AJEIGBE",
        designation: "Lecturer I",
        qualifications: "B.Tech. (Lautech), M.Sc. (Ibadan), D.Eng. (South Africa)",
    },
    {
        name: "Engr. (Dr.) Oluwaseun A. ADETAYO",
        designation: "Senior Lecturer",
        qualifications: "B.Eng. (Ondo), M.Sc., Ph.D (Ibadan)",
    },
    {
        name: "Engr. (Dr.) Taiwo I. OYEDEMI",
        designation: "Senior Lecturer (Sabbatical)",
        qualifications: "B.Sc., M.Sc., Ph.D (Ibadan)",
    },
    {
        name: "Engr. A. S. AKOLADE",
        designation: "Senior Lecturer",
        qualifications: "B.Tech (LAUTECH), M.Sc. (Ibadan)",
    },
    {
        name: "Engr. Ayotunde O. FASINA",
        designation: "Principal Technologist",
        qualifications: "B.Tech. (Lautech), COREN",
    },
    {
        name: "Engr. Jacob K. ADEBAYO",
        designation: "Lecturer II",
        qualifications: "B.Sc. (Ogun State), M.Sc. (Ibadan)",
    },
    {
        name: "Engr. John A. ADEYEMI",
        designation: "Lecturer II",
        qualifications: "B.Tech. (Oyo), M.Eng. (Kwara)",
    },
    {
        name: "Engr. O. S. OLADEJI",
        designation: "Lecturer I",
        qualifications: "B.Tech (LAUTECH), M.Sc. (Ibadan)",
    },
    {
        name: "Engr. Olusegun B. ADESINA",
        designation: "Lecturer II",
        qualifications: "B.Sc., M.Sc. (Lagos State)",
    },
    {
        name: "Engr. Praise A. ALLI",
        designation: "Lecturer I",
        qualifications: "OND (Ibadan), B.Tech. (Lautech), M.Sc. (Ibadan)",
    },
    {
        name: "Engr. S. A. ADEFISOYE",
        designation: "Lecturer II",
        qualifications: "B.Sc. (Ibadan), M.Sc. (Ibadan), Ph.D (Ibadan)",
    },
    {
        name: "Miss Rebecca F. ADEPOJU",
        designation: "Technologist II",
        qualifications: "ND, HND (Ibadan), PGD (Akure)",
    },
    {
        name: "Mr. A. ALAO",
        designation: "Asst. Tech. Officer",
        qualifications: "N.C.E (Ilorin)",
    },
    {
        name: "Mr. A. Afeez FAKUNLE",
        designation: "Graduate Assistant",
        qualifications: "B.Sc. (OAU)",
    },
    {
        name: "Mr. Adeolu J. OLAWALE",
        designation: "Lecturer II",
        qualifications: "B.Tech. (Lautech), M.Sc. (Ibadan)",
    },
    {
        name: "Mr. Oluwamayowa D. OLASUPO",
        designation: "Technologist II",
        qualifications: "OND, HND (Osun State), PGD (Abuja)",
    },
    {
        name: "Mr. Omogbolade L. ADEPITAN",
        designation: "Graduate Assistant",
        qualifications: "B.Sc. (Lasus)",
    },
    {
        name: "Mr. R. E. EGBE",
        designation: "Technologist II",
        qualifications: "OND, HND (Ibadan)",
    },
    {
        name: "Mr. S. K. EKUN",
        designation: "Assist. Lecturer",
        qualifications: "B.Sc., M.Sc. (Ibadan)",
    },
    {
        name: "Mr. S. O. YEROKUN",
        designation: "Technologist II",
        qualifications: "OND, HND (Ibadan)",
    },
    {
        name: "Mr. Samson O. AYANLADE",
        designation: "Lecturer II",
        qualifications: "B.Tech. (Lautech), M.Sc. (OAU)",
    },
    {
        name: "Mr. T. A. ADEYI",
        designation: "Lecturer II",
        qualifications: "B.Eng (Akure), M.Sc. (Ibadan)",
    },
    {
        name: "Mrs. A. O. FASASI-ALESHINLOYE",
        designation: "Lecturer II",
        qualifications: "B.Tech. (Lautech), M.Sc. (Ibadan)",
    },
    {
        name: "Mrs. Abibat Y. ADEBIYI",
        designation: "Lecturer II",
        qualifications: "ND, HND, B.Sc., M.Sc. (Ibadan)",
    },
    {
        name: "Ms I. D. ODUNEWU",
        designation: "Technologist II",
        qualifications: "HND (Ibadan)",
    },
];

export default function FacultyMembers() {
    return (
        <div className="border border-gray-400 overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="border-b-2 border-blue-600 text-left text-xs uppercase tracking-[0.2em] text-gray-400">
                        <th className="px-4 w-16 py-3">S/N</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Designation</th>
                        <th className="px-4 py-3">Qualifications</th>
                    </tr>
                </thead>
                <tbody>
                    {facultyMembers.map((member, index) => (
                        <tr key={index} className="border-b border-slate-800 ">
                            <td className="px-4 py-3 border-r font-medium text-gray-400">{index + 1}.</td>
                            <td className="px-4 py-3 border-r text-sm text-gray-400">{member.name || "-"}</td>
                            <td className="px-4 py-3 border-r text-sm text-gray-400">{member.designation || "-"}</td>
                            <td className="px-4 py-3 text-sm text-gray-400 whitespace-normal">{member.qualifications || "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
