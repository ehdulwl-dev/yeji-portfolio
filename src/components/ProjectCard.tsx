
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  features: string[];
  githubUrl?: string;
  blogUrl?: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  role, 
  features, 
  githubUrl, 
  blogUrl,
  delay = 0 
}: ProjectCardProps) => {
  return (
    <div 
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-primary mb-2">담당 역할</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-primary mb-2">주요 기능</h4>
        <div className="space-y-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">GitHub</span>
          </a>
        )}
        
        {blogUrl && (
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Blog</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
