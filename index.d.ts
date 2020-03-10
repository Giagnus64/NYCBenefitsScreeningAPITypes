// Type definitions for NYC BENEFITS SCREENING API
// Project: NYC Benefits Screening API [https://screeningapidocs.cityofnewyork.us/overview]
// Definitions by: Gianfranco Nuschese <[https://github.com/Giagnus64]>


export namespace NYCBSA {
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
        cashOnHand: string;
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
        amount: string;
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
        amount: string;
        type: ExpenseType;
        frequency: IncomeExpenseFrequency;
    }

    export interface PersonConfig {
        age: string;
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
        incomes?: IncomeConfig[];
        expenses?: ExpenseConfig[];
    }

    export interface RequestConfig {
        household: HouseholdConfig[];
        person: PersonConfig[];
        withholdPayload: boolean;
    }

    export type ResponseSuccess = "SUCCESS" | "FAILURE";

    export interface ErrorConfig {
        message: string;
        moreInfo: string;
        code: string;
        elementPath: string | null;
    }

    export interface EligibleProgramConfig {
        code: string;
        name: string;
    }

    export interface ResponseConfig {
        type: ResponseSuccess;
        eligiblePrograms?: [EligibleProgramConfig];
        errors?: [ErrorConfig];
    }
}

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
cashOnHand: string;
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
amount: string;
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
amount: string;
type: ExpenseType;
frequency: IncomeExpenseFrequency;
}

export interface PersonConfig {
age: string;
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
incomes?: IncomeConfig[];
expenses?: ExpenseConfig[];
}

export interface RequestConfig {
household: HouseholdConfig[];
person: PersonConfig[];
withholdPayload: boolean;
}

export type ResponseSuccess = "SUCCESS" | "FAILURE";

export interface ErrorConfig {
message: string;
moreInfo: string;
code: string;
elementPath: string | null;
}

export interface EligibleProgramConfig {
code: string;
name: string;
}

export interface ResponseConfig {
    type: ResponseSuccess;
    eligiblePrograms?: [EligibleProgramConfig];
    errors?: [ErrorConfig];
}
