import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Footer from "../core/Footer";
import styles from "./styles.module.css";
import StillNotFind from "../components/StillNotFind";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Topics from "../components/Topics";
import Community from "../components/Community";

const features = [
  {
    title: <>Getting Started</>,
    imageUrl: "img/getting-started.svg",
    description: (
      <>
        A step-by-step guide to setup Axioms according to your authentication
        and access-control requirements.
      </>
    ),
    pageUrl: "docs/getting-started/index",
  },
  {
    title: <>SDKs & Samples</>,
    imageUrl: "img/sdks-samples.svg",
    description: (
      <>
        Use our languages and framework specific SDKs and samples to integrate
        Axioms with your apps and services.
      </>
    ),
    pageUrl: "docs/sdks-samples/index",
  },
  {
    title: <>OpenID & OAuth 2</>,
    imageUrl: "img/standard-compliance.svg",
    description: (
      <>
        Deep-dive into all OpenID Connect (OIDC) and OAuth 2 compliant platform
        features using our advanced guides.
      </>
    ),
    pageUrl: "docs/openid-connect/index",
  },
];

function Feature({ imageUrl, title, description, pageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="learn-more">
        <a href={pageUrl}>Learn more →</a>
      </p>
    </div>
  );
}

const iframe =
  '<iframe src="https://d3metalab.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>';

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const topics = [
    {
      title: "Documentation",
      description:
        "Learn the platform basics, review channel intergration and security compilance documents.",
      icon: "ri-booklet-line",
    },
    {
      title: "Developer",
      description:
        "Customize the bot further with functions, api integrations and event references.",
      icon: "ri-code-s-slash-line",
    },
    {
      title: "How to’s",
      description:
        "complete step-by-step guide to build a bot, from idea to execution.",
      icon: "ri-question-line",
    },
    {
      title: "Cookbooks",
      description:
        "Zero to one of building bots for simple usecases at lightening speed.",
      icon: "ri-lightbulb-flash-line",
    },
  ];
  return (
    <Layout
      title="Home"
      description="Add strong authentication, fine-grained authorization in your apps, devices, and APIs."
    >
      <Navbar />
      <main className={styles.main_wrapper}>
        {/* <div className={styles.buttons}>
            <Link
              className={classnames(
                "button cta-btn button--outline button--primary button--lg",
                styles.getStarted
              )}
              to={"https://cloud.yellowmessenger.com"}
            >
              <i className="feather icon-arrow-right"></i> Get started for free
            </Link>
            <Link
              className={classnames(
                "button cta-btn button--outline button--success button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/cookbooks")}
            >
              <i className="feather icon-github"></i> Explore Cookbooks
            </Link>
          </div> */}
        <Header
          title="Hi, how can we help you?"
          description=" Refer documentation to build and deploy bots on channels where your
          customers are!"
        />
        <section className={styles.section_container}>
          <h2 className={styles.title}>Browse topics</h2>
          <p className={styles.description}>
            Set up simple bots within minutes or learn about how to develop a
            complex bot that caters to your usecase
          </p>
          <div className={styles.contents}>
            <div className={styles.topics_details}>
              {topics.map((topic, index) => (
                <Topics
                  key={index}
                  title={topic.title}
                  description={topic.description}
                  icon={topic.icon}
                />
              ))}
            </div>
            <div className={styles.right_sidebar}>
              <div className={styles.quick_reads}>
                <h2>Quick reads</h2>
                <p className={styles.description}>
                  We gathered some handy resources so that you can get quickly
                  started.
                </p>
                <ul className={styles.reads}>
                  <li className={styles.read}>How to build your first bot ?</li>
                  <li className={styles.read}>Create a database table ?</li>
                  <li className={styles.read}>How to setup a web widget ?</li>
                  <li className={styles.read}>How to create new function ?</li>
                  <li className={styles.read}>How to share bot access ?</li>
                </ul>
              </div>
              <Community />
            </div>
          </div>
        </section>
        <StillNotFind />
      </main>
      <Footer />
    </Layout>
  );
}

export default Home;
