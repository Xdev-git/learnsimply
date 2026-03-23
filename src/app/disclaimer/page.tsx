import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Learn Simply Academy",
  description: "Read our disclaimer regarding the use of information and educational materials provided by Learn Simply Academy.",
};

export default function Disclaimer() {
  return (
    <PolicyLayout title="Disclaimer" lastUpdated="March 2026">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Educational Purpose Only</h2>
        <p>
          The information and content provided by Learn Simply Academy's website, courses, and materials are for educational and informational purposes only.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">No Professional Advice</h2>
        <p>
          Our courses do not constitute professional, legal, or financial advice. We strongly recommend seeking professional consultation for specific situations.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Limitation of Liability</h2>
        <p>
          Learn Simply Academy shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your access to or use of our educational services.
        </p>
      </section>

      <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">External Links</h2>
          <p>
            Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these third-party sites.
          </p>
      </section>
    </PolicyLayout>
  );
}
