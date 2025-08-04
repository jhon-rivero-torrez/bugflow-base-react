import { projectRepository } from '../repositories/project.repository';
import { Project } from '../entities/project.entity';
import { UpdateProjectDto } from '../schemas/project.schema';

export async function createProject(data: {
  name: string;
  description: string;
  ownerId: string;
}): Promise<Project> {
  const project = projectRepository.create({ updatedAt: new Date(), ...data });
  return await projectRepository.save(project);
}

export async function getAllProjects(): Promise<Project[]> {
  const projects = await projectRepository
    .createQueryBuilder('project')
    .leftJoinAndSelect('project.owner', 'owner')
    .leftJoinAndSelect('project.issues', 'issue')
    .select([
      'project',
      'owner.id',
      'owner.email',
      'owner.name',
      'issue.id', // or include full issue fields if needed
      'issue.title',
      'issue.statusId', // etc. based on your needs
    ])
    .getMany();

  return projects;
}


export async function getProjectById(id: string): Promise<Project | null> {
  return await projectRepository.findOne({
    where: { id },
  });
}

export async function deleteProject(id: string): Promise<void> {
  await projectRepository.delete(id);
}

export const getProjectsByOwnerId = async (
  ownerId: string
): Promise<Project[]> => {
  return await projectRepository.find({
    where: { ownerId },
  });
};

export const updateProject = async (
  id: string,
  data: UpdateProjectDto
): Promise<Project | null> => {
  const project = await projectRepository.findOneBy({ id });
  if (!project) return null;

  projectRepository.merge(project, data);
  return await projectRepository.save(project);
};
