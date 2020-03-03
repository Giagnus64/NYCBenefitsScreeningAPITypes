// Type definitions for NYC BENEFITS SCREENING API
// Project: NYC Benefits Screening API [https://screeningapidocs.cityofnewyork.us/overview]
// Definitions by: Gianfranco Nuschese <[https://github.com/Giagnus64]>


//This file follows both the module and global namespace definition styles in case this 

export type LivingRentalType =
    | ""
    | "MarketRate"
    | "RentControlled"
    | "FamilyHome"
    | "Condo"
    | "NYCHA"
    | "RentRegulatedHotel"
    | "Section213"
    | "LimitedDividendDevelopment"
    | "MitchellLama"
    | "RedevelopmentCompany"
    | "HDFC";

export interface HouseholdConfig {
    cashOnHand: number;
    livingRenting: boolean;
    livingRentalType?: LivingRentalType;
    livingOwner: boolean;
    livingStayingWithFriend: boolean;
    livingHotel: boolean;
    livingShelter: boolean;
    livingPreferNotToSay: boolean;
}

export type HouseholdMemberType =
    | ""
    | "HeadOfHousehold"
    | "Child"
    | "FosterChild"
    | "StepChild"
    | "Grandchild"
    | "Spouse"
    | "Parent"
    | "FosterParent"
    | "StepParent"
    | "GrandParent"
    | "SisterBrother"
    | "StepSisterStepBrother"
    | "BoyfriendGirlfriend"
    | "DomesticPartner"
    | "Unrelated"
    | "Other";

export type IncomeType =
    | ""
    | "Wages"
    | "SelfEmployment"
    | "Unemployment"
    | "CashAssistance"
    | "ChildSupport"
    | "DisabilityMedicaid"
    | "SSI"
    | "SSDependent"
    | "SSDisability"
    | "SSSurvivor"
    | "SSRetirement"
    | "NYSDisability"
    | "Veteran"
    | "Pension"
    | "DeferredComp"
    | "WorkersComp"
    | "Alimony"
    | "Boarder"
    | "Gifts"
    | "Rental"
    | "Investment";

export type IncomeExpenseFrequency =
    | ""
    | "Weekly"
    | "BiWeekly"
    | "Monthly"
    | "Semimonthly"
    | "Yearly";

export interface IncomeConfig {
    amount: number;
    type: IncomeType;
    frequency: IncomeExpenseFrequency;
}

export type ExpenseType =
    | ""
    | "ChildCare"
    | "ChildSupport"
    | "DependentCare"
    | "Rent"
    | "Medical"
    | "Heating"
    | "Cooling"
    | "Mortgage"
    | "Utilities"
    | "Telephone"
    | "InsurancePremiums";

export interface ExpenseConfig {
    amount: number;
    type: ExpenseType;
    frequency: IncomeExpenseFrequency;
}

export interface PersonConfig {
    age: number;
    student: boolean;
    studentFulltime: boolean;
    pregnant: boolean;
    unemployed: boolean;
    unemployedWorkedLast18Months: boolean;
    blind: boolean;
    disabled: boolean;
    veteran: boolean;
    benefitsMedicaid: boolean;
    benefitsMedicaidDisability: boolean;
    householdMemberType: HouseholdMemberType;
    livingOwnerOnDeed?: boolean;
    livingRentalOnLease?: boolean;
    incomes?: [IncomeConfig];
    expenses?: [ExpenseConfig];
}

export interface RequestConfig {
    household: [HouseholdConfig];
    person: [PersonConfig];
    withholdPayload: boolean;
}
// Helpers to allow referencing Big and BigConstructor from inside the global declaration without creating a self reference
export type RequestConfig_ = RequestConfig;
export type IncomeConfig_ = IncomeConfig;
export type IncomeType_ = IncomeType;
export type ExpenseConfig_ = ExpenseConfig;
export type ExpenseType_ = ExpenseType;
export type IncomeExpenseFrequency_ = IncomeExpenseFrequency;
export type PersonConfig_ = PersonConfig;
export type HouseholdConfig_ = HouseholdConfig;
export type HouseholdMemberType_ = HouseholdMemberType;
export type LivingRentalType_ = LivingRentalType;


// declare global {
//     namespace NYCBSApi {
//         type RequestConfig = RequestConfig_;
//         type IncomeConfig = IncomeConfig_;
//         type IncomeType = IncomeType_;
//         type ExpenseConfig = ExpenseConfig_;
//         type ExpenseType = ExpenseType_;
//         type IncomeExpenseFrequency = IncomeExpenseFrequency_;
//         type PersonConfig = PersonConfig_;
//         type HouseholdConfig = HouseholdConfig_;
//         type HouseholdMemberType = HouseholdMemberType_;
//         type LivingRentalType = LivingRentalType_;
//     }
// }

declare module NYCBSTypes {

    type LivingRentalType =
        | ""
        | "MarketRate"
        | "RentControlled"
        | "FamilyHome"
        | "Condo"
        | "NYCHA"
        | "RentRegulatedHotel"
        | "Section213"
        | "LimitedDividendDevelopment"
        | "MitchellLama"
        | "RedevelopmentCompany"
        | "HDFC";

    interface HouseholdConfig {
        cashOnHand: number;
        livingRenting: boolean;
        livingRentalType?: LivingRentalType;
        livingOwner: boolean;
        livingStayingWithFriend: boolean;
        livingHotel: boolean;
        livingShelter: boolean;
        livingPreferNotToSay: boolean;
    }

    type HouseholdMemberType =
        | ""
        | "HeadOfHousehold"
        | "Child"
        | "FosterChild"
        | "StepChild"
        | "Grandchild"
        | "Spouse"
        | "Parent"
        | "FosterParent"
        | "StepParent"
        | "GrandParent"
        | "SisterBrother"
        | "StepSisterStepBrother"
        | "BoyfriendGirlfriend"
        | "DomesticPartner"
        | "Unrelated"
        | "Other";

    type IncomeType =
        | ""
        | "Wages"
        | "SelfEmployment"
        | "Unemployment"
        | "CashAssistance"
        | "ChildSupport"
        | "DisabilityMedicaid"
        | "SSI"
        | "SSDependent"
        | "SSDisability"
        | "SSSurvivor"
        | "SSRetirement"
        | "NYSDisability"
        | "Veteran"
        | "Pension"
        | "DeferredComp"
        | "WorkersComp"
        | "Alimony"
        | "Boarder"
        | "Gifts"
        | "Rental"
        | "Investment";

    type IncomeExpenseFrequency =
        | ""
        | "Weekly"
        | "BiWeekly"
        | "Monthly"
        | "Semimonthly"
        | "Yearly";

    interface IncomeConfig {
        amount: number;
        type: IncomeType;
        frequency: IncomeExpenseFrequency;
    }

    type ExpenseType =
        | ""
        | "ChildCare"
        | "ChildSupport"
        | "DependentCare"
        | "Rent"
        | "Medical"
        | "Heating"
        | "Cooling"
        | "Mortgage"
        | "Utilities"
        | "Telephone"
        | "InsurancePremiums";

    interface ExpenseConfig {
        amount: number;
        type: ExpenseType;
        frequency: IncomeExpenseFrequency;
    }

    interface PersonConfig {
        age: number;
        student: boolean;
        studentFulltime: boolean;
        pregnant: boolean;
        unemployed: boolean;
        unemployedWorkedLast18Months: boolean;
        blind: boolean;
        disabled: boolean;
        veteran: boolean;
        benefitsMedicaid: boolean;
        benefitsMedicaidDisability: boolean;
        householdMemberType: HouseholdMemberType;
        livingOwnerOnDeed?: boolean;
        livingRentalOnLease?: boolean;
        incomes?: [IncomeConfig];
        expenses?: [ExpenseConfig];
    }

    interface RequestConfig {
        household: [HouseholdConfig];
        person: [PersonConfig];
        withholdPayload: boolean;
  
}