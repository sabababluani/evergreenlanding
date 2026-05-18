import LoginCard from "./components/login-card";
import LoginPanel from "./components/login-panel";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FCF8ED] flex items-center justify-center p-4 sm:p-8 py-16 lg:py-24 relative overflow-hidden text-[#0B2B1D]">
      <div className="absolute top-24 right-10 w-56 h-56 bg-[#D4E67B]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#FFCE50]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-[40px] overflow-hidden shadow-lg bg-white border border-[#0B2B1D]/10 relative z-10">
        <LoginCard />
        <LoginPanel />
      </div>
    </div>
  );
}
