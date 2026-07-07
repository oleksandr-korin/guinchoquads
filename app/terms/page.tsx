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
          BOOKING <span className="text-accent">CONDITIONS</span>
        </>
      }
      updated={legal.effectiveDate}
    >
      <p>
        Please take the time to read and understand the conditions of booking
        set out below prior to booking a tour with us. We strongly recommend
        that you also read the notes relating to your experience prior to
        booking to ensure that you understand the itinerary, style and
        physical demands of the trip you are undertaking.
      </p>

      <h2>1. Our contract</h2>
      <p>
        All direct bookings are made with {legal.companyName}. By booking a
        tour with us you are deemed to have agreed to these Booking Conditions
        (which constitute the entire agreement between you and us) and your
        booking will be accepted by us on this basis. The services to be
        provided are those referred to in your booking confirmation invoice.
      </p>

      <h2>2. Validity</h2>
      <p>
        Dates, itineraries and prices published on this website are indicative
        and may be updated seasonally. The price locked in on your booking
        confirmation is the price that applies to your trip.
      </p>

      <h2>3. Deposit requirement</h2>
      <p>
        You are required to pay a non-refundable deposit of 50% per person per
        tour for your booking to be confirmed. Your booking can be made within
        1 day of the tour date but always be sure to check with us for
        availability. Please note that a higher deposit is required for some
        selected tours.
      </p>

      <h2>4. Acceptance of booking and final payments</h2>
      <p>
        If we accept your booking we will issue a confirmation invoice. A
        contract will exist between us from the date we issue the confirmation
        invoice; the contract will exist when we accept your deposit. Please
        refer to your booking confirmation invoice for details regarding final
        payments. Payment of the remaining balance of the tour price is due as
        you arrive at our installations. If this balance is not paid on or
        before the due date we reserve the right to treat your booking as
        cancelled.
      </p>

      <h2>5. Your details</h2>
      <p>
        In order for us to confirm your travel arrangements you must provide
        all requested details with the balance of the trip price. Necessary
        details include full name as per passport, date of birth, nationality,
        passport number, and any pre-existing medical conditions you have
        which may affect your ability to complete your tour arrangements. Your
        booking cannot be confirmed without provision of these details.
      </p>

      <h2>6. Cancellation by the traveller</h2>
      <p>
        If you cancel some or all portions of your booking cancellation fees
        will apply. A cancellation will only be effective when we receive
        written confirmation of the cancellation. If you cancel a trip:
      </p>
      <ul>
        <li>7 days or more prior to the tour, we will retain 50% of the deposit;</li>
        <li>Between 15 and 29 days prior to departure, we will retain 25% of the deposit;</li>
        <li>2 days or less prior to tour date, we will retain 100% of the deposit.</li>
      </ul>
      <p>
        Note that different cancellation conditions apply to some tours and
        additional services. Your booking consultant will advise if
        differences apply. Please note that for certain tour arrangements the
        cancellation charge may be higher than those shown. In certain cases a
        100% cancellation fee applies as soon as the booking is made and the
        voucher is issued. You will be advised of different cancellation
        charges at time of booking. If you leave a tour for any reason after
        it has commenced we are not obliged to make any refunds for unused
        services.
      </p>
      <p>
        If you fail to join a tour, join it after departure, or leave it prior
        to its completion, no refund will be made. The above cancellation fees
        are in addition to fees which may be levied by accommodation
        providers, travel agents or third-party tour and transport operator
        fees.
      </p>

      <h2>7. Cancellation by us</h2>
      <p>
        We may cancel a trip at any time up to 7 days before. We may cancel a
        trip at any time prior to departure if, due to terrorism, natural
        disasters, political instability or other external events, it is not
        viable for us to operate the planned itinerary. If we cancel your
        trip, you can transfer amounts paid to an alternate departure date or
        alternatively receive a full refund. In circumstances where the
        cancellation is due to external events outside our reasonable control,
        refunds will be less any unrecoverable costs.
      </p>

      <h2>8. Booking amendments</h2>
      <p>
        If you wish to transfer from one tour to another or transfer your
        booking to a third party you must notify us at least 7 days prior to
        the proposed tour date. A fee of €50 per person per change will apply.
        If you notify us less than 30 days prior to the proposed departure
        date the refund policy applicable to cancellations will apply.
        Transfers to a third party are only permitted where the transferee
        meets all the requirements in relation to the tour, and transfers to
        another tour date can only be made within the current validity period.
      </p>
      <p>
        Amendments to any other arrangements made in conjunction with your
        trip will incur a €50 administration fee per booking per change.
      </p>

      <h2>9. Inclusions</h2>
      <p>The price of your trip includes:</p>
      <ul>
        <li>all items as listed in the Trip Notes;</li>
        <li>all transport listed in the Trip Notes;</li>
        <li>sightseeing and meals as listed in the Trip Notes;</li>
        <li>the services as described in the Trip Notes.</li>
      </ul>

      <h2>10. Exclusions</h2>
      <p>The price of your tour does not include:</p>
      <ul>
        <li>meals unless specified;</li>
        <li>special gear unless specified in the Trip Notes;</li>
        <li>transfers, taxes unless specified;</li>
        <li>travel insurance;</li>
        <li>optional activities and all personal expenses.</li>
      </ul>

      <h2>11. Prices &amp; surcharges</h2>
      <p>
        Our trip prices are subject to variable and seasonal pricing, both of
        which are standard practice within the tour industry. This means our
        tour prices may vary at any time in accordance with demand, market
        conditions and availability. It is likely that different passengers on
        the same trip may have been charged different prices. Your best option
        if you like the price you see is to book at that time. Once you have
        received a quote the price will be locked in provided you pay the
        required deposit prior to the quote&apos;s expiry. Any reduced pricing
        or discounts that may become available after you have paid your
        deposit will not apply. If you wish to cancel your booking to take
        advantage of a cheaper price, full cancellation conditions apply. The
        most up-to-date pricing is available on our website.
      </p>
      <p>
        We reserve the right to impose surcharges up to 30 days before the
        tour due to unfavourable changes in exchange rates, increases in other
        transportation costs, increases in local operator costs, taxes, or if
        government action should require us to do so. In such instances we
        will be responsible for any amount up to 2% of the tour price and you
        will be responsible for the balance. If any surcharge results in an
        increase of more than 10% of the trip price you may cancel the booking
        within 7 days of notification of the surcharge and obtain a full
        refund. We will not surcharge any tour within the validity of our
        confirmation once paid in full.
      </p>

      <h2>12. Age &amp; health requirements</h2>
      <p>
        A minimum age at the time of the tour applies to many of our tours.
        For the majority of our tours we have no upper age limit, though we
        remind you that our trips can be physically demanding and passengers
        must ensure that they are suitably fit to allow full participation.
        All travellers under the age of 18 must be accompanied by a legal
        guardian, or in lieu of a legal guardian, by an escort over the age of
        18 appointed by their legal guardian. The legal guardian or their
        designee will be responsible for the traveller under the age of 18.
      </p>

      <h2>13. Small groups &amp; combination tours</h2>
      <p>
        Our tours are guaranteed to start once minimum group size is achieved
        unless specifically stated otherwise. This means at times we will
        start the tour even if some of the travellers missed arrival. Some of
        our tours may be designed to fit with other travellers to create a
        &ldquo;combination&rdquo; tour. If you would like to know how many
        people are booked on your trip or any combination trip it is part of,
        please ask prior to making your booking.
      </p>

      <h2>14. Passport and driving licence</h2>
      <p>
        You must carry a valid passport and driving licence for the tours in
        which you will use motorised means of transportation like buggies and
        quad bikes. Your passport and driving licence must be valid. It is
        your responsibility to ensure that you are in possession of the
        correct documents for your tour. We are not responsible if you are
        fined or refused to take the tour because you lack the correct travel
        documentation.
      </p>

      <h2>15. Tour insurance</h2>
      <p>
        A personal insurance is compulsory for all our tours and should be
        taken care by you with us prior to the tour date. Your tour insurance
        must provide cover against personal accident, death, medical expenses
        and emergency repatriation. Loss of personal effects is not covered by
        our insurance. If you obtain tour insurance through us you acknowledge
        that you are satisfied with the level of insurance we have arranged.
      </p>
      <p>
        Insurance underwriter: <strong>{legal.insuranceUnderwriter}</strong>.
      </p>

      <h2>16. Flexibility</h2>
      <p>
        You appreciate and acknowledge that the nature of this type of tour
        requires considerable flexibility and you should allow for
        alternatives. The itinerary provided for each tour is representative
        of the types of activities contemplated, but it is understood that the
        route, schedules, itineraries, amenities and mode of transport may be
        subject to alteration without prior notice due to local circumstances
        or events.
      </p>

      <h2>17. Authority on tour</h2>
      <p>
        Our group tours are run by a group leader. The decision of the group
        leader is final on all matters likely to affect the safety or
        well-being of any person participating in the trip. If you fail to
        comply with a decision made by a group leader, or interfere with the
        well-being or mobility of the group, the group leader may direct you
        to leave the trip immediately, with no right of refund. We may also
        elect not to carry you on any future trips booked. You must at all
        times comply with the laws, customs, foreign exchange and drug
        regulations of Portugal, and you also agree to tour with us in
        accordance with our responsible travel guidelines.
      </p>

      <h2>18. Acceptance of risk</h2>
      <p>
        You acknowledge that the nature of the tour is adventurous and
        participation involves a degree of personal risk. You will be visiting
        places where there are dangers and physical challenges greater than
        those present in your daily life. We use information from government
        foreign departments and reports from our own contacts in assessing
        whether the itinerary should operate. However it is also your own
        responsibility to acquaint yourself with all possible relevant
        information and the nature of your itinerary. You acknowledge that
        your decision to take the tour is made in light of consideration of
        this information and you accept that you are aware of the personal
        risks attendant upon such travel.
      </p>

      <h2>19. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law: any liability for any loss,
        death, injury or damage which you may suffer (directly or indirectly)
        in connection with or arising out of your participation in a tour, you
        release us and our officers, employees, agents and representatives
        from any liability and expressly waive any claims you may have against
        us arising out of or in connection with your participation in a tour.
        Any claim by you is excluded to the extent that it is for indirect or
        consequential loss, loss of profits or economic loss, however it
        arises, or for indirect, special, punitive or exemplary damages.
      </p>

      <h2>20. Optional activities</h2>
      <p>
        Optional activities not included in the tour price do not form part of
        the tour or this contract. You accept that any assistance given by the
        group leader or representative in arranging optional activities does
        not render us liable for them in any way and they must all be
        considered extras. The contract for the provision of that activity
        will be between you and the operator directly.
      </p>

      <h2>21. Claims &amp; complaints</h2>
      <p>
        If you have a complaint about your tour please inform your group
        leader or our local representative at the time in order that they can
        attempt to rectify the matter. If satisfaction is not reached through
        these means then any further complaint should be put in writing to us
        within 30 days of the end of the tour.
      </p>

      <h2>22. Severability</h2>
      <p>
        In the event that any term or condition contained in these Booking
        Conditions is unenforceable or void by operation of law or as being
        against public policy or for any other reason, such term or condition
        shall be deemed to be severed from this contract or amended
        accordingly only to such extent necessary to allow all remaining terms
        and conditions to survive and continue as binding.
      </p>

      <h2>23. Photos, videos and marketing</h2>
      <p>
        You consent to us using images of you taken during the trip for
        advertising and promotional purposes in any medium we choose. You
        grant us a perpetual, royalty-free, worldwide, irrevocable licence to
        use such images for publicity and promotional purposes. If you would
        rather not appear in our images, please tell your guide at the
        briefing and we will respect that.
      </p>

      <h2>24. Privacy policy</h2>
      <p>
        Any personal information that we collect about you may be used for any
        purpose associated with the operation of a trip or to send you
        marketing material in relation to our events and special offers. The
        information may be disclosed to our staff, service providers or other
        suppliers to enable us to operate the tour. We will otherwise treat
        your details in accordance with our{" "}
        <a href="/privacy">privacy notice</a>.
      </p>

      <h2>25. Applicable law</h2>
      <p>
        The laws of Cascais, Portugal, govern these Booking Conditions to the
        fullest extent allowable. Any disputes in connection with a trip or
        these Booking Conditions must be initiated in the courts of Cascais,
        Portugal.
      </p>

      <h2>26. Registered address</h2>
      <p>
        {legal.companyName}, {site.address.street},{" "}
        {site.address.locality}, {site.address.postalCode}{" "}
        {site.address.region}, Portugal.
      </p>
      <ul>
        <li>
          National tourism registration (RNAAT):{" "}
          <strong>{legal.rnaat}</strong>
        </li>
        <li>VAT / NIF: {legal.vatNumber}</li>
        <li>
          Contact: {site.emails.booking} · {site.phones.mobile} ·{" "}
          {site.phones.landline}
        </li>
      </ul>
    </LegalPage>
  );
}
