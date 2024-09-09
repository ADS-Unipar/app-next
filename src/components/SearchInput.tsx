'use client';
import { useRouter } from "next/navigation"

function SearchInput({defaultValue}:any) {
    
    const { push } = useRouter()

        const onSearch = (value?:string) => {
            push('?search='+value)
            console.log(value)
        }

    return (
    <div>
        <input className="text-slate-950" type="text" value={defaultValue} onChange={(e)=>onSearch(e.target.value)} />
    </div>
    )

}

export default SearchInput