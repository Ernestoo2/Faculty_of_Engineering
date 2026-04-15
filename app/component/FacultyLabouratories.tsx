const facultyMembers = [
  {
    label: "E1",
    img: "/Assets/E1.jpg",
  },
  {
    label: "E2",
    img: "/Assets/E2.jpg",
  },
  {
    label: "E3",
    img: "/Assets/E3.jpg",
  },
  {
    label: "E4",
    img: "/Assets/E4.jpg",
  },
  {
    label: "E5",
    img: "/Assets/E5.jpg",
  },
]

export default function FacultyLabouratories() {
  return (
    <section>
      <article className="space-y-5">
        <h1 className="font-bold text-md">Our Laboratories and Workshop Facilities</h1>
        <p className="text-sm text-gray-400 tracking-tight flex-wrap">
          The best practice in contemporary engineering education is
          to facilitate in-depth understanding of theoretical engineering concepts
          and principles, complemented with hands-on practical application experiments.
          In keeping with this best practice, the LCU Faculty of Engineering is committed to
          systematic teaching of engineering principles, methodologies and concepts and the deployment of
          advanced laboratory technologies for practical learning activities.
        </p>
        <p className="text-sm text-gray-400 tracking-tight flex-wrap">Our state-of-the-art laboratory and workshop facilities at the various department of the Faculty include:</p>
      </article>

      <article className="mt-5">
        <h1 className="font-bold text-md">Department of Electrical and Electronic Engineering</h1>
        <ul style={{ listStyleType: "square" }} className="list-inside marker:text-gray-400 mt-5 space-y-3 text-sm font-light tracking-tighter text-gray-400">
          <li>Power and Machine Laboratory</li>
          <li>Control and Automation Laboratory</li>
          <li>Telecommunication and Electronic Laboratory</li>
          <li>Microcontroller and Embedded System Laboratory</li>
        </ul>
      </article>

      <hr className="text-gray-400 my-9" />
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-7"> 
        {facultyMembers.map((member, index) => (
          <div key={index} className="space-y-3 border border-gray-400 ">
            <div className=" h-auto">
              <img
                src={member.img}
                alt={member.label}
                width={60}
                height={60}
                className="w-full h-auto" />
            </div>
          </div>
        ))}

      </section>

    </section>
  );
}