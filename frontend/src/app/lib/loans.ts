export interface Loan {
  id: number;
  borrower: string;
  amount: number;
  status: string;
}

export async function getLoans(): Promise<Loan[]> {
    const response = await fetch('http://localhost:3001/loans', {
        cache: 'no-store'
    });

    if(!response.ok) {
        throw new Error('無法取得借款資料');
    }

    return response.json() as Promise<Loan[]>;
}