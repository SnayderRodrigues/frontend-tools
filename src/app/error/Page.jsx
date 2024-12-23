import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper py-32">
          <h1>Página não encontrada</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
