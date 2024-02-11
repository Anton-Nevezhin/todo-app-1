import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick = {() => navigate('/')}>Главная страница</button>
      <button onClick = {() => navigate('/post')}>Посты</button>
    </div>
  )
}

export default Navbar
