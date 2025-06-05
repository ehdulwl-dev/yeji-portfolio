
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce 플랫폼",
      description: "React와 TypeScript를 사용하여 구축한 현대적인 온라인 쇼핑몰입니다. 사용자 친화적인 인터페이스와 효율적인 상태 관리를 통해 매끄러운 쇼핑 경험을 제공합니다.",
      role: "Frontend 개발 담당, UI/UX 디자인 구현, 상태 관리 및 API 연동",
      features: [
        "반응형 웹 디자인 구현",
        "장바구니 및 결제 시스템 개발",
        "상품 검색 및 필터링 기능",
        "사용자 인증 및 회원 관리",
        "관리자 대시보드 구축"
      ],
      githubUrl: "https://github.com/doyeji/ecommerce-platform",
      blogUrl: "https://doyeji.tistory.com/ecommerce-project"
    },
    {
      title: "날씨 대시보드",
      description: "실시간 날씨 정보를 제공하는 인터랙티브 대시보드입니다. 다양한 지역의 날씨 데이터를 시각화하고 사용자가 쉽게 확인할 수 있도록 구현했습니다.",
      role: "전체 개발 담당, API 연동 및 데이터 시각화 구현",
      features: [
        "실시간 날씨 데이터 API 연동",
        "지역별 날씨 정보 검색",
        "차트를 활용한 데이터 시각화",
        "즐겨찾기 지역 관리",
        "다크/라이트 테마 지원"
      ],
      githubUrl: "https://github.com/doyeji/weather-dashboard",
      blogUrl: "https://doyeji.tistory.com/weather-dashboard"
    },
    {
      title: "태스크 관리 앱",
      description: "팀 프로젝트를 효율적으로 관리할 수 있는 태스크 관리 애플리케이션입니다. 드래그 앤 드롭 기능과 실시간 협업을 지원합니다.",
      role: "Frontend 개발 리드, 실시간 기능 구현 및 사용자 경험 최적화",
      features: [
        "드래그 앤 드롭으로 태스크 관리",
        "실시간 협업 및 댓글 시스템",
        "프로젝트별 대시보드",
        "팀원 권한 관리",
        "진행 상황 추적 및 리포트"
      ],
      githubUrl: "https://github.com/doyeji/task-manager",
      blogUrl: "https://doyeji.tistory.com/task-manager-app"
    },
    {
      title: "개인 블로그 사이트",
      description: "개발 경험과 학습 내용을 공유하는 개인 블로그입니다. Markdown 에디터와 SEO 최적화를 적용하여 구축했습니다.",
      role: "전체 개발 담당, SEO 최적화 및 성능 튜닝",
      features: [
        "Markdown 기반 포스트 작성",
        "태그 및 카테고리 시스템",
        "검색 기능 구현",
        "SEO 최적화 적용",
        "방문자 통계 대시보드"
      ],
      githubUrl: "https://github.com/doyeji/personal-blog",
      blogUrl: "https://doyeji.tistory.com/blog-development"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              제가 진행한 주요 프로젝트들을 소개합니다. 각 프로젝트를 통해 다양한 기술을 학습하고 실무 경험을 쌓아왔습니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                role={project.role}
                features={project.features}
                githubUrl={project.githubUrl}
                blogUrl={project.blogUrl}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
