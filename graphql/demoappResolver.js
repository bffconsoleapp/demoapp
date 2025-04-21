const resolvers = {
  Query: {
    searchCreditUnionByContractNumber: (parent, { contractNumber }, context, info) => {
      // Placeholder sample logic
      return sampleCreditUnions.filter(cu => cu.Contract_Number === contractNumber);
    },
    searchCreditUnionByName: (parent, { name }, context, info) => {
      // Placeholder sample logic
      return sampleCreditUnions.filter(cu => cu.Credit_Union_Name.toLowerCase() === name.toLowerCase());
    },
    searchCreditUnionByState: (parent, { state }, context, info) => {
      // Placeholder sample logic, assuming there's a 'state' field
      return sampleCreditUnions.filter(cu => cu.state.toLowerCase() === state.toLowerCase());
    },
    searchCreditUnionByNameAndState: (parent, { name, state }, context, info) => {
      // Placeholder sample logic, assuming there's a 'state' field
      return sampleCreditUnions.filter(
        cu => cu.Credit_Union_Name.toLowerCase() === name.toLowerCase() &&
              cu.state.toLowerCase() === state.toLowerCase()
      );
    },
  },
  Mutation: {
    editPremiumAdjustment: (parent, { input }, context, info) => {
      // Placeholder sample logic
      const adjIndex = sampleAdjustments.findIndex(adj => adj.id === input.id);
      if (adjIndex === -1) throw new Error("Premium Adjustment not found");

      const updatedAdjustment = {
        ...sampleAdjustments[adjIndex],
        ...input,
      };
      sampleAdjustments[adjIndex] = updatedAdjustment;

      return updatedAdjustment;
    },
  },
};

const sampleCreditUnions = [
  {
    id: "1",
    Contract_Number: "CU12345",
    Credit_Union_Name: "Credit Union 1",
    state: "New York",
    premium_reports: [],
    premium_adjustments: [],
    single_premium_certificate_returns: [],
  },
  // Add more sample data as needed
];

const sampleAdjustments = [
  {
    id: "A1",
    Product_Name: "Product 1",
    Report_Period: "2023-Q1",
    Status: "Open",
    Last_Update: "2023-01-01",
    Period_Ending: "2023-03-31",
    Adjustment_Type_to_the_Credit_Union: "Type 1",
    Comment: "Sample Comment",
    Total_Borrower_Fees_: 100.0,
    CU_Retail_Rate: 2.5,
    Protected_Loan_Amount: 5000.0,
    Pay_Rate: 1.5,
    Premium_Due: 100.0,
    Total_Amount: 150.0,
  },
  // Add more sample data as needed
];

export default resolvers;