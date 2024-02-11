import TodoList from '../components/todo-list/todo-list'
import FormTodo from '../components/form-todo/form-todo'
import './home-page.css'

const HomePage = () => {
  return (
    <div>
        <FormTodo />
        <TodoList />
    </div>
  )
}

export default HomePage
