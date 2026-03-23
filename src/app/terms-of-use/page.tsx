import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Learn Simply Academy",
  description: "Understand the terms and conditions for using Learn Simply Academy's educational platform and services.",
};

export default function TermsOfUse() {
  return (
    <PolicyLayout title="Terms of Use" lastUpdated="March 2026">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Acceptance of Terms</h2>
        <p>
          By accessing or using Learn Simply Academy's website, courses, or services, you agree to be bound by these Terms of Use and all applicable laws and regulations.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Use of Educational Content</h2>
        <p>
          All educational materials provided by Learn Simply Academy are for your personal, non-commercial use only. You may not reproduce, distribute, or modify our content without prior written consent.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">User Responsibilities</h2>
        <p>
          As a student or user, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
      </section>

      <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Termination</h2>
          <p>
            Learn Simply Academy reserves the right to terminate or suspend access to our platform for any user who violates these terms or engages in prohibited conduct.
          </p>
      </section>
    </PolicyLayout>
  );
}
