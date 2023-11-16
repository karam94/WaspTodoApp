import { Task } from "@wasp/entities";
import { DeleteTaskCommand } from "@wasp/actions/types";
import HttpError from "@wasp/core/HttpError.js";

type DeleteTaskPayload = Pick<Task, "id">;

export const deleteTaskCommand: DeleteTaskCommand<
  DeleteTaskPayload,
  { count: number }
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Task.deleteMany({
    where: {
      id: args.id,
      user: { id: context.user.id },
    },
  });
};
