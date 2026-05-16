import { loginAction } from "../actions";
import { SubmitButton } from "../../components/SubmitButton";

export default function LoginPage({ searchParams }: { searchParams?: Promise<{ error?: string }> }) {
  void searchParams;
  return (
    <main className="page-shell flex min-h-[70vh] items-center justify-center">
      <section className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-slate-950">Sign in</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          MVP access uses seeded accounts. Use <strong>ronald@example.com</strong> for admin or <strong>agent@example.com</strong> for a member view.
        </p>
        <form action={loginAction} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-800">Email</span>
            <input
              name="email"
              type="email"
              defaultValue="ronald@example.com"
              required
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <SubmitButton>Sign in</SubmitButton>
        </form>
      </section>
    </main>
  );
}
