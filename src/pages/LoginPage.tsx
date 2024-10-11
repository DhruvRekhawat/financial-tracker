import Login from '@/components/molecules/Login'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    

  return (
    <div className='w-full h-screen flex justify-center items-center'>
    
    <Card className='w-2/3 max-w-[400px]' >
    <CardHeader>
      <CardTitle>Login here</CardTitle>
    </CardHeader>
    <CardContent>
    <Login></Login>
    </CardContent>
    <CardFooter>
      <Link to="/register" className='text-sm underline text-primary text-center w-full'>New here? Register Now</Link>
    </CardFooter>
   </Card>
   </div>
  )
}

export default LoginPage