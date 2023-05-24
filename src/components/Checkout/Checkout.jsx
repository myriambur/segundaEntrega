import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useForm } from "../../hooks/useForm"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import './Checkout.css'

const Checkout = () => {

  const { cart, totalPrice, clearCart } = useContext(CartContext)


  const { form, handleInputChange, reset } = useForm({
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmit = (e) => {

    //const [orderId, SetOrderID] = useState('')

    e.preventDefault()
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')

    const newOrderObj = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      items: cart,
      total: totalPrice(),
      date: new Date()
    }

    console.log(newOrderObj)

    addDoc(ordersCollection, newOrderObj)
      .then(({id}) => console.log(id))
      .catch(error => console.error(error))

    reset()
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>Orden de compra</h2>
      <input
        placeholder='Nombre del comprador..'
        name='name'
        onChange={handleInputChange}
        type='text'
      />
      <input
        placeholder='Telefono para contacto..'
        name='phone'
        onChange={handleInputChange}
      />
      <input
        placeholder='Correo de contacto..'
        name='email'
        onChange={handleInputChange}
      />
      <button type='submit'>Generar orden de compra</button>
    </form>
  )
}
export default Checkout