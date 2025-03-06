import { MdEdit, MdDelete } from "react-icons/md";

const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
  return (
    <div>
      <p>{ text }</p>
      <MdEdit onClick = { updatingInInput }/>
      <MdDelete onClick = { deleteMeal }/>
    </div>
  )
}

export default MyMeals;