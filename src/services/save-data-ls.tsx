import ReadData from "./read-data-ls"
import { Data } from "../types/data"

const SaveData = (data: Data) => {
  const ls = ReadData()
  ls.push(data)
  localStorage.setItem('data',  JSON.stringify(ls))
}

export default SaveData