import { Suspense } from "react";
import LoansList from "@/components/LoansList";


export default async function LoansPage() {

  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <Suspense
          fallback={
            <p className="text-center text-gray-500">
              借款資料載入中...
            </p>
        }
      >
        <LoansList />
      </Suspense>
    </main>
  );
}