import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserTasks,
  updateStatus,
} from "../../redux/features/tasks/tasksSlice";
import TasksDetailsModal from "./TasksDetailsModal";

const MyTasks = () => {
  const { tasks, userTasks } = useSelector((state) => state.tasksSlice);
  const { name: userName } = useSelector((state) => state.userSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const dispatch = useDispatch();

  const handleTasks = (id) => {
    setIsOpen(!isOpen);
    setTaskId(id);
  };

  useEffect(() => {
    dispatch(setUserTasks(userName));
  }, [userName, dispatch, tasks]);

  return (
    <div>
      <TasksDetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        taskId={taskId}
      />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userTasks?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleTasks(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: item.id, status: "completed" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
