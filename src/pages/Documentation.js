import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Footer from "../core/Footer";
import StillNotFind from "../components/StillNotFind";
import Header from "../components/Header";
import Overview from "../components/Overview";
import QuickReads from "../components/QuickReads";
import Community from "../components/Community";

const Documentation = () => {
  const overviews = [
    {
      title: "Concepts",
      description: "Learn the building blocks of the platform.",
      to: "/docs/concepts/overview",
    },
    {
      title: "Channel configuration",
      description:
        "Learn the steps to configure different channels where your customers are likely to be found.",
      to: "/docs/channelConfiguration/overview",
    },
    {
      title: "Compliances",
      description:
        "List of compliance certificates to ensure security of platform.",
      to: "/docs/compliances/overview",
    },
    {
      title: "App configuration",
      description:
        "Resources to have additional plugins, webhooks and API guides",
      to: "/docs/appConfiguration/overview",
    },
  ];

  return (
    <Layout
      title="Documentation"
      description="Add strong authentication, fine-grained authorization in your apps, devices, and APIs."
    >
      <main className={styles.main_wrapper}>
        <Header
          title="Documentation"
          description=" Learn the basics of the platform, review channel integrations and
              security compliance documents."
          placeholder="Search documentation"
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
                  "What are journeys ?",
                  "Template journeys",
                  "Bot knowledge",
                  "Android Chatbot SDK",
                  "Generic channel integration",
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
export default Documentation;
