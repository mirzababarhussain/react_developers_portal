/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Jobs from '../jobs.json';
import Job from './Job';
import Spinner from './Spinner';
const JobListing = ({ isHome = false}) => {

 
    //const jobListing = isHome ? Jobs.slice(3) : Jobs;
  
    const [jobs,setJobs] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchJobs = async () =>{
          const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
              console.log('Error Fetching Data',error);
            }
            finally{
              setLoading(false);
            }
        }
        fetchJobs();
    },[])
  
  
    return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent jobs' : 'Browse Jobs'}
        </h2>
              
          {loading ? (<Spinner loading={loading}/>) : ( 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { jobs.map((job) =>(
            <Job key={job.id} job={job}/>
        ))}
        </div>
        )};
        
          
          
        

      </div>
    </section>
  )
}

export default JobListing
