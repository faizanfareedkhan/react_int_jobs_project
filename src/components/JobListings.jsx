import { useEffect, useState } from "react";
import JobListing from "./JobListing";
<<<<<<< HEAD
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
=======

const JobListings = ({ isHome = false }) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
>>>>>>> 4d8b229f64a046527c32e923b99dacfc1f45c1b6
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
<<<<<<< HEAD
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
=======
      try {
        const res = await fetch("http://localhost:8000/jobs");
>>>>>>> 4d8b229f64a046527c32e923b99dacfc1f45c1b6
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
<<<<<<< HEAD

=======
>>>>>>> 4d8b229f64a046527c32e923b99dacfc1f45c1b6
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl m-auto lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-500">
          {isHome ? "Browse Jobs" : "Recent Jobs"}
        </h2>
<<<<<<< HEAD
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
=======
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </>
          )}
        </div>
>>>>>>> 4d8b229f64a046527c32e923b99dacfc1f45c1b6
      </div>
    </section>
  );
};

export default JobListings;
