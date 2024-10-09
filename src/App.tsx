import LoginPage from "./pages/LoginPage"
import { Routes,Route} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import SavingsPage from "./pages/SavingsPage"
import MonthlyExpenditurePage from "./pages/MonthlyExpenditurePage"
import Layout from "./pages/Layout"
import SettingsPage from "./pages/SettingsPage"


function App() {

  return (
    <main className='h-screen w-full bg-purple-50 overflow-x-hidden'>
      <Routes>
        <Route element={
         <Layout></Layout>
        }>
        <Route index element={<HomePage></HomePage>}/>
        <Route path="/savings" element={<SavingsPage></SavingsPage>}/>
        <Route path="/monthly-expenditure" element={<MonthlyExpenditurePage></MonthlyExpenditurePage>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        </Route>

         {/* outside layout */}

        <Route path="/login" element={<LoginPage></LoginPage>}/>
        <Route path="/register" element={<RegisterPage></RegisterPage>}/>


      </Routes>
    </main>
  )
}

export default App
