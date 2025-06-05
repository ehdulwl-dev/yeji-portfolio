
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
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-1">{institution}</h3>
          <p className="text-lg text-muted-foreground mb-2">{program}</p>
          <Badge variant="outline" className="text-xs">{type}</Badge>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar size={16} />
          <span>{period}</span>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      {/* Tech Stack */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-primary mb-2">학습 기술</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Projects */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-primary mb-2">프로젝트</h4>
        <div className="space-y-1">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-muted-foreground">{project}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Achievements */}
      <div>
        <h4 className="text-sm font-medium text-primary mb-2 flex items-center space-x-2">
          <Award size={16} />
          <span>성과</span>
        </h4>
        <div className="space-y-1">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-muted-foreground">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
