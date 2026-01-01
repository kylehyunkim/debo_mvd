import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DebernardiApproach: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 uppercase">The DeBernardi Approach</h1>
          <p className="text-xl text-gray-600 italic">"Our start-to-finish recipe for a successful and enjoyable project"</p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {/* Step 1: The Initial Phone Call */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#5bb450]">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">The Initial Phone Call</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The first time you call us, we will ask you a few general questions about your contact information as well as the project you have in mind, and we will make sure that you have read through this site to educate yourself on the way this works. If you happen to call and no one answers, please leave a message, our saying "No Later than the Next Business Day" applies here, and you'll receive a very timely call back.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We will then schedule an appointment for your first consultation, as well as make sure that you know what "homework" you will need to do before your first consultation.
            </p>
          </div>

          {/* Step 2: The First Consultation */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#5bb450]">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">The First Consultation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your first meeting will be with Jeff DeBernardi, our company president and expert builder, and/or our head estimator Tom Westcott, depending on the complexity and size of the project. The goal of the first project is for us to get an overall feel of your project and your goals, as well as a chance for you to get all of the questions you might have answered.
            </p>
            <p className="text-gray-700 font-semibold mb-2">For the first consultation, we REQUIRE the following information from you:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
              <li>A brief description of your project or a set of drawings if you have already begun the design process.</li>
              <li>A project budget, including any contingency you might have. This has nothing to do with how we establish our pricing, but instead has to do with feasibility of your project.</li>
              <li>Pictures of work that you like, so we can get an idea for your tastes in finishes.</li>
            </ul>
          </div>

          {/* Step 3: The Design and Permitting Process */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#5bb450]">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">The Design and Permitting Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is where the fun starts. Once we have decided on the specifics of a design package that fits you and your project, we will get a formal agreement in place, and start designing!
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
              <li>A design schedule is drafted and given to you</li>
              <li>We take all necessary measurements, photos, and other surveying needed to generate an accurate "as built" set of drawings</li>
              <li>We hire, manage, and coordinate any and all professionals and consultants and report to you bi-weekly</li>
              <li>We report to the local building administration to assist in obtaining required approvals and permits</li>
              <li>We take advantage of the design build process, and we don't let the project get out of hand budget wise</li>
            </ul>
          </div>

          {/* Step 4: Before Construction Begins */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#5bb450]">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">Before Construction Begins</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By this point, we should have at least a 75% complete "Product Library." This is the "bible" of specifications for your particular project. Everything from sinks, to paint colors, to exterior trim to cabinets is specified here. Other than your choice of builder, this is bar none, the single most important factor in having a successful build.
            </p>
            <p className="text-gray-700 font-semibold mb-2 italic">"We won't let you make a bad choice"</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
              <li>We will draft up and sign construction contracts, including such documents as the product library, and your drawings</li>
              <li>We will generate a construction schedule for you which will be adhered to</li>
              <li>A project manager will be assigned to your project</li>
              <li>A project foreman is assigned to your project</li>
              <li>Workmen and subcontractors are scheduled</li>
              <li>Any long lead time products for your project are ordered and paid for</li>
            </ul>
          </div>

          {/* Step 5: Building Your Dream */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#5bb450]">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">Building Your Dream</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your project manager will hold weekly meetings with yourself and/or your design team.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your project manager will do what's needed to keep to the schedule. Should weather delays or design adjustments warrant schedule changes, your project manager will make the necessary adjustments and give you an updated schedule right away. If we start to have schedule slippage due to our own mistakes or planning, we will bear the cost of necessary overtime and/or extra manpower to make sure we get back on track.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Developing and maintaining the highest level of safety, cleanliness, efficiency, quality and open communication will be the primary goal.
            </p>
          </div>

          {/* Step 6: Completing Your Project */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#5bb450]">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">Completing Your Project</h2>
            <p className="text-gray-700 leading-relaxed">
              You will walk the project at the end with your project manager to develop the punch list. This is your chance to address any quality concerns or to help us spot a few paint touchups or a scuff on a floor that mysteriously appeared. This list will be put to paper and will be worked on steadily until it is complete.
            </p>
          </div>

          {/* Step 7: After We're "Done" */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#5bb450]">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">After We're "Done"</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For us, the word "done" means just that. We are not satisfied until you are. No matter the time or hassle, we will stay the course until you are 100% happy and you feel that we are truly complete with your project, and you've received what you paid for.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer an unmatched 3 year warranty on all of our work. We will repair or fix any problems you have, other than appliances and normal wear and tear. Should you want us to take care of either of those issues, we will do so at our cost.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our entire business is run on referrals, and we want you happy for years to come so that you can share your experiences with our future potential clients.
            </p>
          </div>
        </div>

        {/* Design/Build Method Explanation */}
        <div className="bg-gray-900 text-white p-12 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center uppercase">What is the Design/Build Method and Why is it Better?</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Design-build is a construction project delivery system where the design and construction aspects are contracted for with a single entity known as the design-builder or design-build contractor. This system is used to minimize the project risk for an owner and to reduce the delivery schedule by overlapping the design phase and construction phase of a project.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-bold text-[#5bb450] mb-3 uppercase">Enhanced Communication</h3>
                <p className="text-sm">
                  Because the design parameters of a project are being developed along with the budgetary goals construction methodologies and budget conditions being weighed simultaneously, a project is more likely to be realized than with pure design approach.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5bb450] mb-3 uppercase">Maximum Accountability</h3>
                <p className="text-sm">
                  Rather than a parcelized level of responsibility of the classic design-bid-build, design-build provides an integrated solution for the owner or client. This moves projects away from the "finger-pointing" that is often commonplace in contemporary construction projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5bb450] mb-3 uppercase">Single Source Project Delivery</h3>
                <p className="text-sm">
                  Instead of having several contractors and consultants, an owner has just one entity to deal with. Design revisions, project feedback, budgeting, permitting, construction issues, change orders, and billing can all be routed through the design-build firm.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5bb450] mb-3 uppercase">Value-Based Project Feedback</h3>
                <p className="text-sm">
                  In a design-build context, the owner, the owner's other consultants, and the design-builder can work together to determine what methods and materials will maximize the owner's value.
                </p>
              </div>
            </div>
            <p className="mt-6 text-center italic">
              In short, the design/build method minimizes the hassles, mistakes, and time investment that typically burden you, the owner, in modern construction projects. It lets you do what you do best, and that's focus on your career so you can pay for your project, and focus on your family so no one feels left out during the process.
            </p>
          </div>
        </div>

        {/* Back to Services Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-block bg-gray-900 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#5bb450] transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DebernardiApproach;

