import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { db } from "@/firebase/firebase";
import { ColumnDef } from "@tanstack/react-table";
import { deleteDoc, doc } from "firebase/firestore";
import { ArrowUpDown, Edit, Trash } from "lucide-react";
import EditPaymentForm from "./edit-payment-form";


export type Payment = {
  id: string
  value: number
  title: string
  description?: string
  type: "credit" | "debit"
  
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "value",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
     
      const amount:number = row.getValue("value")
  
 
      return <div className="text-center font-medium">&#8377;{amount}</div>
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({row}) => {
      if(row.original.type === "credit"){
        return <div className="text-green-600">{row.original.type}</div>
      }
      else{
        return <div className="text-red-600">{row.original.type}</div>
      }

    }
  },
  {
    accessorKey: "action",
    header: "Actions",
    cell: ({row}) => {

      async function deleteDocument(title:string) {
        try{
          await deleteDoc(doc(db, "payments",title));

        }
        catch(err){
          console.log(err)
        }
      }

      

     return(
      <div>
      <Dialog>
        <DialogTrigger>
        <Button size={"sm"} variant={"outline"}>
        <Edit className="text-zinc-600 h-4 w-4" ></Edit>
        </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Edit Payment</DialogTitle>
          <EditPaymentForm title={row.original.title} description={row.original.description || ""} value={row.original.value} type={row.original.type} ></EditPaymentForm>
        </DialogContent>
    
      </Dialog>
      <Button variant={"destructive"} size={"sm"} onClick={()=>deleteDocument(row.original.title)}><Trash className="h-4 w-4"/></Button>
      </div>
      )

    }
  },
]
