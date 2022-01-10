// A = P(1 + r/n)(nt)

// A = P * Math.pow(1 + r/n, nt);
// A -> Accrued Amount (principal + interest)
// P -> Principal
// r -> Interest Rate
// n -> Number of times the interest is applied per time period
// t -> number of time periods elapsed

// Basic Compound Interest Calculation
// A -> Accrued Amount (principal + interest)
// const P = 100; // Principal
// const r = 0.10 // Interest Rate
// const n = 12; // Number of times the interest is applied per time period
// const t = 2; // number of time periods elapsed in year
type SimpleCompoundInterest = {
    principal: number;
    interestRate: number;
    frequency: number;
    years: number;
};

export function simpleCompoundInterest({ principal, interestRate, frequency, years }: SimpleCompoundInterest): number {
    const compounded = principal * Math.pow(1 + interestRate / frequency, frequency * years);

    return Math.round(compounded * 1000) / 1000;
}

//  @Deprecated by the version with additional contribution
// Detailed Basic Compound Interest Calculation
// const months = t * n;
// let value = P;
// const details = [];
// for (let i = 1; i <= months; i++) {
//     const previousValue = value;

//     let number = value * Math.pow(1 + r / n, 1);
//     value = Math.round(number * 1000) / 1000;

//     details.push({
//         period: i,
//         month: (i - 1) - parseInt((i - 1) / 12) * 12,
//         year: parseInt((i - 1) / 12),
//         initialValue: P,
//         value: value,
//         previousValue: previousValue
//     });
// }

// console.log(details);

// Detailed Basic Compound Interest Calculation With Additional contribution
type CompoundInterest = {
    principal: number;
    interestRate: number;
    frequency: number;
    years: number;
    contribution?: number;
};

type CompoundInterestDetails = {
    period: number;
    month: number;
    year: number;
    initialValue: number;
    additionalContributionAmount: number;
    additionalContributionTotal: number;
    value: number;
    previousValue: number;
};

export function detailedCompoundInterest({
    principal,
    contribution = 0,
    interestRate,
    frequency,
    years,
}: CompoundInterest): CompoundInterestDetails[] {
    const detailsWithAdditionalContribution = [];
    const months = years * frequency;
    let value = principal;

    for (let i = 1; i <= months; i++) {
        const previousValue = value;
        const number = value * Math.pow(1 + interestRate / frequency, 1);

        value = (Math.round((number + contribution) * 1000) / 1000);

        detailsWithAdditionalContribution.push({
            period: i,
            month: (i - 1) - ((i - 1) / 12) * 12,
            year: (i - 1) / 12,
            initialValue: principal,
            additionalContributionAmount: contribution,
            additionalContributionTotal: contribution * (i - 1),
            value: value,
            previousValue: previousValue,
        });
    }

    return detailsWithAdditionalContribution;
}
