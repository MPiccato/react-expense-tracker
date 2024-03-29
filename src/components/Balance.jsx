
import {useGlobalState} from '../contexts/GlobalState'

function Balance() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc,items) => (acc += items), 0)
    return (
        <div>
            
            <h3>Balance</h3>
            <h1>{total}</h1>

        </div>
    )
}

export default Balance