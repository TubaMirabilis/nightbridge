import "../scss/styles.scss";
import Footer from "../comps/Footer";
import Header from "../comps/Header";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="bg-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
