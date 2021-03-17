import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Footer from "../core/Footer";
import StillNotFind from "../components/StillNotFind";

const Documentation = () => {
  return (
    <Layout
      title="Documentation"
      description="Add strong authentication, fine-grained authorization in your apps, devices, and APIs."
    >
      <main className={styles.main_wrapper}>
        <header className={`${styles.heroBanner} hero`}>
          <div className="container">
            <h1 className={styles.hero_title}>Documentation</h1>
            <p className={styles.hero_sub_title}>
              Learn the basics of the platform, review channel integrations and
              security compliance documents.
            </p>
          </div>
        </header>
        <StillNotFind />
      </main>
      <Footer />
    </Layout>
  );
};
export default Documentation;
