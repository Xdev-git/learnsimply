import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Learn Simply Academy",
  description: "Learn how Learn Simply Academy collects, uses, and protects your personal information. Your privacy is our priority.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="March 2026">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Introduction</h2>
        <p>
          At Learn Simply Academy, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Data We Collect</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Personal Identification:</strong> Name, email address, phone number, and mailing address.</li>
          <li><strong>Academic Data:</strong> Course progress, quiz scores, and certificate history.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device information, and site usage patterns.</li>
          <li><strong>Billing Information:</strong> Payment details (processed securely by third-party processors).</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How We Use Your Information</h2>
        <p>
          We use your data to provide, personalize, and improve our educational services. This includes processing payments, sending course updates, and analyzing site performance to enhance your learning experience.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Data Security</h2>
        <p>
            We implement industry-standard security measures, including SSL encryption and secure firewalls, to protect your personal information from unauthorized access, disclosure, or alteration.
        </p>
      </section>
    </PolicyLayout>
  );
}
