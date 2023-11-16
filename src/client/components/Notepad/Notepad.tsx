import React from "react";
import { TasksList } from "./TasksList";
import NewTaskForm from "./NewTaskForm";
import { User } from "@wasp/entities";
import { useUser } from "../../hooks/useUser";

interface NotepadProps {
  user: User;
}

const Notepad: React.FC<NotepadProps> = ({ user }) => {
  const { formattedUsername } = useUser(user);

  return (
    <div className="bg-amber-300 p-6 rounded-lg shadow-lg mt-4 w-full max-w-lg">
      <h1 className="text-3xl font-script text-center mb-4 text-black">
        {formattedUsername}'s things to do:
      </h1>

      <TasksList />
      <NewTaskForm />
    </div>
  );
};

export default Notepad;
