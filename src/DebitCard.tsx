import { useState, useCallback } from "react";
import { ATMCard } from "atm-card-react";

interface DebitCardProps {
  number: string;
  month: number;
  year: number;
  holder: string;
  cvv: string;
}

function DebitCard({ number, month, year, holder, cvv }: DebitCardProps) {
  const [cardNumber, setCardNumber] = useState<string>(number);
  const [cardMonth, setCardMonth] = useState<number>(month);
  const [cardYear, setCardYear] = useState<number>(year);
  const [cardHolder, setCardHolder] = useState<string>(holder);
  const [cardCvv, setCardCvv] = useState<string>(cvv);

  const cardSystem = useCallback(
    (cardNumber: string) => {
      const patterns = [
        { name: "visa", pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { name: "mastercard", pattern: /^5[1-5][0-9]{14}$/ },
        { name: "americanexpress", pattern: /^3[47][0-9]{13}$/ },
        { name: "jcb", pattern: /^(?:352[89]|35[3-8][0-9])[0-9]{12,15}$/ },
        { name: "dinersclub", pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { name: "mir", pattern: /^220[0-4][0-9]{12}$/ },
      ];

      // Recorre los patrones para encontrar coincidencias
      for (const { name, pattern } of patterns) {
        if (pattern.test(cardNumber)) {
          return name;
        }
      }

      return "Unknown";
    },
    [number]
  );

  const cardColor = useCallback(() => {
    const colors = ["#3B556E", "#F3B493", "#4FC1DB", "#DF3512", "#ECA11F"];

    const choseColor = Math.floor(Math.random() * colors.length);

    return colors[choseColor];
  }, []);

  const handleCardChange = (data: any) => {
    setCardNumber(data.number);
    setCardCvv(data.cvv);
    setCardMonth(data.month);
    setCardYear(data.year);
    setCardHolder(data.holder);
  };

  return (
    <ATMCard
      year={year}
      month={month}
      cvv={cvv}
      number={number}
      holderName={holder}
      bankLogo={
        <h1
          style={{
            fontFamily: "Arial",
            fontSize: 30,
            color: "white",
          }}
        >
          DEBIT CARD
        </h1>
      }
      lifted
      bgColor={cardColor()}
      system={cardSystem(number)}
      onChange={handleCardChange}
    />
  );
}

export default DebitCard;
