import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './videos.module.css';
import ReactPlayer from 'react-player/youtube'

function Videos() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Videos`}
      description="A collection of Benthos videos">
      <header>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--6 col--offset-3')}>
              <h1 className={styles.videosTitle}></h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h2>Sign up to yellow.ai</h2>
              <p>See how to sign up to Yellow.ai and get started creating your first bot.</p>
            </div> 
            <ReactPlayer
              className={classnames('col col--8 col--offset-2')}
              url='https://youtu.be/5RhnA_jOdlM'
              controls='true'
            />
          </div>
        </div>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h2>Platform overview</h2>
              <p>Get started with the Yellow.ai's platform and it's capabilities.</p>
            </div> 
            <ReactPlayer
              className={classnames('col col--8 col--offset-2')}
              url='https://youtu.be/QYRdym4wZf8'
              controls='true'
            />
          </div>
        </div>
      </main>
      
    </Layout>
  );
}

export default Videos;
