import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Learn Simply Academy",
  description: "Read about Learn Simply Academy's shipping policy for physical course materials and certificates.",
};

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy" lastUpdated="March 2026">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Shipping Overview</h2>
        <p>
          At Learn Simply Academy, we strive to deliver your physical course materials, textbooks, and certificates in a timely and professional manner.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Processing Time</h2>
        <p>
          Most orders are processed within 2-3 business days. Physical certificates are typically dispatched once the course is successfully completed and requirements are met.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Shipping Rates & Estimates</h2>
        <p>
          Shipping charges for your order will be calculated and displayed at checkout. Estimated delivery times range from 5-10 business days depending on your location.
        </p>
      </section>

      <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Damaged or Lost Shipments</h2>
          <p>
            Learn Simply Academy is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier or our support team to file a claim.
          </p>
      </section>
    </PolicyLayout>
  );
}
