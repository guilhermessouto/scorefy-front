import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveData from "../services/save-data-ls";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../services/api";
import { Data } from "../types/data";

const schema = z.object({
  file: z
  .instanceof(FileList)
  .refine(file => file[0] !== undefined, 'File is required.')
})

type Schema = z.infer<typeof schema>

const Form = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: Schema) => {
    const { file } = data
    const formData = new FormData();
    formData.append('file', file[0])

    try {
      const response = await axiosInstance.post<Data>('/upload', formData)
      const { data } = response

      SaveData(data)

      navigate(`/tab/${data.name}`)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-[#f2f2f2] w-[375px] p-2 rounded-xl flex flex-col items-center">
      <h2 className="text-3xl mb-4">Upload your file</h2>

      <img src="/upload-file.png" alt="image" className="w-[150px] mb-4" />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
        <input type="file" {...register("file")}  />
        
        <button type="submit" className="mt-4 bg-[#222] text-white py-2 px-6 rounded-md">Enviar</button>
      </form>
    </div>
  )
}

export default Form