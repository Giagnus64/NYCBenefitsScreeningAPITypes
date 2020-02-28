declare namespace NYCBSTypes{

    type LivingRentalType = "" | "MarketRate" | "RentControlled" | "FamilyHome" | "Condo" | "NYCHA" | "RentRegulatedHotel" | "Section213" | "LimitedDividendDevelopment" | "MitchellLama" | "RedevelopmentCompany" | "HDFC";


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

    type HouseholdMemberType = "" | "HeadOfHousehold" | "Child" | "FosterChild" | "StepChild" | "Grandchild" | "Spouse" | "Parent" | "FosterParent"| "StepParent" | "GrandParent" |"SisterBrother"| "StepSisterStepBrother" | "BoyfriendGirlfriend"| "DomesticPartner" | "Unrelated" | "Other";

    type IncomeType = "" | "Wages" | "SelfEmployment" | "Unemployment" | "CashAssistance" | "ChildSupport" | "DisabilityMedicaid" | "SSI" | "SSDependent" | "SSDisability" | "SSSurvivor" | "SSRetirement" | "NYSDisability" | "Veteran" | "Pension" | "DeferredComp" | "WorkersComp" | "Alimony" | "Boarder" | "Gifts" | "Rental" | "Investment";

    type IncomeExpenseFrequency = "" | "Weekly" | "BiWeekly" | "Monthly" | "Semimonthly" | "Yearly";

    interface IncomeConfig {
        amount: number;
        type: IncomeType;
        frequency: IncomeExpenseFrequency;
    }

    type ExpenseType = "" | "ChildCare" | "ChildSupport" | "DependentCare" | "Rent" | "Medical" | "Heating" | "Cooling" | "Mortgage" | "Utilities" | "Telephone" | "InsurancePremiums";

    interface ExpenseConfig {
        amount: number;
        type: ExpenseType;
        frequency: IncomeExpenseFrequency;
    }

    interface PersonConfig {
        age: number;
        student: boolean;
        studentFulltime: boolean;
        pregnant:boolean;
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
        incomes?:[IncomeConfig] 
        expenses?:[ExpenseConfig]
    }

    interface RequestConfig {
        household: [HouseholdConfig];
        person: [PersonConfig];
        withholdPayload: boolean;
    }
}