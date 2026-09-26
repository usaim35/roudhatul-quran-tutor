import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthOtpForm } from "@/components/AuthOtpForm";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-16 sm:px-6">
        <AuthOtpForm mode="signup" />
      </main>
      <Footer />
    </>
  );
}
