import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import IncomeExpenditureForm from "./add-new-payment-form"
  

const AddNewPaymentDialog = () => {
  return (
    <Dialog>
    <DialogTrigger>
        <Button> Add New </Button>
    </DialogTrigger>
    
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Record Your Payments</DialogTitle>

      </DialogHeader>
      <IncomeExpenditureForm></IncomeExpenditureForm>

    </DialogContent>

    </Dialog>
  
  )
}

export default AddNewPaymentDialog