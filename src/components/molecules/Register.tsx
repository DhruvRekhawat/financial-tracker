import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import { auth } from "@/firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string(),
  confirmPassword: z.string(),
  email: z.string().email(),

})

const Register = () => {

    const navigate = useNavigate()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password:"",
          confirmPassword:"",
          email:"",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {

        if(values.password === values.confirmPassword){

          createUserWithEmailAndPassword(auth,values.email,values.password)
          .then(()=> navigate('/login'))
          .catch((error:any)=>console.log(error))
         
        }
        else{
          console.error('Passwords do not match!')
        }
      }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" gap-y-6 gap-x-4 grid grid-cols-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="jhon doe" {...field} className="" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Re-enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full col-span-2">Submit</Button>
      </form>
    </Form>
  )
}

export default Register