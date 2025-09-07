import Navbar from "../../component/Navbar";
import SignupForm from "../../component/SignupForm";
import Footer from "../../component/Footer";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SignupForm />
      <Footer />
    </div>
  );
}
