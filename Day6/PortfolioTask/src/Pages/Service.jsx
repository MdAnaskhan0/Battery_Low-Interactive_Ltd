// eslint-disable-next-line no-unused-vars
import React from "react";
import CardDetails from "../Components/CardDetails";
import Testimonial from "../Components/Testimonial";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Service = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Resume Title and Description */}
        <section className="text-left mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Services</h3>
          <hr className="w-16 border-t-2 border-blue-500 mb-6" />
          <p className="text-md md:text-xl text-gray-600 leading-relaxed text-justify">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </section>

        {/* Service Card */}
        <CardDetails />

        {/* Client Reviews */}
        <section className="text-left my-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h3>
          <hr className="w-16 border-t-2 border-blue-500 mb-6" />
          <p className="text-md md:text-xl text-gray-600 leading-relaxed text-justify">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </section>

        {/* Client Reviews */}
        <Testimonial />
        
      </div>
    </>
  );
};

export default Service;
