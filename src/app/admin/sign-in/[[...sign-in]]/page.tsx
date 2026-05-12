import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-hassvn-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold text-gradient mb-2">HASSVN</h1>
          <p className="text-hassvn-muted-white">Admin Dashboard</p>
        </div>
        <SignIn
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: "#00d4ff",
              colorBackground: "#12121a",
              colorText: "#f0f0f5",
              colorTextSecondary: "#8a8a9a",
              colorInputBackground: "#0a0a0f",
              colorInputText: "#f0f0f5",
              borderRadius: "0.75rem",
            },
          }}
        />
      </div>
    </div>
  );
}
