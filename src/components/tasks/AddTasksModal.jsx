import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import PropTypes from "prop-types";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    setIsOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="date">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="assignedTo">
            Assign To
          </label>
          <select
            id="assignedTo"
            {...register("assignedTo")}
            className="w-full rounded-md"
          >
            <option value="Saidur Rahaman">Saidur Rahaman</option>
            <option value="Yasin Miah">Yasin Miah</option>
            <option value="Zahidul Hasan">Zahidul Hasan</option>
            <option value="Mahbubullah">Mahbubullah</option>
            <option value="Ismail Hossain">Ismail Hossain</option>
            <option value="Forhad Khan">Forhad Khan</option>
            <option value="Masud Hasan">Masud Hasan</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            {...register("priority")}
            className="w-full rounded-md"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

AddTasksModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default AddTasksModal;
