import LoginCard from "./components/login-card";
import LoginPanel from "./components/login-panel";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8 relative overflow-hidden text-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="absolute top-20 left-16 w-40 h-40 bg-slate-200 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div
        className="absolute bottom-32 right-20 w-48 h-48 bg-slate-300 rounded-full blur-3xl opacity-50 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200 relative z-10 mt-20 lg:mt-0">
        <LoginCard />
        <LoginPanel />
      </div>
    </div>
  );
}
