
import { X, Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

interface InfoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoOverlay = ({ isOpen, onClose }: InfoOverlayProps) => {
  if (!isOpen) return null;

  const careerInfo = [
    {
      company: "테크 스타트업",
      position: "Frontend Developer",
      period: "2022.03 - 현재",
      description: "React, TypeScript를 활용한 웹 애플리케이션 개발",
      achievements: [
        "사용자 경험 개선으로 전환율 25% 향상",
        "컴포넌트 라이브러리 구축 및 유지보수",
        "반응형 웹 디자인 구현"
      ]
    },
    {
      company: "디지털 에이전시",
      position: "Web Developer",
      period: "2020.09 - 2022.02",
      description: "다양한 클라이언트 프로젝트 개발 및 운영",
      achievements: [
        "10개 이상의 웹사이트 개발 완료",
        "성능 최적화로 로딩 속도 40% 개선",
        "크로스 브라우저 호환성 확보"
      ]
    }
  ];

  const educationInfo = [
    {
      school: "한국대학교",
      major: "컴퓨터공학과",
      period: "2016.03 - 2020.02",
      degree: "학사 졸업",
      gpa: "3.8/4.5"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h2 className="text-2xl font-bold text-primary">Profile</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 space-y-8">
            {/* 경력 정보 */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Career Experience</h3>
              </div>
              
              <div className="space-y-6">
                {careerInfo.map((career, index) => (
                  <div key={index} className="bg-secondary/30 rounded-lg p-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-primary">{career.company}</h4>
                        <p className="text-muted-foreground">{career.position}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                        <Calendar size={16} />
                        <span>{career.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{career.description}</p>
                    
                    <div className="space-y-1">
                      {career.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 학력 정보 */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4">
                {educationInfo.map((education, index) => (
                  <div key={index} className="bg-secondary/30 rounded-lg p-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-primary">{education.school}</h4>
                        <p className="text-muted-foreground">{education.major}</p>
                        <p className="text-sm text-muted-foreground mt-1">GPA: {education.gpa}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          <span>{education.period}</span>
                        </div>
                        <span className="text-sm text-primary mt-1">{education.degree}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoOverlay;
