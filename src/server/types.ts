import { Category, Task } from "@wasp/entities";

export type TaskWithCategory = Task & {
  category: Category;
};
