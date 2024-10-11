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
import { useForm } from "react-hook-form"
import { z } from "zod"



import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { db } from "@/firebase/firebase"

import { doc, setDoc } from "firebase/firestore"



const formSchema = z.object({
  title: z.string(),
  description: z.string().optional().or(z.literal("")), // "" not null
  value: z.coerce.number(),
  type: z.string(),
})

const EditPaymentForm = ({title,description,value,type}:{title:string,description:string,value:number,type:string}) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title:title,
          description:description,
          value:value,
          type:type
        },
      })

      async function onSubmit(values: z.infer<typeof formSchema>) {
            
        
        const docRef = doc(db, "payments", values.title);
        await setDoc(docRef,{
                title:values.title,
                description:values.description,
                value: values.value,
                type:values.type,
            });
            
           console.log("Updated Successfulyy!")
           console.log("paramValues:",title,description,value,type)
      }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder={title} {...field} className=""    readOnly />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder={description} {...field}  />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={type}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type of payment" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="credit">Credit</SelectItem>
                  <SelectItem value="debit">Debit</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  )
}

export default EditPaymentForm