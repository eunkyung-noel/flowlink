interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>2025-11-28</span>
          <a href="#" className="underline">
            상세보기
          </a>
        </div>
      </div>
    </article>
  );
}
