import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const navigate = useNavigate();  
  
  return (
    <div className="Home">
      <h1>Home page</h1>
      <button onClick={() => navigate('order-summary')}>Place order</button>
    </div>
  )
}

export default HomePage