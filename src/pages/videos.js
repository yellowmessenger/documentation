import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './videos.module.css';

// Video data organized by categories
const videoCategories = [
  {
    title: "Getting Started",
    description: "Essential videos to begin your journey with Yellow.ai",
    videos: [
      {
        id: "signup",
        title: "Sign up to Yellow.ai and create your first bot",
        description: "Join Yellow.ai to unlock the power of building and customizing your own bot. With an easy sign-up process, you'll be able to dive right in and start creating your bot from scratch.",
        embedId: "2fdv1Ip3DKI",
        duration: "5:32"
      },
      {
        id: "overview",
        title: "Platform overview",
        description: "Get started with the Yellow.ai's platform and its capabilities. Discover how our platform empowers you to create, customize, and deploy intelligent bots with ease.",
        embedId: "69LmMc4QwME",
        duration: "8:45"
      },
      {
        id: "getting-started-extended",
        title: "Getting Started Guide",
        description: "A comprehensive walkthrough of the Yellow.ai platform and its core features.",
        embedId: "gyB697FRLDQ",
        duration: "12:30"
      }
    ]
  },
  {
    title: "Platform Features",
    description: "Deep dive into specific platform capabilities and features",
    videos: [
      {
        id: "collaborators",
        title: "Add bot collaborators with role-based access",
        description: "Discover the process of granting role-based access to developers and other users within the platform. Role-based access ensures appropriate permissions.",
        embedId: "mWGuhIOE4xI",
        duration: "7:20"
      },
      {
        id: "customization",
        title: "Customizing the Look and Feel of the Chatbot",
        description: "Discover the art of crafting the perfect visual experience for your chatbot. Learn how to manage the chatbot's appearance and styling.",
        embedId: "Q5uKVYSeKh4",
        duration: "9:15"
      }
    ]
  },
  {
    title: "Build with Yellow.ai",
    description: "Learn how to build different types of bots and workflows",
    videos: [
      {
        id: "journey",
        title: "Create a Journey",
        description: "Learn how to create conversational journeys and flows in Yellow.ai platform.",
        embedId: "03iTV7bbrYw",
        duration: "11:45"
      },
      {
        id: "action-node",
        title: "Using an Action Node",
        description: "Master the use of action nodes to create dynamic and interactive bot conversations.",
        embedId: "HVn8DAOsq3M",
        duration: "6:30"
      }
    ]
  }
];

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <div className="video-embed-container">
        <iframe
          src={`https://www.youtube.com/embed/${video.embedId}?rel=0`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="video-card-content">
        <h3 className="video-card-title">{video.title}</h3>
        <p className="video-card-description">{video.description}</p>
        <div className="video-card-meta">
          <span className="video-duration">{video.duration}</span>
        </div>
      </div>
    </div>
  );
}

function VideoCategory({ category }) {
  return (
    <section className="margin-vert--xl">
      <div className="text--center margin-bottom--lg">
        <h2 className={styles.categoryTitle}>{category.title}</h2>
        <p className={styles.categoryDescription}>{category.description}</p>
      </div>
      <div className="video-grid">
        {category.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

function Videos() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  
  return (
    <Layout
      title={`${siteConfig.title} Videos`}
      description="A comprehensive collection of Yellow.ai's platform training videos and tutorials">
      
      {/* Hero Section */}
      <header className={styles.videosHero}>
        <div className="container">
          <div className="text--center">
            <h1 className={styles.videosTitle}>Video Learning Hub</h1>
            <p className={styles.videosSubtitle}>
              Master Yellow.ai through our comprehensive video tutorials. From getting started to advanced features, 
              learn at your own pace with visual demonstrations and step-by-step walkthroughs.
            </p>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          {/* Learning Path Notice */}
          <div className="alert alert--info margin-bottom--lg" style={{ textAlign: 'center' }}>
            <h4>🎓 Want More Learning Resources?</h4>
            <p>
              For comprehensive courses, virtual classroom sessions, and additional content, 
              visit <a href="https://ascend.yellow.ai/" target="_blank" rel="noopener noreferrer">
                Yellow.ai's Ascend platform
              </a> and sign up for full access.
            </p>
          </div>

          {/* Video Categories */}
          {videoCategories.map((category, index) => (
            <VideoCategory key={index} category={category} />
          ))}

          {/* Call to Action */}
          <section className="text--center margin-vert--xl">
            <div className={styles.ctaSection}>
              <h2>Ready to Get Started?</h2>
              <p>Start building your first bot today with Yellow.ai's intuitive platform.</p>
              <a 
                href="https://cloud.yellow.ai/auth/signup?utm_source=SupportDocs&utm_medium=video_page&utm_campaign=docs_videos" 
                className="button button--primary button--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try for Free
              </a>
            </div>
          </section>
        </div>
      </main>
      
    </Layout>
  );
}

export default Videos;
