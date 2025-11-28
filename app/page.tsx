import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "포트폴리오 SNS 만들기",
      description: "Next.js와 Tailwind CSS로 개인 SNS 스타일 포트폴리오 제작",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      title: "UI 컴포넌트 제작",
      description: "React 기반 UI 컴포넌트 모음 개발",
      image: "https://picsum.photos/600/400?random=2",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}
