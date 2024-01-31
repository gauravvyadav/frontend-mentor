"use server";

const AdviceGeneratorAppBackend = async () => {
  try {
    const advice = await fetch("https://api.adviceslip.com/advice");
    const adviceJson = await advice.json();
    return adviceJson;
  } catch (error) {
    return {
      slip: {
        id: 404,
        advice:
          "The advice API is currently unavailable. Please try again later",
      },
    };
  }
};

export default AdviceGeneratorAppBackend;
