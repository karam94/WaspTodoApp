import "./index.css";
import { User } from "@wasp/entities";
import logout from "@wasp/auth/logout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Notepad from "../components/Notepad/Notepad";

const HomePage = ({ user }: { user: User }) => {
  return (
    <div className="bg-amber-900 min-h-screen flex flex-col items-center justify-center relative">
      <Header logout={logout} />
      <Notepad user={user} />
      <Footer />
    </div>
  );
};

export default HomePage;
