import { GetAllUserTasksQuery } from "@wasp/queries/types";
import HttpError from "@wasp/core/HttpError.js";

export const getAllUserTasksQuery = (async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  const result = await context.entities.Task.findMany({
    where: { user: { id: context.user.id } },
    include: { category: true },
    orderBy: { id: "asc" },
  });
  return result;
}) satisfies GetAllUserTasksQuery<void>;
