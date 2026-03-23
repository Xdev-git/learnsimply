import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Learn Simply Academy",
  description: "Learn about how Learn Simply Academy uses cookies to improve your browsing experience and personalize educational content.",
};

export default function CookiesPolicy() {
  return (
    <PolicyLayout title="Cookies Policy" lastUpdated="March 2026">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device that help us provide a better browsing experience and personalized educational content.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How We Use Cookies</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Essential Cookies:</strong> Necessary for the core functionality of our educational platform.</li>
          <li><strong>Performance Cookies:</strong> Help us understand how students use our site and courses.</li>
          <li><strong>Preference Cookies:</strong> Remember your language or course settings.</li>
          <li><strong>Marketing Cookies:</strong> Allow us to reach you with relevant educational opportunities.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Managing Cookies</h2>
        <p>
          You can manage or disable cookies through your browser settings. However, some parts of our platform may not function correctly if cookies are disabled.
        </p>
      </section>

      <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Updates to This Policy</h2>
          <p>
            Learn Simply Academy may update this Cookies Policy from time to time. We recommend checking this page periodically for any changes.
          </p>
      </section>
    </PolicyLayout>
  );
}
