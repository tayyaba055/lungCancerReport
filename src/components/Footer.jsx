const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container grid grid-cols-1 gap-6 px-4 mx-auto md:px-8 md:grid-cols-3">
        {/* About Us Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-yellow-400">About Us</h3>
          <p className="text-sm text-gray-300">
            We are committed to providing the best products and services to our
            customers. Thank you for choosing us!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-300 transition hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-gray-300 transition hover:text-white"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="text-gray-300 transition hover:text-white"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 transition hover:text-white"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-yellow-400">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: support@example.com</p>
          <p className="text-sm text-gray-300">Phone: +123-456-7890</p>
          <p className="text-sm text-gray-300">
            Address: 123 Main St, City, Country
          </p>
        </div>
      </div>
      <div className="pt-4 mt-6 text-center border-t border-gray-700">
        <p className="text-sm text-gray-400">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
