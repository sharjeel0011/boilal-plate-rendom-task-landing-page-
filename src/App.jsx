// //1st final landing page this is soo good for use 
import React, { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-lg fixed w-full top-0 z-10 animate__animated animate__fadeInDown">
        <div className="text-2xl font-bold text-indigo-600">BrandName</div>
        <ul className="flex space-x-8">
          <li><a href="#" className="text-gray-700 hover:text-indigo-600">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-indigo-600">Features</a></li>
          <li><a href="#" className="text-gray-700 hover:text-indigo-600">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a></li>
        </ul>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition transform hover:scale-110 hover:shadow-lg">
          Get Started
        </button>
      </nav>

     
     
      {/* Hero Section */}
<section
  className="h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?fashion)' }}
>
  <div className="text-center animate__animated animate__fadeInDown">
    <h1
      className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate__animated animate__bounceIn"
      style={{ animationDelay: '0.3s' }}
    >
      Welcome to BrandName
    </h1>
    <p className="text-2xl text-gray-200 mt-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
      Discover the best styles for every occasion
    </p>
    <button
      className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition transform hover:scale-110 animate__animated animate__fadeInUp"
      style={{ animationDelay: '1.3s' }}
    >
      Explore Now
    </button>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-up">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-3a2 2 0 00-2-2h-1.28a2 2 0 01-1.705-.959l-1.88-3.12A4 4 0 0011.28 6H7a4 4 0 00-4 4v5z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Materials</h3>
              <p className="text-gray-600">Top-notch clothing materials guaranteeing durability and comfort.</p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm-6 8h12a2 2 0 012 2v1H4v-1a2 2 0 012-2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Fit</h3>
              <p className="text-gray-600">Tailored perfection for every body type ensuring the perfect fit.</p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Affordable Prices</h3>
              <p className="text-gray-600">Offering high-quality products at affordable prices for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-right">
              <p className="text-lg italic text-gray-600 mb-4">"The quality of the clothes is unmatched. Absolutely love shopping here!"</p>
              <p className="text-indigo-600 font-bold">- Sarah W.</p>
            </div>

            <div className="p-6 bg-gray-50 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-up">
              <p className="text-lg italic text-gray-600 mb-4">"The customer service was exceptional, and the fit was perfect!"</p>
              <p className="text-indigo-600 font-bold">- Jason M.</p>
            </div>

            <div className="p-6 bg-gray-50 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-left">
              <p className="text-lg italic text-gray-600 mb-4">"Fashionable and affordable, what more could you ask for?"</p>
              <p className="text-indigo-600 font-bold">- Alicia K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg mb-8">Stay updated with the latest trends and offers.</p>
          <div className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-4 w-1/2 rounded-l-lg text-gray-800" />
            <button className="p-4 bg-yellow-400 text-gray-800 font-bold rounded-r-lg transition transform hover:scale-110 hover:shadow-lg">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-white">
        <p>&copy; 2024 BrandName. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

































// 2nd good and best markitting page ready 
// import React, { useEffect, useState } from 'react';
// import 'animate.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const MarketingLandingPage = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     // Set a timeout to hide the loading screen after 3 seconds
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     // Cleanup timeout on unmount
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         {/* Loading Screen */}
//         <div className="text-center animate__animated animate__fadeIn">
//           <h1 className="text-4xl font-bold text-indigo-600">Welcome to MarketingPro</h1>
//           <p className="mt-4 text-lg">Loading, please wait...</p>
//           {/* You can also add a spinner or animation here */}
//           <div className="mt-8">
//             <div className="loader"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100">
    
//       <nav className="flex justify-between items-center p-6 bg-white shadow-lg fixed w-full top-0 z-10 animate__animated animate__fadeInDown">
//   <div className="text-2xl font-bold text-indigo-600">MarketingPro</div>
  
//   {/* This div will take the remaining space and align the ul to the right */}
//   <div className="flex-grow"></div>

//   <div className="flex items-center">
//     <ul className="flex space-x-8">
//       <li><a href="#" className="text-gray-700 hover:text-indigo-600">Home</a></li>
//       <li><a href="#" className="text-gray-700 hover:text-indigo-600">Services</a></li>
//       <li><a href="#" className="text-gray-700 hover:text-indigo-600">Testimonials</a></li>
//       <li><a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a></li>
//     </ul>
//     <button className="ml-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition transform hover:scale-110 hover:shadow-lg">
//       Get a Quote
//     </button>
//   </div>
// </nav>


//       {/* Hero Section */}
//       <section
//         className="hero-section h-screen flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?business,office)' }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="text-center text-white z-10">
//           <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate__animated animate__fadeInDown">
//             Transform Your Business
//           </h1>
//           <p className="text-2xl mt-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s' }}>
//             With Cutting-Edge Marketing Strategies
//           </p>
//           <button
//             className="mt-8 px-8 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition transform hover:scale-110 animate__animated animate__fadeInUp"
//             style={{ animationDelay: '1s' }}
//           >
//             Get Started Today
//           </button>
//         </div>
//       </section>
// {/* Image Gallery Section */}
// <section className="py-16 bg-gray-50">
//   <div className="container mx-auto text-center">
//     <h2 className="text-4xl font-bold mb-12">Our Recent Work</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-lg">
//         <img
//           src="imgform.webp"
//           alt="Branding Work"
//           className="w-full h-full object-cover transition transform hover:scale-105"
//         />
//       </div>
//       <div data-aos="fade-up" className="overflow-hidden rounded-lg shadow-lg" data-aos-delay="200">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7DKSArLoc2-WjheGALHTTfPHXBi4oGJJrQ&s"
//           alt="Marketing Campaign"
//           className="w-full h-full object-cover transition transform hover:scale-105"
//         />
//       </div>
//       <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-lg" data-aos-delay="400">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjcuuvCS7rYYWdiet-XAEx3WAf65GvdlkFg&s"
//           alt="Advertising"
//           className="w-full h-full object-cover transition transform hover:scale-105"
//         />
//       </div>
//     </div>
//   </div>
// </section>
     
//             {/* Services Section */}
//             <section className="py-20 bg-gray-50">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-up">
//               <div className="text-blue-500 mb-4">
//                 <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm-6 8h12a2 2 0 012 2v1H4v-1a2 2 0 012-2z"></path></svg>
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Brand Strategy</h3>
//               <p className="text-gray-600">We craft unique strategies to enhance your brand’s presence and visibility.</p>
//             </div>

//             <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
//               <div className="text-blue-500 mb-4">
//                 <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-7-9-7-9 7 9 7z"></path></svg>
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
//               <p className="text-gray-600">Our experts drive results through tailored digital campaigns that grow your business.</p>
//             </div>

//             <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
//               <div className="text-blue-500 mb-4">
//                 <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-3a2 2 0 00-2-2h-1.28a2 2 0 01-1.705-.959l-1.88-3.12A4 4 0 0011.28 6H7a4 4 0 00-4 4v5z"></path></svg>
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
//               <p className="text-gray-600">We create compelling content that drives engagement and boosts conversions.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-6 bg-gray-50 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-right">
//               <p className="text-lg italic text-gray-600 mb-4">"MarketingPro transformed our online presence. We're seeing incredible results!"</p>
//               <p className="text-indigo-600 font-bold">- Lisa G.</p>
//             </div>

//             <div className="p-6 bg-gray-50 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-up">
//               <p className="text-lg italic text-gray-600 mb-4">"They helped us craft an unbeatable brand strategy. Highly recommended!"</p>
//               <p className="text-indigo-600 font-bold">- John D.</p>
//             </div>

//             <div className="p-6 bg-gray-50 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105" data-aos="fade-left">
//               <p className="text-lg italic text-gray-600 mb-4">"Our business has grown exponentially since partnering with MarketingPro."</p>
//               <p className="text-indigo-600 font-bold">- Clara S.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-indigo-600 text-white">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
//           <p className="text-lg mb-8">Let us help you with your marketing strategy and watch your business thrive.</p>
//           <button className="px-6 py-3 bg-yellow-500 text-gray-800 rounded hover:bg-yellow-600 transition transform hover:scale-110 hover:shadow-lg">
//             Contact Us Now
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 py-8 text-center text-white">
//         <p>&copy; 2024 MarketingPro. All Rights Reserved.</p>
//       </footer>
//     </div>
    



//   );
// };

// export default MarketingLandingPage;














// //3rd website is now here

// import React, { useEffect } from 'react';
// import 'animate.css'; // Ensure you have animate.css included in your project
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const DoctorAppointmentLanding = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-blue-400 to-indigo-600 min-h-screen flex flex-col items-center text-white">
//       {/* Animated Navigation Bar */}
//       <nav className="flex justify-between items-center p-6 bg-white shadow-lg fixed w-full top-0 z-10">
//         <div className="text-2xl font-bold text-indigo-600">Doctor Appointment</div>
//         <ul className="flex space-x-8 text-gray-700">
//           <li><a href="#" className="hover:text-indigo-600 transition duration-300">Home</a></li>
//           <li><a href="#" className="hover:text-indigo-600 transition duration-300">Services</a></li>
//           <li><a href="#" className="hover:text-indigo-600 transition duration-300">Testimonials</a></li>
//           <li><a href="#" className="hover:text-indigo-600 transition duration-300">Contact</a></li>
//         </ul>
//         <button className="px-6 py-2 bg-indigo-600 text-white rounded shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105">
//           Get Started
//         </button>
//       </nav>

//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center mt-24 text-center" data-aos="fade-up">
//         <h1 className="text-5xl font-bold mb-4">Your Health, Our Priority</h1>
//         <p className="text-xl mb-8">Book your appointments with top doctors effortlessly.</p>
//         <button className="px-8 py-3 bg-yellow-400 text-gray-800 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-110">
//           Book Now
//         </button>
//       </div>

//       {/* Animated Card Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-10" data-aos="fade-up">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
//             <img src={`https://via.placeholder.com/300?text=Doctor+${index + 1}`} alt={`Doctor ${index + 1}`} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-bold text-gray-800">Doctor Name {index + 1}</h2>
//               <p className="text-gray-600">Specialization</p>
//               <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
//                 View Profile
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Additional Sections */}
//       <div className="bg-white rounded-lg shadow-lg p-8 mt-10" data-aos="fade-up" data-aos-delay="200">
//         <h2 className="text-3xl font-bold text-indigo-600 mb-4">Why Choose Us?</h2>
//         <p className="text-gray-700 mb-4">We provide top-notch services with experienced professionals to ensure your health is in the best hands.</p>
//         <ul className="list-disc list-inside mb-4">
//           <li>Qualified Medical Professionals</li>
//           <li>State-of-the-Art Facilities</li>
//           <li>24/7 Availability</li>
//           <li>Personalized Care Plans</li>
//         </ul>
//       </div>

//       {/* Testimonials Section */}
//       <div className="bg-blue-100 rounded-lg shadow-lg p-8 mt-10" data-aos="fade-up" data-aos-delay="400">
//         <h2 className="text-3xl font-bold text-indigo-600 mb-4">What Our Patients Say</h2>
//         <p className="text-gray-700 mb-4">"I had a wonderful experience! The doctors are very attentive and made me feel comfortable throughout the process."</p>
//         <p className="text-gray-700 mb-4">- Jane Doe</p>
//       </div>

//       {/* Call to Action Section */}
//       <div className="flex flex-col items-center justify-center bg-indigo-600 text-white p-8 mt-10" data-aos="fade-up" data-aos-delay="600">
//         <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
//         <button className="px-8 py-3 bg-yellow-400 text-gray-800 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-110">
//           Schedule an Appointment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DoctorAppointmentLanding;

















// // 4th is here



// import React, { useEffect, useRef } from 'react';
// import 'animate.css'; // Ensure you have animate.css included in your project

// const TravelAgencyLanding = () => {
//   const sectionsRef = useRef([]);

//   const handleScrollAnimation = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('animate__animated', 'animate__fadeInUp'); // Add your desired animation classes
//         observer.unobserve(entry.target); // Stop observing once it's animated
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleScrollAnimation);
//     sectionsRef.current.forEach(section => {
//       if (section) {
//         observer.observe(section);
//       }
//     });
    
//     return () => observer.disconnect(); // Clean up the observer on unmount
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col items-center text-white">
//       {/* Animated Navigation Bar */}
//       <nav className="flex justify-between items-center p-6 bg-white shadow-lg fixed w-full top-0 z-10 animate__animated animate__fadeInDown">
//         <div className="text-2xl font-bold text-green-600 animate__animated animate__fadeIn">Travel Agency</div>
//         <ul className="flex space-x-8 text-gray-700 animate__animated animate__fadeIn">
//           <li><a href="#" className="hover:text-green-600 transition duration-300">Home</a></li>
//           <li><a href="#" className="hover:text-green-600 transition duration-300">Destinations</a></li>
//           <li><a href="#" className="hover:text-green-600 transition duration-300">About Us</a></li>
//           <li><a href="#" className="hover:text-green-600 transition duration-300">Contact</a></li>
//         </ul>
//         <button className="px-6 py-2 bg-green-600 text-white rounded shadow-lg hover:bg-green-500 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn">
//           Get Started
//         </button>
//       </nav>

//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center mt-24 text-center animate__animated animate__fadeIn">
//         <h1 className="text-6xl font-bold mb-4 animate__animated animate__zoomIn">Explore the World with Us!</h1>
//         <p className="text-xl mb-8 animate__animated animate__fadeIn">Your dream vacation awaits. Let us make it a reality.</p>
//         <button className="px-8 py-3 bg-yellow-400 text-gray-800 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-110 animate__animated animate__bounce">
//           Book Now
//         </button>
//       </div>

//       {/* Destinations Section */}
//       <div ref={el => (sectionsRef.current[0] = el)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-10">
//         {Array.from({ length: 6 }).map((_, index) => {
//           const images = [
//             'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
//             'https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg',
//             'https://cdn.pixabay.com/photo/2023/03/17/02/42/architecture-7857832_640.jpg',
//             'https://cdn.pixabay.com/photo/2019/11/23/03/08/valley-4646114_640.jpg',
//             'https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_1280.jpg',
//             'https://cdn.pixabay.com/photo/2020/02/28/21/15/space-4888643_1280.jpg',
//           ];
//           const colors = ['bg-red-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400', 'bg-pink-400'];

//           return (
//             <div
//               key={index}
//               ref={el => (sectionsRef.current[index + 1] = el)} // Reference for scrolling
//               className={`rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
//             >
//               <img
//                 src={images[index]}
//                 alt={`Destination ${index + 1}`}
//                 className="w-full h-48 object-cover rounded-t-lg transition duration-300 transform hover:scale-110"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-bold text-white">{`Destination ${index + 1}`}</h2>
//                 <p className="text-white opacity-80">A beautiful place to visit.</p>
//                 <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-200 transition duration-300 transform hover:scale-105">
//                   Explore
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Section Divider */}
//       <div className="my-10 w-full h-1 bg-white opacity-25"></div>

//       {/* Why Choose Us Section */}
//       <div ref={el => (sectionsRef.current[7] = el)} className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg p-8 mt-10 w-11/12 md:w-3/4 lg:w-1/2">
//         <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
//         <p className="text-gray-100 mb-4">We offer the best travel packages with unbeatable prices.</p>
//         <ul className="list-disc list-inside mb-4">
//           <li className="flex items-center mb-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" /></svg>
//             Personalized Travel Plans
//           </li>
//           <li className="flex items-center mb-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" /></svg>
//             24/7 Customer Support
//           </li>
//           <li className="flex items-center mb-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" /></svg>
//             Best Price Guarantee
//           </li>
//         </ul>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white w-full py-4 mt-10">
//         <div className="text-center text-gray-600">
//           <p>© 2024 Travel Agency. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default TravelAgencyLanding;





















//last 5th
// import React, { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
// import 'swiper/css'; // Import Swiper styles
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Animated } from "react-animated-css";
// import { Pagination, Navigation } from 'swiper/modules';
//  // Import Swiper modules

// import 'animate.css'; // For the animations

// const PersonalCareLanding = () => {
//   const sectionsRef = useRef([]);

//   const handleScrollAnimation = (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('animate__animated', 'animate__fadeInUp');
//         observer.unobserve(entry.target); 
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleScrollAnimation);
//     sectionsRef.current.forEach((section) => {
//       if (section) {
//         observer.observe(section);
//       }
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center text-gray-900">
//       {/* Navigation Bar */}
//       <nav className="flex justify-between items-center w-full p-6 bg-white shadow-md fixed top-0 z-10">
//         <div className="text-2xl font-bold text-pink-500">CarePlus</div>
//         <ul className="flex space-x-6 text-gray-700">
//           <li><a href="#" className="hover:text-pink-500 transition">Home</a></li>
//           <li><a href="#" className="hover:text-pink-500 transition">Products</a></li>
//           <li><a href="#" className="hover:text-pink-500 transition">Services</a></li>
//           <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
//         </ul>
//         <button className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-400 transition">Get Started</button>
//       </nav>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center mt-24 w-full text-center">
//         <h1 className="text-5xl font-extrabold mb-6 animate__animated animate__zoomIn">Your Beauty, Our Care</h1>
//         <p className="text-lg mb-6 animate__animated animate__fadeIn">Explore a world of premium personal care products.</p>
//         <button className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-400 transition transform hover:scale-105">
//           Shop Now
//         </button>
//       </section>

//       {/* Featured Products Section with Swiper.js Slider */}
//       <div ref={(el) => (sectionsRef.current[0] = el)} className="p-6 mt-10 w-full">
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[Pagination, Navigation]}
//           className="mySwiper"
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {Array.from({ length: 6 }).map((_, index) => {
//             const images = [
//               'https://via.placeholder.com/400x400/FFC0CB/808080?text=Care+Product+1',
//               'https://via.placeholder.com/400x400/FFC0CB/808080?text=Care+Product+2',
//               'https://via.placeholder.com/400x400/FFC0CB/808080?text=Care+Product+3',
//             ];

//             return (
//               <SwiperSlide key={index}>
//                 <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
//                   <img
//                     src={images[index % 3]}
//                     alt={`Product ${index + 1}`}
//                     className="w-full h-64 object-cover transition duration-300 transform hover:scale-105"
//                   />
//                   <div className="p-4">
//                     <h2 className="text-xl font-bold text-pink-500 mb-2">Product {index + 1}</h2>
//                     <p className="text-gray-600">Luxurious personal care product to enhance your beauty.</p>
//                     <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-400 transition transform hover:scale-105">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
 




//       {/* Why Choose Us Section */}
      
//       <div ref={(el) => (sectionsRef.current[7] = el)} className="bg-purple-500 rounded-lg shadow-lg p-8 mt-10 w-11/12 md:w-3/4 lg:w-1/2 text-white">
//         <h2 className="text-4xl font-bold mb-6">Why CarePlus?</h2>
//         <p className="mb-4">We offer the best in beauty and personal care, with unbeatable prices and quality.</p>
//         <ul className="list-disc list-inside mb-4">
//           <li className="flex items-center mb-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" />
//             </svg>
//             Premium Quality Products
//           </li>
//           <li className="flex items-center mb-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" />
//             </svg>
//             Affordable Prices
//           </li>
//           <li className="flex items-center mb-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 animate__animated animate__bounce" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M10 2a1 1 0 011 1v5.293l4.146 4.147a1 1 0 11-1.415 1.415L10 10.414l-3.732 3.733a1 1 0 11-1.415-1.415L9 8.293V3a1 1 0 011-1z" />
//             </svg>
//             Expert Recommendations
//           </li>
//         </ul>
//         <button className="mt-4 px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg shadow-md hover:bg-yellow-400 transition transform hover:scale-105">
//           Get Started
//         </button>
//       </div>


// {/* Our Services Section */}
// <div className="bg-white py-12 text-center">
//   <h2 className="text-4xl font-bold text-gray-900 mb-8" data-aos="fade-up">Our Services</h2>
//   <div className="flex flex-wrap justify-center">
//     <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="100">
//       <div className="bg-blue-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
//         <h3 className="text-2xl font-bold text-white mb-4">Skincare Treatments</h3>
//         <p className="text-white">Experience personalized skincare routines designed for your needs.</p>
//       </div>
//     </div>
//     <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="200">
//       <div className="bg-green-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
//         <h3 className="text-2xl font-bold text-white mb-4">Haircare Solutions</h3>
//         <p className="text-white">Top-rated haircare products for healthy and vibrant hair.</p>
//       </div>
//     </div>
//     <div className="p-4 w-80" data-aos="zoom-in" data-aos-delay="300">
//       <div className="bg-purple-500 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
//         <h3 className="text-2xl font-bold text-white mb-4">Wellness Programs</h3>
//         <p className="text-white">Holistic programs tailored to help you feel your best.</p>
//       </div>
//     </div>
//   </div>
// </div>

// {/* Testimonials Section */}
// <div className="bg-gray-100 py-12 text-center" data-aos="fade-up">
//   <h2 className="text-4xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
//   <div className="swiper-container">
//     <div className="swiper-wrapper">
//       <div className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
//         <p className="mb-4">"CarePlus has transformed my skincare routine, and my skin has never looked better!"</p>
//         <span className="block text-gray-600">- Sarah A.</span>
//       </div>
//       <div className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
//         <p className="mb-4">"The haircare solutions are top-notch, and I've seen great results!"</p>
//         <span className="block text-gray-600">- Megan L.</span>
//       </div>
//       <div className="swiper-slide bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
//         <p className="mb-4">"Amazing wellness programs that helped me find balance in my life."</p>
//         <span className="block text-gray-600">- Julia R.</span>
//       </div>
//     </div>
//     {/* Swiper Navigation */}
//     <div className="swiper-pagination"></div>
//   </div>
// </div>

// {/* Newsletter Section */}
// <div className="bg-purple-500 py-12 text-center text-white" data-aos="fade-up">
//   <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
//   <p className="mb-4">Stay updated with the latest in beauty and wellness trends.</p>
//   <div className="mt-4 flex justify-center">
//     <input
//       type="email"
//       placeholder="Enter your email"
//       className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
//     />
//     <button className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-r-lg hover:bg-yellow-400 transition transform hover:scale-105">
//       Subscribe
//     </button>
//   </div>
// </div>




//   {/* // Footer  */}
//       <footer className="bg-white text-gray-800 w-full p-6 mt-10">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="text-lg font-bold text-pink-500">CarePlus</div>
//           <ul className="flex space-x-6 mt-4 md:mt-0">
//             <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
//             <li><a href="#" className="hover:text-pink-500">Contact Us</a></li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PersonalCareLanding;



