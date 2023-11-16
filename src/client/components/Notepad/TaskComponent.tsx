import updateTaskCommand from "@wasp/actions/updateTaskCommand";
import { ChangeEvent } from "react";
import { Icon } from "../Icon/Icon";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MouseEvent } from "react";
import deleteTaskCommand from "@wasp/actions/deleteTaskCommand";
import getAllUserTasksQuery from "@wasp/queries/getAllUserTasksQuery";

type TaskComponentProps = {
  task: Awaited<ReturnType<typeof getAllUserTasksQuery>>[0];
};

export const TaskComponent: React.FC<TaskComponentProps> = ({ task }) => {
  const handleIsDoneChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      await updateTaskCommand({
        id: task.id,
        isDone: event.target.checked,
      });
    } catch (error: any) {
      window.alert("Error while updating task: " + error.message);
    }
  };

  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteTaskCommand({
        id: task.id,
      });

      window.alert("Task has been deleted!");
    } catch (error: any) {
      window.alert("Error while deleting task: " + error.message);
    }
  };

  return (
    <div className="flex items-center mb-2 border-b border-black py-2">
      <input
        type="checkbox"
        id={String(task.id)}
        checked={task.isDone}
        onChange={handleIsDoneChange}
        className="mr-4 checkbox"
      />
      <span className={task.isDone ? "line-through text-black" : "text-black"}>
        {task.description} ({task.category.name})
      </span>
      <div className="ml-auto">
        <button
          className="bg-red-500 py-1 px-2 rounded-md"
          id={String(task.id)}
          onClick={handleDelete}
        >
          <Icon icon={faTrash} className="text-white" />
        </button>
      </div>
    </div>
  );
};
