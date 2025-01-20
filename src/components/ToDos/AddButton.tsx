
import arrow from '../../assets/Union.svg'
export const AddButton = ()=>{
    return(
        <>
        <button className="flex items-center gap-3  bg-[#7B1984] rounded-full px-4 py-2 text-[#FFFFFF] text-[14px] font-bold">
            ADD <img className='h-[20px] w-[12px]' src={arrow} alt="Arrow" />
        </button>
       
        </>
    )
}