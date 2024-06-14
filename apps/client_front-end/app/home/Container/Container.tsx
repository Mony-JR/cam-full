
import JobMain from './JobMain';
import HeaderJob from './HeaderJob';
import MoreCard from './MoreCard';

const Cato: React.FC = () => {

  return (
    <div className='flex flex-col 
    items-center justify-start pt-5
    gap-10 mt-2'>
      <HeaderJob />
      <JobMain />
      <MoreCard />

    </div>
  );
}

export default Cato;
