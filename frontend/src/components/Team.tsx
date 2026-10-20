import React from "react";
import { Users, GraduationCap, Award } from "lucide-react";

export const Team: React.FC = () => {
  const members = [
    {
      name: "SHRUTEE BHOSALE",
      enrollment: "25511510304",
      role: "Project Developer",
    },
    {
      name: "PRIYA VISHWNATH TATHE",
      enrollment: "25511510299",
      role: "Project Developer",
    },
    {
      name: "KHUSHI KRUSHNA CHAUDHARI",
      enrollment: "24651230440",
      role: "Project Developer",
    },
    {
      name: "VAISHNAVI SUKHDEV DIVTE",
      enrollment: "24511510377",
      role: "Project Developer",
    },
  ];

  return (
    <section id="team" className="relative py-20 px-6 sm:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.15)",
              borderColor: "#1F4A35",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "#22C55E",
            }}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Project Contributors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "#F4FBF6" }}>
            Project Team Members
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#B6CCBF" }}>
            Plant Disease Detection Using AI — Developed and presented by:
          </p>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between text-left group"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-inner"
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.15)",
                      borderColor: "#1F4A35",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      color: "#22C55E",
                    }}
                  >
                    <GraduationCap className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold"
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.12)",
                      color: "#22C55E",
                      border: "1px solid #1F4A35",
                    }}
                  >
                    MEMBER 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-extrabold uppercase tracking-wide mb-1" style={{ color: "#F4FBF6" }}>
                  {m.name}
                </h3>
                <div className="text-xs font-semibold mb-3" style={{ color: "#22C55E" }}>
                  {m.role}
                </div>
              </div>

              <div
                className="pt-3 mt-2 flex items-center justify-between"
                style={{ borderTop: "1px solid #1F4A35" }}
              >
                <span className="text-[11px] font-medium" style={{ color: "#B6CCBF" }}>
                  EN.NO.
                </span>
                <span className="text-xs font-mono font-bold" style={{ color: "#F4FBF6" }}>
                  {m.enrollment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
