

interface propData{
  reset:number
  setReset:(value:number)=>void
}
const Catagory:React.FC<propData> = ({reset,setReset}) => {


  const onChangeSalary=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setReset(Number(e.target.value))

  }
    return (
        <div className=' flex flex-col gap-5 h-[150%] w-full '>
          <div className=" w-full flex-col h-[100px]  flex justify-center items-center pl-5 pt-5 ">
            <div className="w-full">
            <h1>Work Schedule</h1>              
            </div>

            <div className="p-3 flex justify-center w-11/12 bg-white shadow-sm ">
            <select  name="def" className="w-full text-gray-400 " >
            <option value="def">Defaults</option>
            <option value="part">Part time</option>
            <option value="full">Full time</option>
            </select>
            </div>
            
          </div>  
          <div className=" w-full flex-col h-[200px] flex justify-center items-center pl-5 pt-5 ">
            <div className="w-full">
            <h1>Employment Type</h1>              
            </div>
            
            <div className="p-3 flex justify-center items-center w-11/12 bg-white shadow-sm ">
            <select name="def" className="w-full text-gray-400  " >
            <option value="def">Defaults</option>
            <option value="part">Part time</option>
            <option value="full">Full time</option>
            </select>
            </div>
            
          </div>  
          <div className=" w-full flex-col h-[200px]flex justify-center items-center pl-5 pt-5 ">
            <div className="w-full">
            <h1>Work Location</h1>              
            </div>

            <div className="p-3 flex justify-center w-11/12 bg-white shadow-sm ">
            <select name="def" className="w-full text-gray-400 " >
            <option value="def">Defaults</option>
            <option value="part">Part time</option>
            <option value="full">Full time</option>
            </select>
            </div>
            
          </div>  
          <div className=" w-full flex-col h-[200px] flex justify-center items-center pl-5 pt-5 ">
            <div className="w-full">
            <h1>Experience</h1>              
            </div>

            <div className="p-3 flex gap-5 flex-wrap justify-center items-center w-full ">
                <button className='p-3 bg-slate-400 rounded-[20%]  '>No</button>
                <button className='p-3 bg-slate-400 rounded-[20%]  '>Less Than 1 year</button>
                <button className='p-3 bg-slate-400 rounded-[20%]  '>1-3 year</button>
                <button className='p-3 bg-slate-400 rounded-[20%]  '>3-5 year</button>
                <button className='p-3 bg-slate-400 rounded-[20%]  '>5 year up</button>
            </div>
            
          </div>  
          <div className=" w-full flex-col h-[300px] flex justify-center items-center pl-5 pt-5 ">
            <div className="w-full flex flex-col gap-5 ">
            <h1>Salary</h1> 
            <h1>0$ - {reset}$</h1>             
            </div>

            <div className="p-3 flex gap-5 flex-wrap justify-center w-full ">
                <input className='w-full' max={1000} type="range" value={reset} onChange={onChangeSalary} />
            </div>
            
          </div>  
        </div>
        
    )
}

export default Catagory
