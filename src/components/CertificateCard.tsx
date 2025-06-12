
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface CertificateCardProps {
  institution: string;
  period: string;
  type: string;
  delay?: number;
}

const EducationCard = ({
  institution,
  period,
  type,
  delay = 0
}: CertificateCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-white text-black border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start">
        <div>
          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200 mb-2">{type}</Badge>
          <h3 className="text-xl font-bold text-black">{institution}</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{period} 취득</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
