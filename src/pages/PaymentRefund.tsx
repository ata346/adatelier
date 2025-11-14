import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const PaymentRefund = () => {
  return (
    <>
      <SEOHead 
        title="Payment & Refund Policy | Ad Atelier"
        description="Learn about Ad Atelier's payment methods, refund policy, and terms for our branding and advertising services in Kerala."
        keywords="payment policy, refund policy, ad atelier payments, branding services payment"
      />
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-mid-blue hover:text-brand-deep-blue transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-brand-heading text-4xl font-bold text-brand-dark-navy mb-4">
                Payment & Refund Policy
              </h1>
              <p className="text-brand-dark-navy/70 font-brand-body">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </header>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                1. Payment Methods
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Ad Atelier accepts the following payment methods for our branding and advertising services:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Bank Transfer (NEFT/RTGS/IMPS)</li>
                <li>UPI Payments (Google Pay, PhonePe, Paytm, etc.)</li>
                <li>Credit Cards (Visa, Mastercard, American Express)</li>
                <li>Debit Cards</li>
                <li>Net Banking</li>
                <li>Digital Wallets</li>
              </ul>
              <p className="font-brand-body text-brand-dark-navy/80 mt-4">
                All payments are processed securely through our payment gateway partners. We do not store your complete payment information on our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                2. Payment Terms
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                2.1 Project-Based Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li><strong>Initial Deposit:</strong> 50% of the total project cost is required upfront to commence work</li>
                <li><strong>Milestone Payments:</strong> For larger projects, payments may be structured based on agreed milestones</li>
                <li><strong>Final Payment:</strong> Remaining 50% is due upon project completion and before final delivery of assets</li>
                <li><strong>Payment Timeline:</strong> All invoices must be paid within 7 business days of issuance</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                2.2 Subscription Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li><strong>Monthly Plans:</strong> Billed on the 1st of each month, payable in advance</li>
                <li><strong>Quarterly Plans:</strong> Billed every 3 months with a 10% discount applied</li>
                <li><strong>Annual Plans:</strong> Billed annually with a 20% discount applied</li>
                <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled 7 days before the renewal date</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                2.3 Freelancer Payments
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                For our network of freelancers:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li><strong>Payment Structure:</strong> Freelancers receive 75% of the project fee</li>
                <li><strong>Payment Schedule:</strong> Released within 5-7 business days after client approval and payment receipt</li>
                <li><strong>Payment Method:</strong> Bank transfer to registered account</li>
                <li><strong>Minimum Payout:</strong> ₹1,000 (payments below this threshold are accumulated)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                3. Late Payment Policy
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                In the event of late payment:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>A late fee of 2% per month may be applied to overdue invoices after 7 days</li>
                <li>Project work may be suspended until payment is received</li>
                <li>Final deliverables will be withheld until full payment is made</li>
                <li>For subscriptions, services will be suspended after 3 days of non-payment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                4. Refund Policy
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                4.1 Eligibility for Refunds
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Refunds may be issued under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li><strong>Service Not Delivered:</strong> If we fail to deliver the agreed services within the specified timeframe without valid reason</li>
                <li><strong>Project Cancellation:</strong> If you cancel before work has commenced (minus 10% administrative fee)</li>
                <li><strong>Technical Issues:</strong> If our platform experiences extended downtime preventing service delivery</li>
                <li><strong>Duplicate Payment:</strong> If you've been charged multiple times for the same service</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                4.2 Non-Refundable Situations
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Refunds will NOT be issued in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>After work has commenced and initial concepts/drafts have been delivered</li>
                <li>If client fails to provide necessary information or feedback causing project delays</li>
                <li>Due to changes in client requirements after project commencement</li>
                <li>For subjective dissatisfaction with creative work that meets the project brief</li>
                <li>After final delivery and client approval of work</li>
                <li>For subscription services after the service month has begun</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                4.3 Partial Refunds
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Partial refunds may be considered:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>For project cancellation after work has begun, calculated based on work completed</li>
                <li>If agreed milestones are not met due to our fault</li>
                <li>For unused subscription time (prorated to the nearest month, minus 15% processing fee)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                5. Refund Request Process
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                To request a refund:
              </p>
              <ol className="list-decimal pl-6 space-y-3 font-brand-body text-brand-dark-navy/80">
                <li>
                  <strong>Submit Request:</strong> Contact us at support@adatelier.com or call +91 9656778508 within 7 days of payment
                </li>
                <li>
                  <strong>Provide Information:</strong> Include your invoice number, payment details, and reason for refund
                </li>
                <li>
                  <strong>Review Period:</strong> We will review your request within 3-5 business days
                </li>
                <li>
                  <strong>Decision Notification:</strong> You will receive an email with our decision and explanation
                </li>
                <li>
                  <strong>Processing Time:</strong> Approved refunds are processed within 7-10 business days
                </li>
                <li>
                  <strong>Refund Method:</strong> Refunds are issued to the original payment method used
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                6. Chargebacks and Disputes
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                If you initiate a chargeback or payment dispute:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Please contact us first to resolve the issue amicably</li>
                <li>Unjustified chargebacks may result in account suspension</li>
                <li>We will provide all necessary documentation to your payment provider</li>
                <li>A ₹2,000 administrative fee may be charged for disputed chargebacks that are resolved in our favor</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                7. Currency and Pricing
              </h2>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>All prices are quoted in Indian Rupees (INR) unless otherwise stated</li>
                <li>Prices are subject to change without notice, but confirmed quotes remain valid for 30 days</li>
                <li>Applicable taxes (GST) will be added to the final invoice</li>
                <li>International payments may be subject to currency conversion fees by your bank</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                8. Contact Information
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                For payment or refund inquiries:
              </p>
              <div className="bg-brand-light-gray/30 p-6 rounded-lg">
                <p className="font-brand-body text-brand-dark-navy/80 mb-2">
                  <strong>Email:</strong> support@adatelier.com
                </p>
                <p className="font-brand-body text-brand-dark-navy/80 mb-2">
                  <strong>Phone:</strong> +91 9656778508
                </p>
                <p className="font-brand-body text-brand-dark-navy/80">
                  <strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                9. Policy Updates
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80">
                We reserve the right to modify this Payment & Refund Policy at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the updated policy. We recommend reviewing this page periodically.
              </p>
            </section>
          </article>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default PaymentRefund;
