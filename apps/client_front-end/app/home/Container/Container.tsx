
import JobMain from './JobMain';
import HeaderJob from './HeaderJob';
import MoreCard from './MoreCard';

const Cato: React.FC = () => {

  return (
    <div className='flex flex-col 
    items-center justify-start 
    gap-10 mt-2'>
      <div className='Cato w-11/12 h-40
       rounded-2xl flex-col justify-between
        flex items-center'>
        <HeaderJob />
      </div>
      <JobMain />
      <MoreCard />

    </div>
  );
}

export default Cato;
