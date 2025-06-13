
import { Badge } from "@/components/ui/badge";
import { Calendar, Award } from "lucide-react";

interface EducationCardProps {
  institution: string;
  program: string;
  period: string;
  type: string;
  description: string;
  techStack: string[];
  projects: string[];
  achievements: string[];
  delay?: number;
}

const EducationCard = ({
  institution,
  program,
  period,
  type,
  description,
  techStack,
  projects,
  achievements,
  delay = 0
}: EducationCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-white text-black border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-black mb-1">{institution}</h3>
          <p className="text-lg text-gray-700 mb-2">{program}</p>
          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">{type}</Badge>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{period}</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      
      {/* Tech Stack */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-black mb-2">학습 기술</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Projects */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-black mb-2">프로젝트</h4>
        <div className="space-y-1">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{project}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Achievements */}
      <div>
        <h4 className="text-sm font-semibold text-black mb-2 flex items-center space-x-2">
          <Award size={16} />
          <span>성과</span>
        </h4>
        <div className="space-y-1">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
