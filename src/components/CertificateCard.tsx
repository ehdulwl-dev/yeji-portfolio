
import { Badge } from "@/components/ui/badge";

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
      className="bg-gray-50 dark:bg-white text-black border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start">
        <div>
          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200 mb-4">{type}</Badge>
          <h3 className="text-md sm:text-lg font-semibold text-blue-900">{institution}</h3>
        </div>
        <div className="flex items-center whitespace-nowrap text-sm text-gray-600">
          <span>{period} 취득</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
