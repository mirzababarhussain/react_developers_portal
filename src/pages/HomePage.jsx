import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
        <Hero Title="Full Stack Developer Job Boarding" Slogan="Where Get Job Done"/>
        <HomeCards/>
        <JobListing isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage
