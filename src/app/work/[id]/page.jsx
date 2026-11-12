import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ProjectDetail from "../../../components/ProjectDetail";
import Footer from "../../../components/Footer";

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return { title: `${project.name} | Iván Gómez`, description: project.description.es };
}

export default async function WorkDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return <><ProjectDetail project={project} /><Footer /></>;
}
