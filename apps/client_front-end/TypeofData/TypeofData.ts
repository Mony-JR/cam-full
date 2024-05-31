interface Data2 {
    id: number
    txt: string
    logo: string
    position: number
    time: JobTime
    salary: Salary
    date: string
    location: string
    like: boolean
    handleHeartClick?:(id:number)=>void
}

interface JobTime {
    part: string
    full: string
}

interface Salary {
    min: number
    max: number
}

export default Data2