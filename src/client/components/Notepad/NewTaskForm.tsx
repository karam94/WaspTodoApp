import React, { FormEvent, useState } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon/Icon";
import createTaskCommand from "@wasp/actions/createTaskCommand";
import { Categories } from "@wasp/crud/Categories";

interface NewTaskFormProps {}

const NewTaskForm: React.FC<NewTaskFormProps> = () => {
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const { data: categories, isLoading, error } = Categories.getAll.useQuery();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await createTaskCommand({ description, categoryId });
      setDescription("");
    } catch (err: any) {
      window.alert("Error: " + err.message);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <form className="mt-4 flex" onSubmit={handleSubmit}>
      <input
        name="description"
        type="text"
        placeholder="Take out the trash"
        className="border p-2 rounded-md flex-grow input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        name="category"
        className="border p-2 px-4 rounded-md ml-2 select"
        onChange={(e) => setCategoryId(parseInt(e.target.value))}
      >
        <option disabled>
          Category
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-green-600 ml-2"
      >
        <Icon icon={faPen} />
      </button>
    </form>
  );
};

export default NewTaskForm;
