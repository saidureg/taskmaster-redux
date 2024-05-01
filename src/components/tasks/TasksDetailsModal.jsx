import { useSelector } from "react-redux";
import Modal from "../ui/Modal";
import PropTypes from "prop-types";

const TasksDetailsModal = ({ isOpen, setIsOpen, taskId }) => {
  const task = useSelector((state) =>
    state.tasksSlice.tasks.find((task) => task.id === taskId)
  );

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
        {task?.description}
      </Modal>
    </div>
  );
};

TasksDetailsModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  taskId: PropTypes.number,
};

export default TasksDetailsModal;
