import axios from "axios";

const getAllMeals = (setMeal) => {
  axios.get("https://meal-plan-zarq.onrender.com")
  .then(({data}) => {
    console.log(data);
    setMeal(data)
  })
}

const addMeal = (title, setTitle, setMeal) => {
  axios.post("https://meal-plan-zarq.onrender.com/saveMeals", { title })
  .then(({data}) => {
    console.log(data)
    setTitle("")
    getAllMeals(setMeal)
  })
}

const editMeal = (mealId, title, setMeal, setTitle, setEditing) => {
  axios.put("https://meal-plan-zarq.onrender.com/editMeal", { _id: mealId, title })
  .then((data) => {
    console.log(data)
    setTitle("")
    setEditing(false)
    getAllMeals(setMeal)
  })
}

const deleteMeal = (_id, setMeal) => {
  axios.delete("https://meal-plan-zarq.onrender.com/deleteMeal", { data: { _id } })
  .then((data) => {
    console.log(data)
    getAllMeals(setMeal)
  })
}

export { getAllMeals, addMeal, editMeal, deleteMeal };