import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Footer from "../core/Footer";
import StillNotFind from "../components/StillNotFind";
import Header from "../components/Header";

const Documentation = () => {
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
        />
        <StillNotFind />
      </main>
      <Footer />
    </Layout>
  );
};
export default Documentation;
