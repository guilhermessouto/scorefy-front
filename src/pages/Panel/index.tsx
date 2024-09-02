import { Link, Outlet } from "react-router-dom"
import { CirclePlus, Music } from "lucide-react"

import ReadData from "../../services/read-data-ls"

const Tab = () => {
  const data = ReadData()

  return (
    <div className="w-screen h-screen flex">
      <div className="bg-[#111] py-10 px-5 w-[225px] h-full gap space-y-10 text-white ">
        <Link to={'/'}>
          <div className="flex items-center justify-between bg-[#333] py-2 px-4 rounded-md">
            <span className="font-semibold">Adicionar</span>

            <CirclePlus />
          </div>
        </Link>

        <div>
          <ul className="gap space-y-4">
            {data?.map(e => (
              <li key={e.name} className="bg-[#333] flex font-semibold py-2 px-4 rounded-md">
                <Music className="mr-3"/>
                <Link to={`/tab/${e.name}`}>{ e.name }</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Outlet context={data} />
    </div>
  )
}

export default Tab