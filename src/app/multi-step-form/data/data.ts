interface Step {
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    title: "Step 1",
    description: "Your info",
  },
  {
    title: "Step 2",
    description: "Select plan",
  },
  {
    title: "Step 3",
    description: "Add-ons",
  },
  {
    title: "Step 4",
    description: "Summary",
  },
];

export const billingPlans = {
  Monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  Yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
  },
};

export const addons = [
  {
    title: "Online service",
    desc: "Access to multiplayer games",
    price: {
      Monthly: 1,
      Yearly: 10,
    },
  },
  {
    title: "Larger storage",
    desc: "Extra 1TB cloud save",
    price: {
      Monthly: 2,
      Yearly: 20,
    },
  },
  {
    title: "Customizable profile",
    desc: "Custom theme on your profile",
    price: {
      Monthly: 2,
      Yearly: 20,
    },
  },
];
