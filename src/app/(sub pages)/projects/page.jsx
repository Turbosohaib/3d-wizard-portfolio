import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects/Index";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="w-full fixed top-0 left-0 h-full object-cover object-center opacity-50"
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
