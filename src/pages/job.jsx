import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { BookMarked } from "lucide-react"


const companyJobData = {
  company: {
    name: "TechCorp Inc.",
    logo: "/placeholder.svg?height=100&width=100",
    description: "TechCorp Inc. is a leading innovator in cloud computing and artificial intelligence solutions. Founded in 2010, we've been at the forefront of technological advancements, serving Fortune 500 companies and startups alike.",
    location: "New York City, NY",
    employees: "1000-5000",
    industry: "Information Technology",
    website: "https://techcorp-inc.example.com"
  },
  job: {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    location: {
      city: "New York City",
      state: "NY",
      type: "Hybrid (2 days in office)"
    },
    experience: "5-7 years",
    type: "Full-time",
    salary: "$120k - $160k",
    postedDate: "2023-05-01",
    description: "We are seeking a Senior React Developer to join our dynamic team. In this role, you will be responsible for developing and implementing user interface components using React.js and other related technologies. You will work closely with our product and design teams to create seamless and intuitive user experiences.",
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers",
      "Participate in code reviews and mentor junior developers"
    ],
    requirements: [
      "5+ years of experience in front-end development",
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
      "Thorough understanding of React.js and its core principles",
      "Experience with popular React.js workflows (such as Flux or Redux)",
      "Familiarity with RESTful APIs",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token",
      "Familiarity with modern front-end build pipelines and tools",
      "Experience with common front-end development tools such as Babel, Webpack, NPM, etc.",
      "Ability to understan business requirements and translate them into technical requirements"
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) plan with company match",
      "Flexible working hours",
      "Professional development opportunities",
      "Regular team building events"
    ]
  }
}

// Simulated company and job data (unchanged)

function JobPage() {
  

  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h1 className="text-3xl font-bold mb-4">{companyJobData.job.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={companyJobData.company.logo} alt={`${companyJobData.company.name} logo`} />
                  <AvatarFallback>{companyJobData.company.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{companyJobData.company.name}</h2>
                  <p className="text-muted-foreground">{companyJobData.job.location.city}, {companyJobData.job.location.state}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="text-sm border px-3 py-1 rounded-full">{companyJobData.job.type}</span>
                <span className="text-sm border px-3 py-1 rounded-full">{companyJobData.job.experience} experience</span>
                <span className="text-sm border px-3 py-1 rounded-full">{companyJobData.job.salary}</span>
                <span className="text-sm border px-3 py-1 rounded-full">{companyJobData.job.location.type}</span>
              </div>
              <div className="flex space-x-4">
                <Button>Apply Now</Button>
                <Button variant="outline">
                  <BookMarked className="mr-2 h-4 w-4" />
                  Save Job
                </Button>
              </div>
            </section>

            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{companyJobData.job.description}</p>
                <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
                <ul className="list-disc pl-5 mb-4">
                  {companyJobData.job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
                <ul className="list-disc pl-5 mb-4">
                  {companyJobData.job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
                <ul className="list-disc pl-5">
                  {companyJobData.job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{companyJobData.company.description}</p>
                <div className="space-y-2">
                  <p><strong>Industry:</strong> {companyJobData.company.industry}</p>
                  <p><strong>Company size:</strong> {companyJobData.company.employees} employees</p>
                  <p><strong>Location:</strong> {companyJobData.company.location}</p>
                  <p><strong>Website:</strong> <a href={companyJobData.company.website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{companyJobData.company.website}</a></p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Department:</strong> {companyJobData.job.department}</p>
                  <p><strong>Job Type:</strong> {companyJobData.job.type}</p>
                  <p><strong>Experience:</strong> {companyJobData.job.experience}</p>
                  <p><strong>Salary Range:</strong> {companyJobData.job.salary}</p>
                  <p><strong>Posted Date:</strong> {companyJobData.job.postedDate}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default JobPage;