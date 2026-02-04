import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-50">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 text-foreground">
            Why Trust WhyTennessee.com?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            We focus exclusively on Tennessee. Unlike national listing sites, we provide local insight,
            city-specific guides, and relocation-focused information designed to help people make smart
            decisions about where to live.
          </p>
          <h3 className="text-2xl font-bold text-primary mb-2">Our mission is simple:</h3>
          <p className="text-xl text-gray-500 font-light italic">
            "Make moving to Tennessee easier, clearer, and more informed."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;