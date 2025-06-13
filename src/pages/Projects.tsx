
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projectsData.json";

const Projects = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isAllOpen, setIsAllOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              제가 진행한 주요 프로젝트들을 소개합니다. <br></br>각 프로젝트를 통해 다양한 기술을 학습하고 실무 경험을 쌓아왔습니다.
            </p>
          </div>
          
          <div className="flex justify-end mb-6">
            <button
                onClick={() => {
                  if (isAllOpen) {
                    setOpenIndex(null);       // 전체 닫기
                    setIsAllOpen(false);
                  } else {
                    setOpenIndex(-1);         // 전체 열기: -1은 특별한 openIndex로 처리
                    setIsAllOpen(true);
                  }
                }}
                className="text-sm text-blue-600 hover:underline transition mr-2"
              >
               {isAllOpen ? (
                <ChevronUp size={16} className="inline-block mr-1" />
              ) : (
                <ChevronDown size={16} className="inline-block mr-1" />
              )}
              {isAllOpen ? "간략히 보기" : "상세 보기"}
              </button>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projectsData.projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                role={project.role}
                features={project.features}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                blogUrl={project.blogUrl}
                thumbnail={project.thumbnail}
                delay={index * 100}
                isOpen={isAllOpen || openIndex === index}  // 👈 전체 보기 or 특정 인덱스만 열기
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
