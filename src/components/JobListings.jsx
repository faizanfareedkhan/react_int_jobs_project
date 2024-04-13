import { useEffect, useState } from "react";
import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl m-auto lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-500">
          {isHome ? "Browse Jobs" : "Recent Jobs"}
        </h2>
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
      </div>
    </section>
  );
};

export default JobListings;
