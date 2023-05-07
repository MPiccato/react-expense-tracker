import {useState} from "react";
import { useGlobalState } from "../../contexts/GlobalState";


function TransaccionForm() {

    const {addTransaction} = useGlobalState()

    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: + amount
        })
        setDescription('');
        setAmount(0)

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingresa una descripción" 
                    onChange={(e) => setDescription(e.target.value)}    
                />
                <input 
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button>
                    Agregar Transacción
                </button>
            </form>
        </div>
    )
}

export default TransaccionForm