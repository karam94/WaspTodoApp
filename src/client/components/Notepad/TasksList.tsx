import { TaskComponent } from "./TaskComponent";
import { useQuery } from "@wasp/queries";
import getAllUserTasksQuery from "@wasp/queries/getAllUserTasksQuery";

export const TasksList = () => {
  const { data: tasks, isLoading } = useQuery(getAllUserTasksQuery);

  if (!tasks?.length) return <div className="text-gray-500">No tasks</div>;

  return (
    <div className="mb-4">
      {isLoading && <p className="text-blue-500">Loading...</p>}

      {tasks.map((task, index) => (
        <TaskComponent task={task} key={index} />
      ))}
    </div>
  );
};
