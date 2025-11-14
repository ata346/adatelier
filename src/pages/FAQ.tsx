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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions | Ad Atelier"
        description="Find answers to common questions about Ad Atelier's branding and advertising services, pricing, timelines, and how we work with clients and freelancers."
        keywords="FAQ, ad atelier questions, branding services FAQ, freelancer questions, pricing questions"
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
                  FAQ
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-12">
            <h1 className="font-brand-heading text-4xl font-bold text-brand-dark-navy mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-brand-dark-navy/70 font-brand-body text-lg">
              Everything you need to know about our services, pricing, and processes
            </p>
          </header>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-6 pb-2 border-b-2 border-brand-mid-blue/20">
              Services
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="services-1" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What services does Ad Atelier offer?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Ad Atelier offers comprehensive branding and advertising services including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Strategic Brand Design & Identity (logos, brand guidelines, visual identity)</li>
                    <li>Advertising & Marketing Campaigns (creative development, media planning, execution)</li>
                    <li>Social Media Marketing & Branding (content creation, strategy, management)</li>
                    <li>Founder Credential Card Design (professional business cards)</li>
                    <li>Complete brand development from concept to execution</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services-2" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Do you work with businesses of all sizes?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Yes! We work with startups, small businesses, established companies, and enterprises. Our flexible service packages are designed to accommodate different business sizes and budgets. Whether you're a solo entrepreneur or a large corporation, we have solutions tailored to your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services-3" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Can I request custom services not listed in your packages?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Absolutely! While we offer structured packages, we're happy to customize our services to meet your specific needs. Contact us with your requirements, and we'll create a tailored proposal with pricing based on the scope of work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services-4" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Do you provide ongoing support after project completion?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Yes, we offer post-project support including minor tweaks within 30 days of delivery. For ongoing needs, we offer monthly retainer packages for continuous support, updates, and additional design work. We're committed to long-term partnerships with our clients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services-5" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What industries do you specialize in?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Our team has experience across diverse industries including technology, healthcare, retail, hospitality, education, finance, real estate, and more. Our Kerala-based expertise gives us unique insights into local markets while maintaining global design standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Pricing Section */}
          <section className="mb-12">
            <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-6 pb-2 border-b-2 border-brand-mid-blue/20">
              Pricing
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="pricing-1" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  How much do your services cost?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Our pricing varies based on the scope and complexity of your project. We offer three main tiers:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Basic Package:</strong> Starting at ₹29,999 - Ideal for startups and small projects</li>
                    <li><strong>Professional Package:</strong> Starting at ₹59,999 - Perfect for growing businesses</li>
                    <li><strong>Enterprise Package:</strong> Custom pricing - Comprehensive solutions for large organizations</li>
                  </ul>
                  <p className="mt-2">Contact us for a detailed quote based on your specific requirements.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-2" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  We accept multiple payment methods including bank transfers (NEFT/RTGS/IMPS), UPI payments, credit/debit cards, net banking, and digital wallets. All payments are processed securely through our payment gateway partners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-3" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Do you require an upfront deposit?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Yes, we require a 50% upfront deposit to commence work on your project. This ensures commitment from both parties and allows us to allocate resources to your project. The remaining 50% is due upon project completion before final delivery of assets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-4" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Are there any hidden fees?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  No! We believe in transparent pricing. All costs are outlined clearly in your proposal. The only additional charges you might incur are for scope changes or additional work requested outside the agreed project brief. We always get your approval before proceeding with any extra work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-5" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Do you offer discounts for long-term projects?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Yes! We offer discounts for quarterly (10% off) and annual retainer packages (20% off). We also provide special pricing for bulk projects and multi-service bundles. Contact us to discuss your long-term needs and receive a customized quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-6" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What is your refund policy?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Refunds are available if we fail to deliver agreed services or if you cancel before work commences (minus a 10% administrative fee). Once work has begun and initial concepts are delivered, refunds are not available, though partial refunds may be considered based on work completed. Please review our Payment & Refund Policy page for complete details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Timeline Section */}
          <section className="mb-12">
            <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-6 pb-2 border-b-2 border-brand-mid-blue/20">
              Timeline & Process
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="timeline-1" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  How long does a typical project take?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Project timelines vary based on complexity and scope:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Logo Design:</strong> 1-2 weeks</li>
                    <li><strong>Complete Brand Identity:</strong> 3-4 weeks</li>
                    <li><strong>Marketing Campaign:</strong> 2-6 weeks</li>
                    <li><strong>Social Media Package:</strong> Ongoing (monthly deliverables)</li>
                    <li><strong>Full Brand Development:</strong> 6-12 weeks</li>
                  </ul>
                  <p className="mt-2">We'll provide a detailed timeline during our initial consultation based on your specific project.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timeline-2" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Can you expedite my project for an urgent deadline?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Yes, we offer rush delivery services for urgent projects. A rush fee (typically 25-50% of the project cost) applies depending on how quickly you need the work completed. Contact us immediately to discuss your timeline, and we'll do our best to accommodate your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timeline-3" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What is your typical workflow process?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Our process follows these steps:
                  <ol className="list-decimal pl-6 mt-2 space-y-1">
                    <li><strong>Consultation:</strong> Understanding your needs and goals</li>
                    <li><strong>Proposal:</strong> Detailed scope, timeline, and pricing</li>
                    <li><strong>Brief & Research:</strong> In-depth project briefing and market research</li>
                    <li><strong>Concept Development:</strong> Initial designs and concepts</li>
                    <li><strong>Review & Revisions:</strong> Feedback and refinements</li>
                    <li><strong>Final Delivery:</strong> Complete files and assets</li>
                    <li><strong>Support:</strong> 30-day post-delivery support</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timeline-4" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  How many revisions are included?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Revision rounds vary by package:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Basic Package:</strong> 2 revision rounds</li>
                    <li><strong>Professional Package:</strong> 4 revision rounds</li>
                    <li><strong>Enterprise Package:</strong> Unlimited revisions (within reason)</li>
                  </ul>
                  <p className="mt-2">Additional revision rounds can be purchased if needed. Note that revisions mean refinements to existing concepts, not entirely new design directions.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timeline-5" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What happens if my project is delayed due to my feedback?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  We understand that feedback may take time. However, project timelines may be extended if we don't receive feedback within the agreed timeframe (typically 3-5 business days). We'll communicate any timeline adjustments clearly. Extended delays may result in project pauses to accommodate other client commitments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Client Questions Section */}
          <section className="mb-12">
            <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-6 pb-2 border-b-2 border-brand-mid-blue/20">
              For Clients
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="client-1" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  How do I get started with Ad Atelier?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Getting started is easy! Simply contact us via phone (+91 9656778508), WhatsApp, email, or our contact form. We'll schedule a free consultation to understand your needs, discuss your project, and provide a detailed proposal with timeline and pricing. Once you approve, we'll send a contract and invoice to begin work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="client-2" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Will I work directly with your team or with freelancers?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Depending on your project and preferences, you may work with our in-house team or our network of vetted freelance professionals. Either way, Ad Atelier manages the entire process, ensuring quality control, timely delivery, and professional communication. You always have direct access to senior specialists - no junior staff handling your project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="client-3" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What materials do I need to provide?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  We'll guide you through what we need, but typically:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Your business information and goals</li>
                    <li>Target audience details</li>
                    <li>Existing brand assets (if any)</li>
                    <li>Content, images, or copy (for some projects)</li>
                    <li>Examples of styles you like/dislike</li>
                    <li>Any technical requirements or specifications</li>
                  </ul>
                  <p className="mt-2">Don't worry - we'll provide a detailed checklist and help you gather everything needed!</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="client-4" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Can I see examples of your previous work?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Absolutely! We have a portfolio showcasing our best work across various industries. During our consultation, we can show you relevant case studies similar to your project. Some client work is confidential, but we have plenty of examples to demonstrate our capabilities and style.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="client-5" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What if I'm not satisfied with the final result?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Client satisfaction is our priority. We include multiple revision rounds to ensure you're happy with the work. If you have concerns, we'll work with you to address them within the scope of revisions. However, we cannot offer refunds for subjective dissatisfaction with creative work that meets the project brief. Clear communication throughout the process helps ensure the final result exceeds your expectations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="client-6" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Do I own the final designs?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Yes! Upon full payment, you receive full rights to use the final approved deliverables for your business purposes. You can use them across all media, modify them, and incorporate them into your materials. However, preliminary concepts and unused designs remain our property. Source files are provided when specified in your package.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="client-7" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Can you help with printing and implementation?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Yes! While our core service is design, we can coordinate printing, signage, website development, and implementation through our trusted partner network. We can manage the entire process or simply provide print-ready files for your preferred vendors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Freelancer Questions Section */}
          <section className="mb-12">
            <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-6 pb-2 border-b-2 border-brand-mid-blue/20">
              For Freelancers
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="freelancer-1" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  How do I join the Ad Atelier freelancer network?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  We're always looking for talented professionals! To join:
                  <ol className="list-decimal pl-6 mt-2 space-y-1">
                    <li>Contact us expressing your interest</li>
                    <li>Submit your portfolio and resume</li>
                    <li>Complete our vetting process (portfolio review, skills assessment)</li>
                    <li>Attend an interview/orientation session</li>
                    <li>Sign our freelancer agreement</li>
                    <li>Start receiving project opportunities!</li>
                  </ol>
                  <p className="mt-2">We look for experienced professionals with proven track records and excellent communication skills.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="freelancer-2" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What percentage do freelancers receive from projects?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Freelancers receive 75% of the project fee, with Ad Atelier retaining 25% for platform services, client management, quality assurance, payment processing, and ongoing support. This is one of the most competitive rates in the industry, ensuring you're fairly compensated for your expertise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="freelancer-3" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  How and when do I get paid?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Payments are released within 5-7 business days after client approval and payment receipt. Payments are transferred directly to your registered bank account. There's a minimum payout threshold of ₹1,000 - earnings below this are accumulated until the threshold is reached.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="freelancer-4" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What types of projects will I work on?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Projects vary based on your skills and expertise:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Brand identity and logo design</li>
                    <li>Marketing campaign development</li>
                    <li>Social media content creation</li>
                    <li>Advertising design and copywriting</li>
                    <li>Print and digital design</li>
                    <li>Illustration and graphic design</li>
                  </ul>
                  <p className="mt-2">We match projects to your specific skill set and availability.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="freelancer-5" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Can I work with clients directly outside the platform?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  No. Our freelancer agreement prohibits direct client solicitation or working with platform clients outside of Ad Atelier. This protects both you and our clients by ensuring proper contracts, payment security, and professional standards. Violation of this policy results in immediate removal from our network and potential legal action.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="freelancer-6" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  How much control do I have over which projects I take?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  You have complete control! We send project opportunities that match your profile, and you can accept or decline based on your availability, interest, and workload. There's no obligation to accept every project. We appreciate transparency about your capacity so we can plan accordingly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="freelancer-7" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  What support does Ad Atelier provide to freelancers?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  We provide comprehensive support including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Detailed project briefs and client requirements</li>
                    <li>Client communication management</li>
                    <li>Contract and payment handling</li>
                    <li>Quality review and feedback</li>
                    <li>Dispute resolution assistance</li>
                    <li>Professional development resources</li>
                    <li>Community of fellow professionals</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="freelancer-8" className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-brand-heading text-brand-dark-navy hover:text-brand-deep-blue">
                  Can I use work from Ad Atelier projects in my portfolio?
                </AccordionTrigger>
                <AccordionContent className="font-brand-body text-brand-dark-navy/80">
                  Yes! You can showcase completed work in your professional portfolio, with proper attribution to Ad Atelier. If a project is confidential (rare), we'll inform you beforehand. Portfolio rights are an important part of building your professional reputation, and we support that.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Still Have Questions Section */}
          <section className="bg-gradient-to-r from-brand-deep-blue to-brand-mid-blue p-8 rounded-lg text-center">
            <h2 className="font-brand-heading text-2xl font-bold text-brand-white mb-4">
              Still Have Questions?
            </h2>
            <p className="font-brand-body text-brand-white/90 mb-6">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919656778508"
                className="bg-brand-white text-brand-deep-blue px-6 py-3 rounded-lg font-brand-body font-semibold hover:bg-brand-white/90 transition-colors duration-300"
              >
                Call Us: +91 9656778508
              </a>
              <a 
                href="#contact"
                className="bg-transparent border-2 border-brand-white text-brand-white px-6 py-3 rounded-lg font-brand-body font-semibold hover:bg-brand-white/10 transition-colors duration-300"
              >
                Send a Message
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default FAQ;
