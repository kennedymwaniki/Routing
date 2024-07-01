import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Landmark } from "lucide-react";
import { NotebookTabs } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { School } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <Link to="/">
        <ArrowLeft className="m-4 cursor-pointer" />
      </Link>
      <h2 className="text-2xl font-bold p-4">Dashboard</h2>
      <nav className="m-10">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/dash/exams" className="flex">
              <School />
              <span>Exams</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/dash/fees" className="flex">
              <Landmark />
              <span>fees</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/dash/notes" className="flex">
              <NotebookTabs />
              <span>Notes</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/dash/cats" className="flex">
              <BookOpenCheck />
              <br />
              <span>Cats</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/dash/grades">Grades</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
