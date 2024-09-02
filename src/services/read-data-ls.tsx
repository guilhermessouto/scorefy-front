import { Data } from "../types/data"

const ReadData = () =>  {
  const data = localStorage.getItem('data')
    if(!data)
      return []

    const formatted_data: Data[] = JSON.parse(data)
    return formatted_data

}

export default ReadData