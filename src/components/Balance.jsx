
import {useGlobalState} from '../contexts/GlobalState'

function Balance() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)
    return (
        <div>
            {JSON.stringify(amounts,null,2)}
            <h1>Balance</h1>
         
        </div>
    )
}

export default Balance