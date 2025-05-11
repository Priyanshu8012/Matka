import React from "react";

const matkaSections = [
  {
    title: "HISTORY OF SATTA MATKA",
    content:
      "The Satta Matka game originated as a form of lottery and betting. It evolved in Mumbai during the 1960s and gained popularity rapidly."
  },
  {
    title: "TYPES OF SATTA MATKA",
    content:
      "There are several types like Kalyan Matka, Rajdhani Matka, Milan Day, Madhur, and many more depending on the time and region."
  },
  {
    title: "THE BASICS OF GAMING",
    content:
      "Players select numbers and place bets. Results are declared at set times, and winners are those who match the declared numbers."
  },
  {
    title: "DIFFERENT VARIANTS OF MATKA GAMES",
    content:
      "Variants include Single, Jodi, Patti, Panel, and others. Each has a distinct betting method and payout."
  },
  {
    title: "WHAT IS KALYAN MATKA AND ITS WINNING STRATEGY?",
    content:
      "Kalyan Matka is a daily Matka game with specific opening and closing times. Players use charts, tips, and guesswork to improve their chances."
  },
  {
    title: "WHAT IS SRIDEVI MATKA?",
    content:
      "A famous Matka game with its own schedule. Known for fast result declaration."
  },
  {
    title: "WHAT IS MILAN MATKA?",
    content:
      "Milan Day and Night sessions are popular with regular players."
  },
  {
    title: "WHAT IS SATTA MATKA MARKET?",
    content:
      "Markets are virtual or physical locations where players place bets. Results are published for each market."
  },
  {
    title: "WHAT IS A SATTA JODI?",
    content:
      "A Jodi is a pair of digits. Matching the correct Jodi wins a high payout."
  },
  {
    title: "WHO INVENTED MATKA?",
    content:
      "The game’s concept was shaped in the 1960s by Ratan Khatri."
  },
  {
    title: "WHAT IS KALYAN NIGHT RESULT?",
    content:
      "Night results are published for the Kalyan market based on draw timing."
  },
  {
    title: "WHAT IS MATKA CHART?",
    content:
      "Charts record the results of past games. Players use them to predict upcoming results."
  },
  {
    title: "WHAT DOES OPEN AND CLOSE MEAN IN MATKA?",
    content:
      "Open means the first draw number; close is the second draw number."
  },
  {
    title: "WHAT IS LUCKY NUMBER?",
    content:
      "A guessed number that results in a win. Players often follow patterns or tips to find these."
  },
  {
    title: "SATTA MATKA TIPS?",
    content:
      "Tips include observing charts, managing funds, and avoiding risky moves."
  },
  {
    title: "SATTA MATKA ONLINE",
    content:
      "Now played on websites and apps. Easier to access results and place bets digitally."
  },
  {
    title: "DISCLAIMER",
    content:
      "This information is for educational and informational purposes only. We do not promote gambling."
  }
];

const SattaMatkaInfo = () => {
  return (
    <div className="bg-orange-100 text-center text-black min-h-screen p-4">
      <div className="bg-pink-600 text-white text-lg font-bold py-3 uppercase">Satta Matka Info Center</div>

      {matkaSections.map((section, index) => (
        <div
          key={index}
          className="border border-red-500 bg-orange-100 text-sm p-3 my-2"
        >
          <h2 className="text-base font-semibold text-pink-700 underline">
            {section.title}
          </h2>
          <p className="mt-1">{section.content}</p>
        </div>
      ))}

      <div className="bg-pink-600 text-white text-xs italic py-2 mt-4">
        POWERED BY OpenAI Layout - Informational Page Only
      </div>
    </div>
  );
};

export default SattaMatkaInfo;
