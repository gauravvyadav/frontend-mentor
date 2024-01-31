"use server";

const AdviceGeneratorAppBackend = async () => {
  const advice = await fetch("https://api.adviceslip.com/advice");
  const adviceJson = await advice.json();

  return adviceJson;
};

export default AdviceGeneratorAppBackend;
