'use server'

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function authenticate(token: string) {
  await delay(100)

  console.log(token)
}
