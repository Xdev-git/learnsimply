import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation and Refunds | Learn Simply Academy",
  description: "Read about our cancellation and refund policies for Learn Simply Academy's educational courses and workshops.",
};

export default function CancellationRefunds() {
  return (
    <PolicyLayout title="Cancellation & Refunds" lastUpdated="March 2026">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Cancellation Policy</h2>
        <p>
          You may cancel your enrollment in a course at any time. However, the refund amount will depend on the timing of your cancellation and the type of course you have enrolled in.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Refund Eligibility</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Full Refund:</strong> If you cancel your enrollment within 7 days of purchase and have not accessed more than 20% of the course content.</li>
          <li><strong>Partial Refund:</strong> If you cancel your enrollment within 14 days of purchase and have not accessed more than 40% of the course content.</li>
          <li><strong>No Refund:</strong> For cancellations made after 14 days of purchase or for users who have completed more than 50% of the course.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Refund Process</h2>
        <p>
          To request a refund, please contact our support team at support@learnsimply.academy with your order number and the reason for your refund request.
        </p>
      </section>

      <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Exceptional Circumstances</h2>
          <p>
             Refund requests may be considered on a case-by-case basis if there are exceptional circumstances that prevent you from continuing your studies at Learn Simply Academy.
          </p>
      </section>
    </PolicyLayout>
  );
}
