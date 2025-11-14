import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const TermsConditions = () => {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions | Ad Atelier"
        description="Read Ad Atelier's terms and conditions for our branding and advertising services, including user responsibilities, liability, and intellectual property rights."
        keywords="terms and conditions, ad atelier terms, service terms, legal terms"
      />
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-brand-mid-blue hover:text-brand-deep-blue transition-colors duration-300">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-dark-navy font-semibold">
                  Terms & Conditions
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="font-brand-heading text-4xl font-bold text-brand-dark-navy mb-4">
                Terms & Conditions
              </h1>
              <p className="text-brand-dark-navy/70 font-brand-body">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </header>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                1. Agreement to Terms
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Welcome to Ad Atelier. By accessing our website, engaging our services, or using our platform, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, you may not access our services.
              </p>
              <p className="font-brand-body text-brand-dark-navy/80">
                These Terms apply to all visitors, users, clients, and freelancers who access or use our services. Please read these Terms carefully before using our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                2. Description of Services
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Ad Atelier provides branding and advertising services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li><strong>Strategic Brand Design & Identity:</strong> Logo design, brand guidelines, visual identity systems</li>
                <li><strong>Advertising & Marketing Campaigns:</strong> Creative campaign development, media planning, execution</li>
                <li><strong>Social Media Marketing & Branding:</strong> Content creation, strategy, community management</li>
                <li><strong>Founder Credential Card Design:</strong> Professional business card and credential design</li>
                <li><strong>Platform Services:</strong> Connection of clients with vetted freelance professionals</li>
              </ul>
              <p className="font-brand-body text-brand-dark-navy/80 mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                3. User Eligibility and Account Registration
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                3.1 Eligibility
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                You must be at least 18 years old and legally capable of entering into binding contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                3.2 Account Security
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>We are not liable for any loss or damage arising from your failure to maintain account security</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                3.3 Account Accuracy
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80">
                You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                4. User Responsibilities
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                4.1 Client Responsibilities
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Provide clear, accurate project briefs and requirements</li>
                <li>Provide timely feedback and approvals as requested</li>
                <li>Supply all necessary materials, content, and assets in a timely manner</li>
                <li>Ensure you have rights to any materials you provide</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Respond to communications within reasonable timeframes</li>
                <li>Respect intellectual property rights of Ad Atelier and freelancers</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                4.2 Freelancer Responsibilities
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                As a freelancer, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Deliver high-quality work that meets professional standards</li>
                <li>Meet agreed deadlines and milestones</li>
                <li>Maintain professional communication with clients</li>
                <li>Ensure all work submitted is original or properly licensed</li>
                <li>Maintain confidentiality of client information</li>
                <li>Not engage in direct client solicitation outside the platform</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                4.3 Prohibited Activities
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Engage in fraudulent activities or payment disputes</li>
                <li>Circumvent our platform to avoid fees</li>
                <li>Use automated systems to access our services without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                5. Intellectual Property Rights
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                5.1 Our Intellectual Property
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                The Ad Atelier website, platform, and all content, features, and functionality (including but not limited to design, text, graphics, logos, icons, images, audio clips, and software) are owned by Ad Atelier and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                5.2 Client Content and Materials
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                You retain ownership of all content and materials you provide to us. By providing content, you grant Ad Atelier and our freelancers a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of delivering services to you.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                5.3 Deliverables and Final Work
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Upon full payment:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>You receive full rights to use the final approved deliverables for your business purposes</li>
                <li>Ad Atelier and freelancers retain the right to display work in portfolios and marketing materials (unless explicitly restricted by agreement)</li>
                <li>Any preliminary concepts, drafts, or unused designs remain the property of Ad Atelier/freelancers</li>
                <li>Source files are provided only when specified in the project agreement</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                5.4 Portfolio Rights
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80">
                Unless you specifically request confidentiality, Ad Atelier and our freelancers reserve the right to use completed work in portfolios, case studies, award submissions, and promotional materials. If confidentiality is required, this must be agreed upon in writing before project commencement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                6. Privacy and Data Protection
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Key points:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>We collect information necessary to provide services</li>
                <li>We protect your data using industry-standard security measures</li>
                <li>We do not sell your personal information to third parties</li>
                <li>We may share data with service providers necessary for service delivery</li>
                <li>You have the right to access, correct, or delete your personal data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                7. Project Scope and Changes
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                7.1 Project Scope
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                Each project includes a defined scope of work, deliverables, timeline, and pricing. Work outside this agreed scope will be considered additional work and may incur extra charges.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                7.2 Revision Policy
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Standard packages include a specified number of revision rounds</li>
                <li>Revisions must be requested within the agreed timeframe</li>
                <li>Major changes or new directions may be subject to additional fees</li>
                <li>Unlimited revisions do not mean unlimited new concepts</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                7.3 Timeline Delays
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80">
                We strive to meet all agreed deadlines. However, timelines may be extended if client feedback, approvals, or required materials are delayed. We are not liable for delays caused by circumstances beyond our reasonable control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                8. Limitation of Liability
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Ad Atelier shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability for any claim shall not exceed the amount paid by you for the specific service</li>
                <li>We are not liable for any loss of profits, revenue, data, or business opportunities</li>
                <li>We do not guarantee specific business results from our services</li>
                <li>We are not responsible for third-party content, websites, or services</li>
                <li>We are not liable for actions or omissions of freelancers beyond our reasonable control</li>
              </ul>
              <p className="font-brand-body text-brand-dark-navy/80 mt-4">
                Some jurisdictions do not allow limitations on implied warranties or liability for certain damages. In such cases, our liability is limited to the greatest extent permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                9. Warranties and Disclaimers
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                9.1 Service Warranty
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                We warrant that our services will be performed with reasonable skill and care in accordance with industry standards. This warranty is valid for 30 days after final delivery.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                9.2 Disclaimers
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that services will be uninterrupted or error-free</li>
                <li>Warranties regarding accuracy or reliability of results</li>
                <li>Warranties that all errors will be corrected</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                10. Indemnification
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                You agree to indemnify, defend, and hold harmless Ad Atelier, its officers, directors, employees, agents, and freelancers from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Your access to or use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Content or materials you provide to us</li>
                <li>Your use of deliverables in ways that violate laws or third-party rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                11. Termination
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                11.1 Termination by You
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                You may terminate your account or cancel services by providing written notice. Cancellation terms are subject to our Payment & Refund Policy.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                11.2 Termination by Us
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                We may terminate or suspend your account immediately, without prior notice, if you:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Breach these Terms</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Fail to make required payments</li>
                <li>Abuse our services or staff</li>
                <li>Provide false information</li>
              </ul>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                11.3 Effect of Termination
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80">
                Upon termination, your right to use our services ceases immediately. We may delete your account data after a reasonable period. Provisions of these Terms that by their nature should survive termination shall survive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                12. Dispute Resolution
              </h2>
              
              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                12.1 Informal Resolution
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                If you have any dispute with Ad Atelier, you agree to first contact us and attempt to resolve the dispute informally by contacting support@adatelier.com or calling +91 9656778508.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                12.2 Mediation
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                If informal resolution fails, both parties agree to attempt mediation before pursuing legal action. Mediation shall be conducted by a mutually agreed mediator in Kozhikode, Kerala.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                12.3 Arbitration
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                If mediation fails, any dispute shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in Kozhikode, Kerala, India.
              </p>

              <h3 className="font-brand-heading text-xl font-semibold text-brand-dark-navy mb-3 mt-6">
                12.4 Class Action Waiver
              </h3>
              <p className="font-brand-body text-brand-dark-navy/80">
                You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                13. Governing Law and Jurisdiction
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
              </p>
              <p className="font-brand-body text-brand-dark-navy/80">
                Subject to the dispute resolution provisions above, you agree that any legal action or proceeding shall be brought exclusively in the courts located in Kozhikode, Kerala, India, and you consent to the personal jurisdiction of such courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                14. Changes to Terms
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-brand-body text-brand-dark-navy/80">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last Updated" date at the top of this page</li>
                <li>Sending email notification for significant changes</li>
              </ul>
              <p className="font-brand-body text-brand-dark-navy/80 mt-4">
                Your continued use of our services after changes become effective constitutes acceptance of the revised Terms. If you do not agree to the new Terms, you must stop using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                15. Severability
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                16. Entire Agreement
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80">
                These Terms, together with our Privacy Policy and Payment & Refund Policy, constitute the entire agreement between you and Ad Atelier regarding the use of our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
                17. Contact Information
              </h2>
              <p className="font-brand-body text-brand-dark-navy/80 mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-brand-light-gray/30 p-6 rounded-lg">
                <p className="font-brand-body text-brand-dark-navy/80 mb-2">
                  <strong>Business Name:</strong> Ad Atelier
                </p>
                <p className="font-brand-body text-brand-dark-navy/80 mb-2">
                  <strong>Email:</strong> support@adatelier.com
                </p>
                <p className="font-brand-body text-brand-dark-navy/80 mb-2">
                  <strong>Phone:</strong> +91 9656778508
                </p>
                <p className="font-brand-body text-brand-dark-navy/80 mb-2">
                  <strong>Address:</strong> Ulliyeri, Kozhikode, Kerala, India
                </p>
                <p className="font-brand-body text-brand-dark-navy/80">
                  <strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </section>

            <section className="mb-8 bg-brand-light-gray/20 p-6 rounded-lg border-l-4 border-brand-mid-blue">
              <p className="font-brand-body text-brand-dark-navy/80 text-sm">
                <strong>Acknowledgment:</strong> By using Ad Atelier's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
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

export default TermsConditions;
