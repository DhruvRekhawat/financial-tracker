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
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from 'lucide-react'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

import { toast } from "sonner"


import { auth } from "@/firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string(),
  email: z.string().email(),

})

const Login = () => {

    const [isVisible,setIsVisible] = useState(false)

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password:"",
          email:"",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {

        signInWithEmailAndPassword(auth,values.email,values.password)
        .then(()=>{
          toast.success("Login Successful")
          navigate("/")
        })
        .catch(()=>
          toast.error("Check Email and Password")
        )
        
      }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className=" flex justify-center items-center">
                <Input placeholder="Enter your password" {...field} type={(isVisible)?"text":"password"} />
                {
                  (isVisible)?<EyeOff onClick={()=>setIsVisible(!isVisible)}></EyeOff>:<Eye onClick={()=>setIsVisible(!isVisible)}></Eye>
                }
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  )
}

export default Login