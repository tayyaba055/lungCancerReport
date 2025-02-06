const About = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-6 mx-auto md:px-12">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Section 1 */}
          <div className="p-6 text-center bg-white shadow-lg rounded-2xl">
            <div className="mb-4 text-4xl text-blue-500">
              <i className="fas fa-trophy"></i>
            </div>
            <h3 className="mb-4 text-xl font-bold">Best In Industry</h3>
            <p className="text-gray-600">
              At UTA-SYSTEMS, we stand tall as industry leaders, defining
              excellence and setting unparalleled standards in innovation,
              service, and performance.
            </p>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block">
            <img
              src="/path-to-your-image.jpg"
              alt="Team at UTA-SYSTEMS"
              className="shadow-lg rounded-xl"
            />
          </div>

          {/* Section 2 */}
          <div className="p-6 text-center bg-white shadow-lg rounded-2xl">
            <div className="mb-4 text-4xl text-blue-500">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="mb-4 text-xl font-bold">Professional Staff</h3>
            <p className="text-gray-600">
              Our success is driven by our professional staff, a dedicated team
              committed to delivering expertise and excellence in every aspect
              of our service, ensuring the highest standards for your business.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6 text-center bg-white shadow-lg rounded-2xl">
            <div className="mb-4 text-4xl text-blue-500">
              <i className="fas fa-award"></i>
            </div>
            <h3 className="mb-4 text-xl font-bold">Award Winning</h3>
            <p className="text-gray-600">
              At UTA-SYSTEMS, our commitment to excellence has earned us
              multiple awards, a testament to our unwavering dedication to
              quality.
            </p>
          </div>

          {/* Spacer for mobile */}
          <div className="lg:hidden">
            <img
              src="/path-to-your-image.jpg"
              alt="Team at UTA-SYSTEMS"
              className="shadow-lg rounded-xl"
            />
          </div>

          {/* Section 4 */}
          <div className="p-6 text-center bg-white shadow-lg rounded-2xl">
            <div className="mb-4 text-4xl text-blue-500">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="mb-4 text-xl font-bold">24/7 Support</h3>
            <p className="text-gray-600">
              At UTA-SYSTEMS, we prioritize your peace of mind. Our 24/7 support
              ensures that expert assistance is just a call away whenever you
              need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
