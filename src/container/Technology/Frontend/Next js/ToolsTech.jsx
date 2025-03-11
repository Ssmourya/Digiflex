"use client";

import {
  Circle,
  Triangle,
  Atom,
  Server,
  FileText,
  Database,
  Network,
  FlaskConical,
} from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";

const techStack = [
  { name: "Next.js", Icon: Circle },
  { name: "Vercel", Icon: Triangle },
  { name: "React.js", Icon: Atom },
  { name: "Node.js", Icon: Server },
  { name: "TypeScript", Icon: FileText },
  { name: "Sanity", Icon: Database },
  { name: "GraphQL", Icon: Network },
  { name: "Jest", Icon: FlaskConical },
];

export default function TechStack() {
  return (
    <WrapperContainer>
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">TECHNOLOGY STACK</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-blue-800 rounded-lg p-6 hover:bg-blue-700 transition duration-300"
            >
              <tech.Icon size={50} />
              <p className="mt-4 text-lg">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
