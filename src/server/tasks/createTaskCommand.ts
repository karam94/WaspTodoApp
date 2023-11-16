import { Task } from "@wasp/entities";
import { CreateTaskCommand } from "@wasp/actions/types";
import HttpError from "@wasp/core/HttpError.js";

type CreateTaskPayload = Pick<Task, "description" | "categoryId">;

export const createTaskCommand: CreateTaskCommand<
  CreateTaskPayload,
  Task
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Task.create({
    data: {
      description: args.description,
      user: { connect: { id: context.user.id } },
      category: { connect: { id: args.categoryId } },
    },
  });
};
