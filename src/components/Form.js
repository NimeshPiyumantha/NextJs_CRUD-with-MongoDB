import UpdateUserForm from "./updateUserForm";
import AddUserForm from "./addUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);

  return (
    <div className="container mx-auto py-5  bg-slate-200 rounded-lg my-1 ">
      <div className=" flex justify-around px-6">
        {formId
          ? UpdateUserForm({ formId, formData, setFormData })
          : AddUserForm({ formData, setFormData })}
      </div>
    </div>
  );
}
