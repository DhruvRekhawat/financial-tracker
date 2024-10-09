import Register from '@/components/molecules/Register'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
   
   </Card>
   </div>
  )
}

export default RegisterPage