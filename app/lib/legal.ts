// Static legal facts referenced from /terms and /privacy.
// PHASE-9 blockers: Arlindo needs to send the real RNAAT number and
// the insurance underwriter name. Everything below marked [TODO] gets
// swapped when we have real values.

export const legal = {
  // National tourism registration — legally required to display.
  rnaat: "[TODO: RNAAT registration number]",
  insuranceUnderwriter: "[TODO: insurance underwriter]",
  vatNumber: "[TODO: NIF / VAT number]",
  companyName: "Guincho Adventours",
  effectiveDate: "5 July 2026",
} as const;
