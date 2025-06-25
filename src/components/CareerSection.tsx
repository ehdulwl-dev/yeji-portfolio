import { Briefcase, GraduationCap, Calendar, BookCheck } from "lucide-react";

const CareerSection = () => {
  const careerInfo = [
    {
      company: "주식회사 하이지노",
      position: "제조DX부서 대리 / 책임연구원",
      period: "2020.08 - 현재 (4년 8개월)",
      description: "Spring Boot 기반 스마트팩토리 MES 웹 시스템 개발 및 운영",
      achievements: [
        "다양한 제조 공정(MES/POP) 특화 웹 시스템 설계 및 구축",
        "Spring Boot 기반 벡엔드 API 개발 및 프로세스 설계",
        "MySQL, MSSQL, PostgreSQL 등 오픈소스 DB 구축 및 운영",
        "JavaScript, jQuery, ag-Grid, DevExpress 등 활용한 UI 구성 및 고도화",
        "고객사와의 협업을 통해 요구사항을 파악하고, 커뮤니케이션 중심의 프로젝트 리딩(PL) 경험"
      ],
    },
  ];

  const educationInfo = [
    {
      school: "성균관대학교 일반대학원",
      major: "스마트팩토리융합학과",
      period: "2022.08 - 2025.02",
      degree: "석사 졸업",
      gpa: "4.05 / 4.5",
      thesis:
        "MfgCNC-Ark: CNC 제조 공정에서 Mean Teacher 구조의 LSTM-AE 기반 범용 이상 탐지에 관한 연구",
      research1:
        "HVLV-Motor-KC: Production Efficiency of HVLV Motor Classification Using K-means Clustering / WSEAS Transactions on Information Science and Applications / SCOPUS / 14 October 2024",
      research2:
        "Designing a Cloud-Based MES-SaaS Platform Model in Precision Machining / WSEAS Transactions on Computer Research / SCOPUS / 21 September 2023",
    },
    {
      school: "학점은행제대학교",
      major: "정보통신공학과",
      period: "2020.07 - 2021.02",
      degree: "공학사 졸업",
      gpa: "3.67 / 4.5",
    },
    {
      school: "명지전문대학",
      major: "정보통신공학",
      period: "2017.03 - 2020.02",
      degree: "전문공학사 졸업",
      gpa: "3.39 / 4.5",
      thesis: "IoT 기반 자동차 스마트 키 애플리케이션",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 경력 정보 */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-primary">
                Career Experience
              </h2>
            </div>

            <div className="space-y-6">
              {careerInfo.map((career, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-white text-black rounded-xl p-6 shadow-lg animate-fade-in"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {career.company}
                      </h3>
                      <p className="text-gray-800 text-base font-medium pt-2">
                        {career.position}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-black mt-2 sm:mt-0">
                      <Calendar size={16} />
                      <span>{career.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-800 text-base mb-4">
                    {career.description}
                  </p>
                  <div className="space-y-2 bg-blue-50 p-2">
                    {career.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-800 text-sm">
                          {achievement}
                        </span>
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
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-white text-black rounded-xl p-6 shadow-lg animate-fade-in"
                >


                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {education.school}
                      </h3>
                      <p className="text-base text-gray-800 font-medium pt-2">
                        {education.major}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        학점: {education.gpa}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-black mt-2 sm:mt-0">
                      <Calendar size={16} />
                        <span>{education.period}</span>
                         <span className="text-sm text-blue-800 font-medium">
                          {education.degree}
                        </span>
                      </div>
                    </div>
                    {(education.thesis ||
                      education.research1 ||
                      education.research2) && (
                      <details className="mt-2 group">
                        <summary className="flex items-center cursor-pointer text-sm text-blue-800 hover:underline">
                          <span>세부 연구내용 보기</span>
                          <svg
                            className="ml-1 w-4 h-4 transform transition-transform group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="mt-2 p-3 bg-blue-50 rounded-md space-y-1 text-sm text-gray-700">
                          {education.thesis && (
                            <p>📌 학위 논문:<br></br> {education.thesis}</p>
                          )}
                          
                          {education.research1 && (
                            <p>• {education.research1}</p>
                          )}
                          {education.research2 && (
                            <p>• {education.research2}</p>
                          )}
                        </div>
                      </details>

                    )}
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