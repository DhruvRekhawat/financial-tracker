import Login from '@/components/molecules/Login'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
   
   </Card>
   </div>
  )
}

export default LoginPage