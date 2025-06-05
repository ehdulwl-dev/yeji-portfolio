
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";

const CareerSection = () => {
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
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 경력 정보 */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-primary">Career Experience</h2>
            </div>
            
            <div className="space-y-6">
              {careerInfo.map((career, index) => (
                <div key={index} className="bg-white dark:bg-white text-black rounded-xl p-6 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black">{career.company}</h3>
                      <p className="text-gray-700">{career.position}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2 sm:mt-0">
                      <Calendar size={16} />
                      <span>{career.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{career.description}</p>
                  
                  <div className="space-y-2">
                    {career.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 학력 정보 */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-primary">Education</h2>
            </div>
            
            <div className="space-y-6">
              {educationInfo.map((education, index) => (
                <div key={index} className="bg-white dark:bg-white text-black rounded-xl p-6 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 200 + 400}ms` }}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-black">{education.school}</h3>
                      <p className="text-gray-700">{education.major}</p>
                      <p className="text-sm text-gray-600 mt-1">GPA: {education.gpa}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar size={16} />
                        <span>{education.period}</span>
                      </div>
                      <span className="text-sm text-blue-600 mt-1 font-medium">{education.degree}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
