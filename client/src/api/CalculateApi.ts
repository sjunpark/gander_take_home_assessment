import axios from 'axios';

type ResponseType = {
  sum: number,
}

export async function addingNumbers<Number>(num1:number, num2:number) {
  try {
    const {data} = await axios.get<ResponseType>('http://localhost:8000/sum',{
      params: {num1,num2},
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return data.sum;
  } catch(error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return 'An unexpected error occurred'
  }
}