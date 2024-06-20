'use server'

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function authenticate(token: string) {
  await delay(100)

  console.log(token)
}

export async function getExpenses() {
  await delay(100)
  return expenses
}

const expenses = [
  {
    id: 1,
    date: '2024-05-01',
    interestDate: '2024-04-30',
    expense: 'Hair Trimmer and file organizer',
    category: 'needs',
    subcategory: 'house',
    amount: 62.99,
    place: 'Amazon',
    note: 'Something',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    date: '2024-05-02',
    interestDate: '2024-05-01',
    expense: 'Hair Trimmer and file organizer',
    category: 'needs',
    subcategory: 'house',
    amount: 62.99,
    place: 'Amazon',
    note: 'Something',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
