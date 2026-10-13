import Link from "next/link";

const summary = [
  { title: "累計借出", amount: 42000 },
  { title: "尚未收回", amount: 18500 },
  { title: "已收回", amount: 23500 },
  { title: "逾期未還", amount: 6000 },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            LoanBook Dashboard
          </h1>

          <Link
            href="/loans"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            借款列表
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {summary.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-gray-500">
                {item.title}
              </p>
              <p className="mt-3 text-2xl font-bold">
                NT$ {item.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          目前使用測試資料，稍後將串接 NestJS API。
        </p>
      </div>
    </main>
  );
}