import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import AddNewPaymentDialog from "@/components/molecules/income-expenditure-table/add-new-payment";
import {
  columns,
  Payment,
} from "@/components/molecules/income-expenditure-table/column";
import { DataTable } from "@/components/molecules/income-expenditure-table/data-table";

import { useEffect, useState } from "react";

import { db } from "@/firebase/firebase";
import { collection, query, getDocs } from "firebase/firestore";

const HomePage = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [totalIncome, setTotalIncome] = useState(0);

  // fetching all payments

  function getTotalIncome() {
    let netIncome = 0;
    payments.map((payment) => {
      if(payment.type === "credit"){
        netIncome = netIncome + payment.value;
      }
      else{
        netIncome = netIncome - payment.value;
      }
    });
    setTotalIncome(netIncome);
  }

  async function getPayments() {
    const paymentsData: any = [];
    const q = query(collection(db, "payments"));
    const querySnapshot = await getDocs(q);

    querySnapshot.docs.forEach((data) => {
      paymentsData.push(data.data()); // pushing entire data
    });
    setPayments(paymentsData); // changing the state
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getPayments();
      getTotalIncome();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [payments]);

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1  gap-4">
        <CardComponent totalIncome={totalIncome}></CardComponent>
      </div>

      <Card className="mt-4">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Statement</CardTitle>
          <AddNewPaymentDialog></AddNewPaymentDialog>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={payments} />
        </CardContent>
      </Card>
    </>
  );
};

export default HomePage;

function CardComponent({totalIncome}:{totalIncome:number}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>This Week</CardDescription>
        <CardTitle className="text-4xl">&#8377; {totalIncome}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">+25% from last week</div>
      </CardContent>
      <CardFooter>
        <Progress value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
}

