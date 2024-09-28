import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, BookMarked } from "lucide-react";
import jobDatabase from "@/data/jobDatabase"; // Import the job data

const PostJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState(jobDatabase);
  const [filters, setFilters] = useState({
    jobTitleSkillsCompany: "",
    location: "",
  });

  // Function to handle filter changes in input fields
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Function to filter jobs based on search criteria
  const handleSearch = () => {
    const filteredJobs = jobDatabase.filter((job) => {
      // Check for matches in job title, skills, or company
      const jobTitleSkillsCompanyMatch =
        job.title?.toLowerCase().includes(filters.jobTitleSkillsCompany.toLowerCase()) ||
        job.skills?.some((skill) => skill.toLowerCase().includes(filters.jobTitleSkillsCompany.toLowerCase())) ||
        job.company?.toLowerCase().includes(filters.jobTitleSkillsCompany.toLowerCase());

      // Check for matches in location
      const locationMatch =
        job.location?.city?.toLowerCase().includes(filters.location.toLowerCase()) ||
        job.location?.state?.toLowerCase().includes(filters.location.toLowerCase()) ||
        job.location?.zipCode.includes(filters.location)

      return jobTitleSkillsCompanyMatch && locationMatch;
    });
    setFeaturedJobs(filteredJobs); // Update the featured jobs with filtered results
  };

  return (
    <main className="flex-grow">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Find Your Dream Job</h1>
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            {/* Input for job title, skills, or company */}
            <Input
              type="text"
              name="jobTitleSkillsCompany"
              placeholder="Job title, skills, or company"
              className="flex-grow bg-slate-600 text-foreground"
              value={filters.jobTitleSkillsCompany}
              onChange={handleFilterChange}
            />
            {/* Input for location */}
            <Input
              type="text"
              name="location"
              placeholder="City, state, or zip code"
              className="flex-grow bg-slate-600 "
              value={filters.location}
              onChange={handleFilterChange}
            />
            {/* Search button */}
            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white " onClick={handleSearch}>
              <Search className="mr-2 h-5 w-5 " />
              Search Jobs
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Featured Job Postings</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={job.logo} alt={`${job.company} logo`} />
                      <AvatarFallback>{job.company?.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {job.location?.city}, {job.location?.state}, {job.location?.zipCode}
                  </p>
                  <p className="text-sm">{job.experience} experience • {job.type} • {job.salary}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.skills?.map((skill, index) => (
                      <span key={index} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <BookMarked className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button size="sm">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostJobs;

