import React from "react";
import Layout from "@theme/Layout";
import Header from "../components/Header";
import Overview from "../components/Overview";
import QuickReads from "../components/QuickReads";
import Community from "../components/Community";
import StillNotFind from "../components/StillNotFind";
import Footer from "../core/Footer";
import styles from "./styles.module.css";

const Howtos = () => {
  const overviews = [
    {
      title: "Basic",
      description: "Get the latest updates on features etc ( Need more copy)",
      to: "/docs/howtos/basics/create-a-bot",
    },
    {
      title: "Create",
      description: "Get the latest updates on features etc ( Need more copy)",
      to: "/docs/howtos/basics/create-a-bot",
    },
    {
      title: "Context management",
      description: "Get the latest updates on features etc ( Need more copy)",
      to: "/docs/howtos/basics/create-a-bot",
    },
    {
      title: "Web - widget",
      description: "Get the latest updates on features etc ( Need more copy)",
      to: "/docs/howtos/basics/create-a-bot",
    },
  ];

  return (
    <Layout
      title="How - to’s"
      description="Learn the basics of the platform, review channel integrations and security compliance documents."
    >
      <main className={styles.main_wrapper}>
        <Header
          title="How - to’s"
          description="Learn the basics of the platform, review channel integrations and security compliance documents."
          placeholder="Search how-to’s"
        />
        <section className={styles.section_container}>
          <h2 className={styles.overview_title}>Overview</h2>
          <div className={styles.contents}>
            <div className={styles.details}>
              {overviews.map((overview, index) => (
                <Overview
                  key={index}
                  title={overview.title}
                  description={overview.description}
                  path={overview.to}
                />
              ))}
            </div>
            <div className={styles.right_sidebar}>
              <QuickReads
                list={[
                  "Campaigns using audience API",
                  "Platform API",
                  "Bot events",
                  "User events",
                  "Analytics events",
                ]}
              />
              <Community />
            </div>
          </div>
        </section>
        <StillNotFind />
      </main>
      <Footer />
    </Layout>
  );
};

export default Howtos;
