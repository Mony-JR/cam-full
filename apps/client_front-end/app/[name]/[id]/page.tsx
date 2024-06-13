'use client'
import Data2 from '@/TypeofData/TypeofData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from "ui-components098/Button"
import MyButton from "mini-ui-mony/Button/MyButton"
import Background from '@/Background/Background';
import { BackButton_md } from '@/Back/BackButton';
import Image from 'next/image';
import CardApply from './CardApply';
import CardDescription from './CardDescription';
import ButtonApply from './ButtonApply';
import { Sheet } from 'react-modal-sheet';
import { GrFormNextLink } from "react-icons/gr";
import { useRouter } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}



const Page: React.FC<PageProps> = ({ params }) => {

    const [data, setData] = useState<Data2[]>([
        {
            id: 1,
            txt: 'Developer',
            logo: 'https://optimise2.assets-servd.host/dig-upsiide/production/images/starbsloh.png?w=735&h=400&q=100&fm=jpg&fit=crop&dm=1668098882&s=3ee470c8b1123213d7f7f147bc1126e4',
            position: 5,
            time: { part: "part time", full: "full time" },
            salary: { min: 200, max: 500 },
            date: '2023-05-25',
            location: 'Khan Camkarmon',
            like: false
        },
        {
            id: 2,
            txt: 'ABA Dev',
            logo: 'https://i.pinimg.com/474x/36/9f/61/369f612149566874dcbc2d8735d51ccb.jpg',
            position: 10,
            time: { part: "part time", full: "full time" },
            salary: { min: 500, max: 1000 },
            date: '2023-05-25',
            location: 'Phnom penh',
            like: false
        },
        {
            id: 3,
            txt: 'Flutter Developer',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6cqji5FGvPQsj3PR21AjZFIQzq_eAUIFyzfAGqkmww&s',
            position: 10,
            time: { part: "part time", full: "full time" },
            salary: { min: 500, max: 1000 },
            date: '2023-05-25',
            location: 'Pnhom penh',
            like: false
        },
        {
            id: 4,
            txt: 'web Dev',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6cqji5FGvPQsj3PR21AjZFIQzq_eAUIFyzfAGqkmww&s',
            position: 5,
            time: { part: "part time", full: "full time" },
            salary: { min: 299, max: 499 },
            date: '2023-05-25',
            location: 'Pnhom penh',
            like: false
        },
        {
            id: 5,
            txt: 'Intership mobile App',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6cqji5FGvPQsj3PR21AjZFIQzq_eAUIFyzfAGqkmww&s',
            position: 2,
            time: { part: "part time", full: "full time" },
            salary: { min: 100, max: 200 },
            date: '2023-05-25',
            location: 'Pnhom penh',
            like: false
        },
    ]);

    const [user,setuser]=useState<string>('')

    const [getData, setGetData] = useState<Data2[]>([])

    useEffect(() => {
        let id: number = parseInt(params.id)
        const Fil_data = data.filter((p: Data2) => p.id === id)
        setGetData(Fil_data)
    }, [])
    const [apply, setapply] = useState<boolean>(false)
    const [select,setselect]=useState<boolean>(false)
    const router=useRouter();

    function handleApply() {
        if(user===""||null||undefined){
            router.push("/login/register")
        }
        else{
        setapply(!apply)            
        }

    }

    return (
        <div className='w-full h-full flex flex-col pb-20 '>
            <Link href={"../"}> <BackButton_md styles='absolute bg-white p-3 px-4 rounded-xl top-5 left-3 ' /></Link>
            <Background style='bg-mybg-image h-[250px] '>
                <div className=' h-60 w-full pl-4 pr-4 mt-[-100px] z-10 '>
                    {getData.map((p) => (
                        <CardApply key={p.id} id={p.id} txt={p.txt}
                            logo={p.logo} position={p.position}
                            date={p.date}
                            location={p.location} />
                    ))}
                </div>

            </Background>
            <div className='pl-5 pr-5 pt-4'>
                {getData.map((p) => (
                    <CardDescription key={p.id} time={p.time} txt={p.txt} salary={p.salary}  />
                ))}
            </div>
            <div className='pl-5 pr-5 pt-4'>
                {getData.map((p) => (
                    <CardDescription key={p.id} />
                ))}
            </div>
            <div className='pl-5 pr-5 pt-4'>
                <h1>Location</h1>
                {getData.map((p) => (
                    <CardDescription key={p.id} />
                ))}
            </div>
            <div className='pl-5 pr-5 pt-4'>
                {getData.map((p) => (
                    <CardDescription key={p.id} />
                ))}
            </div>
            {getData.map((p) => (
                <ButtonApply handleClick={handleApply} id={p.id} />
            ))}
            <Sheet isOpen={apply} onClose={() => setapply(false)} onCloseEnd={()=>setselect(false)} snapPoints={[450, 400, 0]}>
                <Sheet.Container >
                    <Sheet.Header />
                    <Sheet.Content>
                        <div className='flex flex-col gap-5 pl-5 pr-5 h-ful w-full justify-center items-center '>

                            <p className='w-full pl-5 text-gray-400  '>Please select for apply </p>
                            <div onClick={()=>setselect(!select)} className={`h-20 pl-5 w-full flex rounded-3xl
                             items-center
                               drop-shadow-xl ${select ? 'bg-orange-500':'bg-white'} `}>
                                <h1>User Name </h1>
                            </div>
                            <div className='pl-5 h-20 w-full flex rounded-3xl items-center bg-white drop-shadow-xl '>
                                <h1>Attached CV </h1>
                            </div>
                            <button className={`p-5 flex rounded-3xl text-white justify-center 
                            gap-5 items-center ${select? 'bg-orange-500':'bg-orange-200'}  w-48`}>
                                Confirm <span className='text-2xl'><GrFormNextLink /></span>  </button>

                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>

        </div>
    );
}

export default Page;
