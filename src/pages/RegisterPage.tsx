import Register from '@/components/molecules/Register'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='w-full h-screen grid place-items-center'>
    <Card className='w-2/3 max-w-[400px]' >
    <CardHeader>
      <CardTitle>Register here</CardTitle>
    </CardHeader>
    <CardContent>
    <Register></Register>
    </CardContent>
    <CardFooter>
      <Link to="/login" className='text-sm underline text-primary text-center w-full'>Already registered? Login here</Link>
    </CardFooter>
   </Card>
   </div>
  )
}

export default RegisterPage