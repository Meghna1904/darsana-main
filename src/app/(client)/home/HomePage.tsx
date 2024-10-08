// import "../../globals.css"
// import React from 'react';
// import HeroCarousel from '@/components/homepage/Hero';
// import Event from "@/components/homepage/event";
// import { StaticImageData } from 'next/image';
// import image17 from '@/assets/home/image17.png';
// import bijuschreiyanhomeheroimage from '@/assets/home/bijuschreiyanhomeheroimage.png';
// import darsanaCommunityEventProgram from '@/assets/home/darsanaCommunityEventProgram.png';

// const slideData = [
//     {
//         imageSrc: image17,
//         title: 'Biju Cherian Scholarship (BCS) program - Slide 1',
//     },
//     {
//         imageSrc: bijuschreiyanhomeheroimage,
//         title: 'Biju Cherian Scholarship (BCS) program - Slide 2',
//     },
//     {
//         imageSrc: darsanaCommunityEventProgram,
//         title: 'Biju Cherian Scholarship (BCS) program - Slide 3',
//     },
// ];

// // Define the carousel items
// const eventItems = [
//     {
//         imageSrc: image17,
//         title: 'A day with our wonderful children',
//         description: 'Join us for a day filled with activities and fun with our children.',
//     },
//     {
//         imageSrc: bijuschreiyanhomeheroimage,
//         title: 'Seminar: Caring for children with autism',
//         description: 'Learn valuable insights and techniques for supporting children with autism.',
//     },
//     {
//         imageSrc: darsanaCommunityEventProgram,
//         title: 'Community Event Program',
//         description: 'Participate in our community programs and make a difference.',
//     },
//     {
//         imageSrc: image17,
//         title: 'A day with our wonderful children',
//         description: 'Join us for a day filled with activities and fun with our children.',
//     },
//     {
//         imageSrc: bijuschreiyanhomeheroimage,
//         title: 'Seminar: Caring for children with autism',
//         description: 'Learn valuable insights and techniques for supporting children with autism.',
//     },
//     {
//         imageSrc: darsanaCommunityEventProgram,
//         title: 'Community Event Program',
//         description: 'Participate in our community programs and make a difference.',
//     },

// ];


// const HomePage: React.FC = () => {
//     return (
//         <div>
//             <HeroCarousel
//                 slideData={slideData}
//                 autoPlay={true}
//                 interval={5000}
//             />


//             {/* Statistics Section */}
//             <section className="py-16 bg-white">
//                 <div className="container mx-auto text-center px-4">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//                         <div className="mb-8 md:mb-0">
//                             <h2 className="text-2xl md:text-3xl font-bold">20M</h2>
//                             <p>Number of Supporters</p>
//                         </div>
//                         <div className="mb-8 md:mb-0">
//                             <h2 className="text-2xl md:text-3xl font-bold">15K+</h2>
//                             <p>Volunteers Worldwide</p>
//                         </div>
//                         <div className="mb-8 md:mb-0">
//                             <h2 className="text-2xl md:text-3xl font-bold">68K+</h2>
//                             <p>We've Helped Raise</p>
//                         </div>
//                         <div>
//                             <h2 className="text-2xl md:text-3xl font-bold">10M+</h2>
//                             <p>Projects Funded</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Events Section */}
//             {/* <section className="py-3 bg-gray-100">
//                 <div className="container mx-auto text-center px-4">
//                     <h2 className="text-2xl md:text-3xl font-bold mb-12">Our Events</h2>
//                     <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
//                         <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-64">
//                             <p className="text-blue-500 font-semibold mb-2">13 APR</p>
//                             <h3 className="text-xl font-bold">A day with our wonderful children</h3>
//                         </div>
//                         <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-64">
//                             <p className="text-blue-500 font-semibold mb-2">25 APR</p>
//                             <h3 className="text-xl font-bold">Seminar: Caring for children with autism</h3>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}
//             <Event items={eventItems} />

//             {/* Features Section */}
//             <section className="py-16 bg-white">
//                 <div className="container mx-auto text-center px-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//                         <div className="mb-8 md:mb-0">
//                             <div className="bg-gray-200 p-16 mb-4">
//                                 <p className="text-gray-500">Conversation Image</p>
//                             </div>
//                             <h3 className="text-xl font-bold mt-4 mb-2">Conversation</h3>
//                             <p>We Analyse Your Website's Structure, Internal Architecture & Other Key</p>
//                         </div>
//                         <div className="mb-8 md:mb-0">
//                             <div className="bg-gray-200 p-16 mb-4">
//                                 <p className="text-gray-500">Technical Capabilities Image</p>
//                             </div>
//                             <h3 className="text-xl font-bold mt-4 mb-2">Technical Capabilities</h3>
//                             <p>We Are Well Known Within The Industry For Our Technical Capabilities</p>
//                         </div>
//                         <div>
//                             <div className="bg-gray-200 p-16 mb-4">
//                                 <p className="text-gray-500">Gallery Image</p>
//                             </div>
//                             <h3 className="text-xl font-bold mt-4 mb-2">Gallery</h3>
//                             <p>4517 Washington Ave. Manchester Kentucky 39495</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Discover Section */}
//             <section className="py-16 bg-gray-100">
//                 <div className="container mx-auto text-center px-4">
//                     <h2 className="text-2xl md:text-3xl font-bold mb-8">Discover the Magic of Locally Sourced Treasures!</h2>
//                     <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Explore</button>
//                 </div>
//             </section>

//             {/* Gallery Section */}
//             <section className="py-16 bg-white">
//                 <div className="container mx-auto text-center px-4">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                         <div className="bg-gray-200 p-16">
//                             <p className="text-gray-500">Image 1</p>
//                         </div>
//                         <div className="bg-gray-200 p-16">
//                             <p className="text-gray-500">Image 2</p>
//                         </div>
//                         <div className="bg-gray-200 p-16">
//                             <p className="text-gray-500">Image 3</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer Section */}
//             <footer className="py-16 bg-gray-800 text-white">
//                 <div className="container mx-auto text-center px-4">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//                         <a href="/contactUs" className="text-gray-400">Contact us</a>
//                         <a href="#" className="text-gray-400">About us</a>
//                         <a href="#" className="text-gray-400">Chapters</a>
//                         <a href="#" className="text-gray-400">Eye magazine</a>
//                     </div>
//                     <div className="flex flex-wrap justify-center">
//                         <a href="#" className="text-gray-400 mx-4 mb-4">Facebook</a>
//                         <a href="#" className="text-gray-400 mx-4 mb-4">Instagram</a>
//                         <a href="#" className="text-gray-400 mx-4 mb-4">YouTube</a>
//                         <a href="#" className="text-gray-400 mx-4 mb-4">LinkedIn</a>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default HomePage;





