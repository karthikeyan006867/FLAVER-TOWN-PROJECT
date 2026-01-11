import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2">Join CodeMaster</h1>
          <p className="text-sm md:text-base text-gray-400">Start your coding journey today</p>
        </div>
        <SignUp 
          fallbackRedirectUrl="/dashboard"
          signInUrl="/sign-in"
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-2xl",
              formButtonPrimary: "bg-gradient-to-r from-primary-500 to-accent-500 hover:opacity-90",
              footerActionLink: "text-primary-400 hover:text-primary-300",
            },
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "blockButton",
            }
          }}
        />
      </div>
    </div>
  );
}
