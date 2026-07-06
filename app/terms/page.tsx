import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";
import { site } from "@/app/lib/site";
import { legal } from "@/app/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Booking, cancellation, insurance and safety terms for tours with Guincho Adventours.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="TERMS"
      title={
        <>
          BOOKING & <span className="text-accent">TOUR TERMS</span>
        </>
      }
      updated={legal.effectiveDate}
    >
      <p>
        By booking or joining a tour with {legal.companyName} you accept the
        terms below. They&apos;re written to be readable — if anything is
        unclear, email us before you book and we&apos;ll walk you through it.
      </p>

      <h2>Who we are</h2>
      <p>
        {legal.companyName} is a Portuguese adventure-tour operator based at{" "}
        {site.address.street}, {site.address.locality}, {site.address.postalCode}{" "}
        {site.address.region}, Portugal.
      </p>
      <ul>
        <li>
          National tourism registration (RNAAT): <strong>{legal.rnaat}</strong>
        </li>
        <li>VAT / NIF: {legal.vatNumber}</li>
        <li>
          Contact: {site.emails.booking} · {site.phones.mobile} ·{" "}
          {site.phones.landline}
        </li>
      </ul>

      <h2>Bookings & payment</h2>
      <p>
        Bookings are made by email — either through a Book / Enquire button on
        this site or by writing directly to {site.emails.booking}. A booking is
        confirmed once we reply with a date, time, and price.
      </p>
      <p>[TODO: payment method — bank transfer / MB WAY / cash on arrival]</p>
      <p>[TODO: deposit policy, if any]</p>

      <h2>Cancellation & rescheduling</h2>
      <p>
        [TODO: cancellation window — e.g. free cancellation up to 48 h before
        the tour, 50 % charge after that, no refund on no-show.]
      </p>
      <p>
        Weather cancellations initiated by us are always fully refundable or
        can be rescheduled at no cost.
      </p>

      <h2>Insurance</h2>
      <p>
        Every rider on every tour is covered by our insurance underwritten by{" "}
        <strong>{legal.insuranceUnderwriter}</strong>. Coverage includes
        third-party liability and personal accident cover for tour participants
        while on our vehicles and along the guided route.
      </p>
      <p>
        [TODO: policy number and short summary of covered scenarios — accident
        during the tour, damage to third parties, medical assistance limits.]
      </p>

      <h2>Safety rules</h2>
      <p>
        Every tour starts with a briefing. Following the briefing and the
        guide&apos;s instructions is a condition of participation.
      </p>
      <ul>
        <li>Helmets are mandatory and provided by us.</li>
        <li>Drivers must be at least [TODO: minimum age] years old.</li>
        <li>
          Drivers must hold a valid driving licence (a car licence is
          sufficient — no motorbike licence needed).
        </li>
        <li>
          Alcohol and drugs are not permitted before or during any tour that
          involves driving a quad, buggy, or bike.
        </li>
        <li>
          Passenger mode is available on request for the longer tours — mention
          it when you enquire and we&apos;ll confirm.
        </li>
      </ul>

      <h2>Photography & media</h2>
      <p>
        Our guides may take photos or short videos during a tour and share the
        best ones on our website and social channels to promote the business.
        If you&apos;d rather not appear, tell your guide at the briefing and
        we&apos;ll respect that.
      </p>

      <h2>Liability</h2>
      <p>
        [TODO: standard limitation of liability clause aligned to Portuguese
        tourism law. Include reference to RNAAT registration and consumer
        protection info (livro de reclamações).]
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms as the business evolves. The version that
        applies to your booking is the one published on this page on the date
        you confirmed your booking. Material changes will be flagged at the top
        of this page for at least 30 days after they take effect.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by Portuguese law. Disputes we can&apos;t
        resolve directly go to the Portuguese consumer arbitration centre
        applicable to the Cascais region.
      </p>
    </LegalPage>
  );
}
