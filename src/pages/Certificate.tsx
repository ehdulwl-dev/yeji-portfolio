
import Navigation from "@/components/Navigation";
import CertificateCard from "@/components/CertificateCard";
import certificateData from "@/data/certificateData.json";

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Certificate
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              지금까지 성장을 위해 취득한 자격증을 소개합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {certificateData.educations.map((education, index) => (
              <CertificateCard
                key={education.id}
                institution={education.institution}
                program={education.program}
                period={education.period}
                type={education.type}
                description={education.description}
                techStack={education.techStack}
                projects={education.projects}
                achievements={education.achievements}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Education;
