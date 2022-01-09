import { simpleCompoundInterest } from './compoundInterest';

const P = 100; // Principal
const r = 0.10 // Interest Rate
const n = 12; // Number of times the interest is applied per time period
const t = 2; // Time in year

console.log(simpleCompoundInterest({
    principal: P,
    interestRate: r,
    frequency: n,
    years: t
}));