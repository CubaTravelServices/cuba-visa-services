import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationCard from "@/components/ApplicationCard";
import { useSearchParams, Link } from "react-router-dom";

const Apply = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "standard";

  const planNames: Record<string, string> = {
    standard: "Standard Cuba E-Visa",
    express: "Express Cuba E-Visa",
    signature: "Signature Service Cuba E-Visa",
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main className="bg-navy min-h-[80vh] section-padding">
        <div className="max-w-xl mx-auto">
          <Link to="/" className="text-gold text-sm hover:underline mb-6 inline-block">← Back to Home</Link>
          <p className="eyebrow">You selected</p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
            {planNames[plan] || planNames.standard}
          </h1>
          <ApplicationCard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
