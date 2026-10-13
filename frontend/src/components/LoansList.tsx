import Link from "next/link";
import { getLoans } from "@/lib/loans";

export default async function LoansList() {
  const loans = await getLoans();

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          借款紀錄
        </h1>

        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline"
        >
          返回 Dashboard
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">借款人</th>
              <th className="p-4">借款金額</th>
              <th className="p-4">狀態</th>
            </tr>
          </thead>

          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id} className="border-t border-gray-200">
                <td className="p-4">{loan.borrower}</td>
                <td className="p-4">
                  NT$ {loan.amount.toLocaleString()}
                </td>
                <td className="p-4">{loan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {loans.length === 0 && (
          <p className="p-6 text-center text-gray-500">
            目前沒有借款紀錄
          </p>
        )}
      </div>
    </div>
  );
}