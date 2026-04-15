"use client";

import { useState } from "react";
import FacultyAbout from "./FacultyAbout";
import FacultyMembers from "./FacultyMembers";
import FacultyPrograms from "./FacultyPrograms";
import FacultyContact from "./FacultyContact";
import FacultyLabouratories from "./FacultyLabouratories";

const tabs = [
    { id: "about", label: "About the Faculty", component: <FacultyAbout /> },
    { id: "members", label: "Faculty Members of Staff", component: <FacultyMembers /> },
    { id: "programs", label: "Programme", component: <FacultyPrograms /> },
    { id: "contact", label: "Contact of HODs", component: <FacultyContact /> },
    { id: "labouratories", label: "Labouratories and Facilities", component: <FacultyLabouratories /> }
];

export default function FacultyTabs() {
    const [activeTab, setActiveTab] = useState("about");
    const active = tabs.find((tab) => tab.id === activeTab) || tabs[0];

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap border-slate-200 bg-slate-100 shadow-sm">
                {tabs.map((tab) => {
                    const isActive = tab.id === activeTab;
                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 min-w-45 px-4 py-3 text-left text-sm font-semibold transition-all duration-150 ${isActive
                                ? "bg-white border-t-2  border-sky-600 text-slate-900 shadow-inner"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-orange-900"
                                }`}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <div className=" bg-white p-6">
                {active.component}
            </div>
        </div>
    );
}
