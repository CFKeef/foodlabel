import React from "react";
import Link from "next/link";
import styles from "../styles/Pricing.module.scss";
import Check from "../public/images/check.svg";

interface Package {
  title: string;
  price: number;
  features: string[];
}

const Pricing: React.FunctionComponent = () => {
  // Generates the list for this section
  const generateList = () => {
    // Handles setting the cards to the correct color based on its index
    const handleCardColor = (index: number) => {
      switch (index) {
        case 0:
          return styles.orange;
        case 1:
          return styles.blue;
        case 2:
          return styles.green;
        case 3:
          return styles.yellow;
      }
    };
    const list: Package[] = [
      {
        title: "Try It!",
        price: 49,
        features: ["Pay As You Go", "Instant Creation"],
      },
      {
        title: "Starter",
        price: 199,
        features: ["40 Labels per month", "Instant Creation"],
      },
      {
        title: "Premium",
        price: 299,
        features: ["Unlimited Labels", "Instant Creation"],
      },
      {
        title: "Annual",
        price: 199,
        features: ["Unlimited Labels", "Instant Creation"],
      },
    ];

    return (
      <ul className={styles.packagesList}>
        {list.map((element, index) => {
          return (
            <li
              className={styles.packageContainer + " " + handleCardColor(index)}
              key={"package" + index}
            >
              <h2>{element.title}</h2>
              <h1>
                ${element.price}
                {index == 0 ? "/label" : "/month"}
              </h1>
              <ul>
                {element.features.map((feature, featureIndex) => {
                  return (
                    <li key={"package" + index + " feature" + featureIndex}>
                      <img src={Check} />
                      <p>{feature}</p>
                    </li>
                  );
                })}
              </ul>
              <Link href={"/purchase/" + index}>Get Started</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section id={"pricing"} className={styles.pricingContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.header}>Pricing</h1>
        <p className={styles.subHeader}>
          Pay as you go or get a subscription package!
        </p>
        {generateList()}
      </div>
    </section>
  );
};

export default Pricing;
