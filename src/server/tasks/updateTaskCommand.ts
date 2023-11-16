import { Task } from "@wasp/entities";
import { UpdateTaskCommand } from "@wasp/actions/types";
import HttpError from "@wasp/core/HttpError.js";

type UpdateTaskPayload = Pick<Task, "id" | "isDone">;

export const updateTaskCommand: UpdateTaskCommand<
  UpdateTaskPayload,
  { count: number }
> = async ({ id, isDone }, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Task.updateMany({
    where: { id, user: { id: context.user.id } },
    data: {
      isDone: isDone,
    },
  });
};
