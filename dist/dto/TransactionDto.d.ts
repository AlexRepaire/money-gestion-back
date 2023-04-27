export declare class TransactionDto {
    userId: String;
    amount: Number;
    category: CATEGORY;
    date: Date;
    description: String;
    reference: String;
    type: TYPE;
}
declare enum CATEGORY {
    salarié = 0,
    freelance = 1,
    nourriture = 2,
    divertissement = 3,
    investissement = 4,
    education = 5,
    medical = 6,
    tax = 7
}
declare enum TYPE {
    revenu = 0,
    depense = 1
}
export {};
