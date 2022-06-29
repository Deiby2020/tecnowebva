import Clients from '../components/Clients';
//import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
//import AddProjectModal from '../components/AddProjectModal';
import AddTMemorandumModal from '../components/AddTMemorandumModal';
import TMemorandums from '../components/TMemorandums';
import TMemos from '../components/TMemos';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddTMemorandumModal />
      </div>
      <TMemorandums />
      <hr />
      <TMemos />
      <hr/>
      <Clients/>
    </>
  );
}
