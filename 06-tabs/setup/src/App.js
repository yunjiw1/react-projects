import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const proxyUrl = 'https://corsproxy.io/?';
const url = 'https://course-api.com/react-tabs-project'
const finalUrl = proxyUrl + encodeURIComponent(url);

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [idx, setIdx] = useState([0]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const reponse = await fetch(finalUrl);
      const data = await reponse.json();
      setJobs(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }; 

  useEffect(() => {
    fetchJobs();
  }, [])

  if (loading) {
    return (
      <section className='section'>
        <p>Loading</p>
      </section>
    )
  }

  return (
    <section className='section'>
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, i) => <button key={job.id} className={'job-btn' + (idx === i ? ' active-btn' : '')} onClick={() => setIdx(i)}>{job.company}</button>)}
        </div>
        <article className='job-info'>
          <h3>{jobs[idx].title}</h3>
          <h4 className='job-icon'>{jobs[idx].company}</h4>
          <p className='job-date'>{jobs[idx].dates}</p>
          {jobs[idx].duties.map((d, i) => {
            return (
              <div key={i} className='job-desc'>
                <FaAngleDoubleRight className="job-icon" />
                <p>{d}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App
