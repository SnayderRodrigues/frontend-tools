import React, { useState } from "react";
import { Link } from "react-router-dom";
import resourcesData from "../../data/ResourcesData.js";
import Filter from "../../components/Filter.jsx";
import Card from "../../components/Card.jsx";

const FeaturedTools = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const scrollToTop = () => window.scrollTo({ top: 0 });

  const itemsPerPage = 8;

  const filteredTools =
    selectedCategory === "All"
      ? resourcesData
      : resourcesData.filter((tool) => tool.category === selectedCategory);

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentTools = filteredTools.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  };

  return (
    <section className="wrapper">
      <Filter
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-4 gap-8 mb-16">
        {currentTools.map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 text-2xl mb-16">
        <Link
          className={`font-semibold transition-colors px-5 py-2 border border-neutral-700 rounded-xl ${
            currentPage === 1
              ? "text-neutral-600 cursor-default"
              : "text-white hover:text-neutral-400"
          }`}
          onClick={handlePrevPage}
        >
          &lt;Previous
        </Link>
        <span>
          {currentPage} of {totalPages}
        </span>
        <Link
          className={`font-semibold transition-colors px-5 py-2 border border-neutral-700 rounded-xl ${
            currentPage === totalPages
              ? "text-neutral-600 cursor-default"
              : "text-white hover:text-neutral-400"
          }`}
          onClick={handleNextPage}
        >
          Next&gt;
        </Link>
      </div>
    </section>
  );
};

export default FeaturedTools;
