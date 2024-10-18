export default function BusinessProcess() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Side: Steps */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">Our Business Process Road</h2>
  
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-green-500">01.</h3>
              <h4 className="text-xl font-semibold">Create an Idea</h4>
              <p className="text-gray-600">
                What's hard is to develop the habits that enable us to come up with great ideas.
              </p>
            </div>
  
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-green-500">02.</h3>
              <h4 className="text-xl font-semibold">Complete the Project</h4>
              <p className="text-gray-600">
                You can organize yourself and your team in endless ways.
              </p>
            </div>
  
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-green-500">03.</h3>
              <h4 className="text-xl font-semibold">Execution</h4>
              <p className="text-gray-600">
                When it comes to motivating teams, awarding members for good performance.
              </p>
            </div>
          </div>
  
          {/* Right Side: Image */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/images/business-process.jpg" 
                alt="Business Process"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  