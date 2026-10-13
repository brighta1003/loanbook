import Link from "next/link";

const loans = [
  {
    id: 1,
    borrower: "小明",
    amount: 5000,
    status: "逾期",
  },
  {
    id: 2,
    borrower: "小華",
    amount: 8000,
    status: "部分還款",
  },
  {
    id: 3,
    borrower: "小美",
    amount: 3000,
    status: "已還清",
  },
];

export default function LoansPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-900">
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
        </div>
      </div>
    </main>
  );
}