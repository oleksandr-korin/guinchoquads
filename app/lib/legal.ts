// Static legal facts referenced from /terms and /privacy.
// PHASE-9 blockers: still need the insurance underwriter and NIF/VAT
// number from Arlindo. Fields marked [TODO] get swapped when we have
// real values.

export const legal = {
  // National tourism registration — legally required to display.
  rnaat: "78/2008",
  insuranceUnderwriter: "[TODO: insurance underwriter]",
  vatNumber: "[TODO: NIF / VAT number]",
  companyName: "Guincho Adventours",
  effectiveDate: "5 July 2026",
} as const;
