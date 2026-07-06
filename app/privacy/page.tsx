import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";
import { site } from "@/app/lib/site";
import { legal } from "@/app/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How Guincho Adventours handles personal data and cookies for visitors to this website.",
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="PRIVACY"
      title={
        <>
          PRIVACY <span className="text-accent">NOTICE</span>
        </>
      }
      updated={legal.effectiveDate}
    >
      <p>
        This notice covers what happens with your personal data when you use
        this website or book a tour with us. Kept short on purpose — a landing
        page and an email inbox don&apos;t generate much data to talk about.
      </p>

      <h2>Who is the data controller</h2>
      <p>
        {legal.companyName}, based at {site.address.street},{" "}
        {site.address.locality}, {site.address.postalCode}{" "}
        {site.address.region}, Portugal. For any privacy question, write to{" "}
        {site.emails.booking}.
      </p>

      <h2>What we collect</h2>
      <h3>When you book</h3>
      <p>
        The Book / Enquire buttons open your email app with a pre-filled
        template. When you send it, we receive: your name, email address,
        phone number (if you type one), the tour you asked about, and anything
        else you wrote in the message. That&apos;s the same information you
        would give us over the phone.
      </p>
      <h3>When you browse</h3>
      <p>
        The site is hosted on Vercel, which keeps standard server logs (IP
        address, browser type, page requested, referrer) for security and
        performance. These logs are not used to identify individual visitors.
      </p>
      <h3>Optional: analytics cookies</h3>
      <p>
        If you accept the cookie prompt, we load Google Analytics 4 (GA4) to
        see which sections and tours get clicked on. GA4 sets a small set of
        cookies and sends aggregated data to Google. We use it to improve the
        site — not to build advertising profiles.
      </p>
      <p>
        Rejecting the prompt turns analytics off completely. You can change
        your choice any time by clearing the site&apos;s cookies for this
        domain and reloading.
      </p>

      <h2>Why we collect it</h2>
      <ul>
        <li>
          <strong>Booking correspondence</strong> — to reply to your enquiry
          and confirm your tour (contract performance under Article 6(1)(b)
          GDPR).
        </li>
        <li>
          <strong>Legal obligations</strong> — insurance, tourism registration,
          and tax records (Article 6(1)(c) GDPR).
        </li>
        <li>
          <strong>Improving the site</strong> — analytics only when you
          consent (Article 6(1)(a) GDPR).
        </li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        Your enquiry email lives in our inbox and nowhere else. We do not sell
        or trade personal data. We use the following processors:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> (hosting) — serves the website and stores
          server logs.
        </li>
        <li>
          <strong>Email provider</strong> — [TODO: name the provider, e.g.
          Gmail / Google Workspace / other].
        </li>
        <li>
          <strong>Google Analytics 4</strong> — only when you consent. Data is
          processed by Google Ireland Limited.
        </li>
      </ul>

      <h2>How long we keep it</h2>
      <ul>
        <li>
          Booking emails: kept as long as needed for the tour and afterwards
          for tax / accounting purposes as required by Portuguese law.
        </li>
        <li>Server logs: rotated by Vercel on their standard schedule.</li>
        <li>
          Analytics data: kept in GA4 for [TODO: retention period, default 14
          months].
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>Under GDPR you can ask us to:</p>
      <ul>
        <li>Confirm what data we hold about you and get a copy.</li>
        <li>Correct anything that&apos;s wrong.</li>
        <li>Delete your data (right to be forgotten).</li>
        <li>Restrict or object to processing.</li>
        <li>Withdraw consent for analytics at any time.</li>
      </ul>
      <p>
        Write to {site.emails.booking} and we&apos;ll act on it within 30 days.
        You also have the right to complain to the Portuguese data-protection
        authority (CNPD).
      </p>

      <h2>Contact</h2>
      <p>
        {legal.companyName} · RNAAT {legal.rnaat} · {site.emails.booking}
      </p>
    </LegalPage>
  );
}
