import { GlobalProvider } from "./contexts/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransaccionForm from "./components/transactions/TransaccionForm";
import TransactionsList from "./components/transactions/TransactionsList";

export default function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <Balance/>
      <TransaccionForm/>
      <TransactionsList/>
    
    </GlobalProvider>
    
  )
}

