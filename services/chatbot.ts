import callAPI from '@/config/api'

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export async function getResponse(question: string) {
  const url = `${ROOT_API}/${API_VERSION}/predict/`

  return callAPI({
    url,
    method: 'POST',
    data: {
      question: question
    }
  })
}
