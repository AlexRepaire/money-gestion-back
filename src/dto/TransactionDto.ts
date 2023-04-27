export class TransactionDto {
  userId: string;
  amount: number;
  category: CATEGORY;
  date: Date;
  description: string;
  reference: string;
  type: TYPE;
}

enum CATEGORY {
  salarié,
  freelance,
  nourriture,
  divertissement,
  investissement,
  education,
  medical,
  tax,
}

enum TYPE {
  revenu,
  depense,
}
