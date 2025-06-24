
import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp  } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  blogUrl?: string;
  thumbnail?: string;
  achieve?: string;
  delay?: number;
  isOpen: boolean;
  onToggle: () => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  role, 
  features, 
  techStack,
  githubUrl, 
  blogUrl,
  thumbnail,
  achieve,
  delay = 0,
  isOpen,
  onToggle
}: ProjectCardProps) => {

  return (
    <div 
      className="bg-white dark:bg-white text-black border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
    >
     
      <div className="h-48 bg-gray-100 overflow-hidden">
        {/* Thumbnail */}
        {thumbnail && (
          <img
            src={`${thumbnail}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    

    {isOpen && (
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-3">{title}</h3>

        <p className="text-gray-800 text-sm mb-3 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mt-4 mb-2">담당 역할</h4>
          <p className="text-sm text-gray-700">{role}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mt-4 mb-2">주요 기능</h4>
          <div className="space-y-1 list-disc list-inside text-sm text-gray-700">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        {achieve && (
           <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mt-4 mb-2">성과</h4>
            <p className="text-sm text-gray-700">{achieve}</p>
          </div>
        )}
        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-black mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-lg transition-colors flex-1 justify-center"
            >
              <Github size={16} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}
          
          {blogUrl && (
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white hover:bg-blue-500 rounded-lg transition-colors flex-1 justify-center"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Blog</span>
            </a>
          )}
        </div>
      </div>
       )}
    </div>
  );
};

export default ProjectCard;
