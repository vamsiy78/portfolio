
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8">
      <main className="max-w-3xl mx-auto space-y-12 py-16">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Nagavamsi Yadavalli</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">IT Desk Support Intern @ Pluralsight</p>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="leading-relaxed">
            I'm a 21-year-old Information Science Engineering student at RVITM, Bangalore (2021-25). 
            Currently, I'm pursuing my passion in IT as a Desk Support Intern at Pluralsight, where I started my journey in January 2025.
          </p>
        </section>


        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="space-y-2">
            <h3 className="font-medium">IT Desk Support Intern</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Pluralsight
              <br />
              January 2025 - Present
            </p>
          </div>
        </section>

        
        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="space-y-2">
            <h3 className="font-medium">B.E. in Information Science</h3>
            <p className="text-gray-600 dark:text-gray-400">
              RV Institute of Technology and Management, Bangalore
              <br />
              2021 - 2025
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <div className="flex space-x-4">
            <a 
              href="mailto:yadavallinagavamsi@gmail.com" 
              className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/y-naga-vamsi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-800 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
