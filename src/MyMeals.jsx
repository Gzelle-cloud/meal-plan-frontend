import { MdEdit, MdDelete } from "react-icons/md";

const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
  return (
    <div>
      <p>{ text }</p>
      <MdEdit className="icon" onClick = { updatingInInput }/>
      <MdDelete className="icon" onClick = { deleteMeal }/>
    </div>
  )
}

export default MyMeals;
