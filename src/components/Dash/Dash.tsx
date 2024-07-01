import Footer from "../Footer";

import AppLayout from "./AppLayout";
import Side from "./Side";
const Dash = () => {
  return (
    <div>
      <div className="flex">
        <Side />
        <AppLayout />
      </div>
      <Footer />
    </div>
  );
};

export default Dash;
