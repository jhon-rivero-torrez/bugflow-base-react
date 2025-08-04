import { AppDataSource } from "../config/typeorm.config";
import { Issue } from "../entities/issue.entity";

export const issueRepository = AppDataSource.getRepository(Issue);
