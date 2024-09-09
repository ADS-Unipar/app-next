import SearchInput from "@/components/SearchInput";
import api from "@/utils/api";
import Image from "next/image";

export default async function Home({searchParams}:any) {
  const {search} = searchParams 
  const {data, status} = search.length > 3 ?  await api.get(`/character/?name=${search}`) : await api.get(`/character`)
  
  return (<>
    <SearchInput dafautValue={search} />
    <div className="flex flex-row items-center justify-center gap-3 flex-wrap w-full">
        {data?.results && status === 200 && data?.results.map((item:any)=> {
          return(
          <div className="bg-slate-100 p-3 text-slate-900">
            <Image src={item.image} width={300} height={300} alt={item.name}/>
            <p>
              <strong>Nome:</strong> <span> {item.name}</span>
            </p>
          </div>
          )
        }) }
    </div>
    </>
  );
}
