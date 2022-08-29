import { useNavigate } from "react-router-dom"

const OrderSummary = () => {
  
    const navigate = useNavigate();
  
    return (
    <div className="Order">
        <h1>
            Order summary
        </h1>
        <p>Order confirmed!</p>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default OrderSummary