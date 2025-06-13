
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";

const CareerSection = () => {
  const careerInfo = [
    {
      company: "(주)하이지노",
      position: "제조DX부서 대리/책임연구원",
      period: "2020.08 - 현재 (4년 8개월)",
      description: "Spring Boot F/W 기반 MES 웹 시스템 개발 및 운영 관리",
      achievements: [
        "자동차 부품, 레이저 가공, 2차전지 반도체 등 다양한 제조 공정 대상 구축",
        "컴포넌트 라이브러리 구축 및 유지보수",
        "PDA 기반 생산 재고 관리 기능 개발 및 연동",
        "SQL 데이터베이스 구축 경험"
      ]
    }
  ];

  const educationInfo = [
   {
      school: "성균관대학교 일반대학원",
      major: "스마트팩토리융합학과",
      period: "2022.08 - 2025.02",
      degree: "석사 졸업",
      gpa: "4.05 / 4.5",
      thesis: "MfgCNC-Ark: CNC 제조 공정에서 Mean Teacher 구조의 LSTM-AE 기반 범용 이상 탐지에 관한 연구",
      research1: "HVLV-Motor-KC: Production Efficiency of HVLV Motor Classification Using K-means Clustering / WSEAS Transactions on Information Science and Applications / SCOPUS / 14 October 2024",
      research2: "Designing a Cloud-Based MES-SaaS Platform Model in Precision Machining / WSEAS Transactions on Computer Research / SCOPUS / 21 September 2023"
    },
    {
      school: "학점은행제대학교",
      major: "정보통신공학과",
      period: "2020.07 - 2021.02",
      degree: "공학사 졸업",
      gpa: "3.67 / 4.5"
    },
    {
      school: "명지전문대학",
      major: "정보통신공학",
      period: "2017.03 - 2020.02",
      degree: "전문공학사 졸업",
      gpa: "3.329 / 4.5",
      thesis: " IoT 기반 자동차 스마트 키 애플리케이션"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 경력 정보 */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-primary">Career Experience</h2>
            </div>
            
            <div className="space-y-6">
              {careerInfo.map((career, index) => (
                <div key={index} className="bg-white dark:bg-white text-black rounded-xl p-6 shadow-lg animate-fade-in">
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
                <div key={index} className="bg-gray-50 dark:bg-white text-black rounded-xl p-6 shadow-lg animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{education.school}</h3>
                      <p className="text-sm text-gray-700">{education.major}</p>
                      <p className="text-xs text-gray-500 mt-1">학점: {education.gpa}</p>
                    
                      
                      {(education.thesis || education.research1 || education.research2) && (
                        <details className="mt-2">
                          <summary className="cursor-pointer text-sm text-blue-600">세부 연구내용 보기</summary>
                          <div className="mt-2 space-y-1 text-sm text-gray-600">
                            {education.thesis && <p>학위 논문: {education.thesis}</p>}
                            {education.research1 && <p>• {education.research1}</p>}
                            {education.research2 && <p>• {education.research2}</p>}
                          </div>
                        </details>
                      )}
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0 min-w-[0px] text-right whitespace-nowrap">
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
