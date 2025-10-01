import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './highlights.module.css';
import { featureHighlights, allUpdates, getLastUpdatedDisplay } from '@site/src/utils/whatsNewData';

// Data is now imported from shared utility to keep both pages in sync

// All data is now imported from shared utility - see /src/utils/whatsNewData.js

export default function WhatsNewOverview() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedContentType, setSelectedContentType] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'timeline'
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedUpdates, setExpandedUpdates] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to render formatted description with markdown-like support
  const renderFormattedDescription = (description) => {
    const lines = description.split('\n');
    const elements = [];
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        elements.push(<br key={`br-${index}`} />);
        return;
      }
      
      // Handle headings (###)
      if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h4 key={index} className={styles.markdownHeading}>
            {trimmedLine.replace('### ', '')}
          </h4>
        );
      }
      // Handle bullet points (-)
      else if (trimmedLine.startsWith('- ')) {
        elements.push(
          <div key={index} className={styles.markdownBullet}>
            <span className={styles.bulletPoint}>• </span>
            <span dangerouslySetInnerHTML={{
              __html: trimmedLine.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          </div>
        );
      }
      // Handle regular paragraphs
      else {
        elements.push(
          <p key={index} className={styles.markdownParagraph}>
            <span dangerouslySetInnerHTML={{
              __html: trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          </p>
        );
      }
    });
    
    return elements;
  };

  // Get unique categories and content types
  const categories = ['All', ...new Set(allUpdates.map(update => update.category))];
  const contentTypes = ['All', 'Major Features'];

  // Filter updates by category and content type
  const filteredUpdates = allUpdates
    .filter(update => {
      const categoryMatch = selectedCategory === 'All' || update.category === selectedCategory;
      const contentTypeMatch = selectedContentType === 'All' || 
        (selectedContentType === 'Major Features' && update.contentType === 'major');
      return categoryMatch && contentTypeMatch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

  // For timeline view, combine major updates and recent changes
  const getTimelineData = () => {
    if (viewMode !== 'timeline') return filteredUpdates;
    
    // Convert feature highlights to timeline format
    const majorUpdatesForTimeline = featureHighlights.map(feature => ({
      ...feature,
      description: feature.shortDescription,
      fullDescription: feature.fullDescription,
      type: 'Major Update',
      contentType: 'major',
      category: feature.category,
      icon: feature.icon || '🚀', // Use specific icon if available, fallback to rocket
      isMajorUpdate: true,
      highlights: feature.highlights
    }));

    // Combine and sort by date (newest first)
    const combined = [...majorUpdatesForTimeline, ...filteredUpdates];
    return combined.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const timelineData = getTimelineData();

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const toggleUpdateExpansion = (updateTitle) => {
    const newExpanded = new Set(expandedUpdates);
    if (newExpanded.has(updateTitle)) {
      newExpanded.delete(updateTitle);
    } else {
      newExpanded.add(updateTitle);
    }
    setExpandedUpdates(newExpanded);
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeImageModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <Layout
      title="What's New"
      description="Stay up to date with the latest improvements and new capabilities in Yellow.ai"
    >
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              What's New in <span className={styles.gradient}>Yellow.ai</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We're constantly evolving with new features and enhancements to help you achieve more with our Agentic AI.
            </p>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className={styles.quickStats}>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>📈</span>
            <span className={styles.statValue}>{allUpdates.length + featureHighlights.length}+</span>
            <span>Updates</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>🚀</span>
            <span className={styles.statValue}>{featureHighlights.length}</span>
            <span>Major Features</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>📅</span>
            <span className={styles.statValue}>{getLastUpdatedDisplay()}</span>
            <span>Last Updated</span>
          </div>
        </div>

        <div className={styles.heroDivider}></div>

        {/* Controls Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionControls}>
              <div className={styles.viewToggle}>
                <button 
                  className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <svg className={styles.toggleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                  </svg>
                  <span>Grid</span>
                </button>
                <button 
                  className={`${styles.viewButton} ${viewMode === 'timeline' ? styles.active : ''}`}
                  onClick={() => setViewMode('timeline')}
                >
                  <svg className={styles.toggleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20"/>
                    <circle cx="12" cy="6" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="18" r="2"/>
                  </svg>
                  <span>Timeline</span>
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className={styles.filterSection}>
            <div className={styles.filterGroup}>
              <div className={styles.filterContainer}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className={styles.filterGroup}>
              <div className={styles.filterContainer}>
                {contentTypes.map(contentType => (
                  <button
                    key={contentType}
                    className={`${styles.filterButton} ${selectedContentType === contentType ? styles.active : ''}`}
                    onClick={() => setSelectedContentType(contentType)}
                  >
                    {contentType}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {viewMode === 'grid' ? (
          <>
            {/* Major Updates - Grid View */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>🚀</span>
                  Major Updates
                </h2>
                <p className={styles.sectionSubtitle}>
                  Discover the most impactful updates that are transforming how you build and deploy AI agents
                </p>
              </div>
              
              <div className={styles.highlightsGrid}>
                {featureHighlights.map((feature, index) => (
                  <div 
                    key={feature.id} 
                    className={`${styles.highlightCard} ${expandedCard === feature.id ? styles.expanded : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={styles.cardHeader}>
                      <div className={`${styles.cardBadge} ${
                        feature.badge === 'New Feature' ? styles.newFeature :
                        feature.badge === 'Enhancement' ? styles.enhancement :
                        feature.badge === 'Major Update' ? styles.majorUpdate : ''
                      }`}>{feature.badge}</div>
                      <span className={styles.cardDate}>{feature.date}</span>
                    </div>
                    
                    {feature.image && (
                      <div className={styles.cardImageContainer}>
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className={styles.cardImage}
                          onClick={() => openImageModal(feature.image)}
                        />
                      </div>
                    )}
                    
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{feature.title}</h3>
                      <div className={styles.cardDescription}>
                        {renderFormattedDescription(expandedCard === feature.id ? feature.fullDescription : feature.shortDescription)}
                      </div>
                      
                      {expandedCard === feature.id && feature.highlights && (
                        <ul className={styles.highlightsList}>
                          {feature.highlights.map((highlight, idx) => (
                            <li key={idx} className={styles.highlightItem}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                      
                      <div className={styles.expandLinkContainer}>
                        <a 
                          className={styles.expandLink}
                          onClick={() => toggleCard(feature.id)}
                          role="button"
                          tabIndex={0}
                        >
                          {expandedCard === feature.id ? '▲ Show Less' : '▼ Show More Details'}
                        </a>
                      </div>
                    </div>
                    
                    <div className={styles.cardFooter}>
                      <span className={styles.cardCategoryBadge}>{feature.category}</span>
                      <div className={styles.cardActions}>
                        <Link to={feature.link} className={styles.readMoreButton}>
                          Read Docs →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Changes - Grid View */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>✨</span>
                  Recent Updates
                </h2>
              </div>

              <div className={`${styles.updatesContainer} ${styles.grid}`}>
                {filteredUpdates.map((update, index) => {
                  const isExpanded = expandedUpdates.has(update.title);
                  const hasExpandableContent = update.fullDescription || update.highlights || update.image;
                  
                  return (
                    <div 
                      key={`${update.title}-${index}`} 
                      className={`${styles.updateCard} ${isExpanded ? styles.expanded : ''}`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className={styles.updateContent}>
                        <div className={styles.updateHeader}>
                          <div className={styles.updateMeta}>
                            <span className={styles.updateIcon}>{update.icon}</span>
                            <span className={`${styles.updateBadge} ${styles[update.badge]}`}>
                              {update.badge}
                            </span>
                            <span className={styles.updateDate}>{update.date}</span>
                          </div>
                        </div>
                        
                        {update.image && isExpanded && (
                          <div className={styles.updateImageContainer}>
                            <img 
                              src={update.image} 
                              alt={update.title}
                              className={styles.updateImage}
                              onClick={() => openImageModal(update.image)}
                            />
                          </div>
                        )}
                        
                        <h3 className={styles.updateTitle}>{update.title}</h3>
                        <div className={styles.updateDescription}>
                          {renderFormattedDescription(isExpanded && update.fullDescription ? update.fullDescription : update.description)}
                        </div>
                        
                        {isExpanded && update.highlights && (
                          <ul className={styles.updateHighlights}>
                            {update.highlights.map((highlight, idx) => (
                              <li key={idx} className={styles.updateHighlightItem}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                        
                        <div className={styles.expandSection}>
                          {hasExpandableContent ? (
                            <button 
                              className={styles.expandButton}
                              onClick={() => toggleUpdateExpansion(update.title)}
                            >
                              {isExpanded ? '▲ Show Less' : '▼ Show More'}
                            </button>
                          ) : (
                            <div className={styles.expandSpacer}></div>
                          )}
                        </div>
                        
                        <div className={styles.updateFooter}>
                          <span className={styles.updateCategory}>{update.category}</span>
                          <Link to={update.link} className={styles.updateLink}>
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        ) : (
          /* Unified Timeline View */
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📅</span>
                Update Timeline
              </h2>
              <p className={styles.sectionSubtitle}>
                All updates in chronological order
              </p>
            </div>

            <div className={`${styles.updatesContainer} ${styles.timeline}`}>
              {timelineData.map((item, index) => {
                const isExpanded = item.isMajorUpdate ? expandedCard === item.id : expandedUpdates.has(item.title);
                const hasExpandableContent = item.fullDescription || item.highlights || item.image;
                const uniqueKey = item.isMajorUpdate ? item.id : item.title;
                
                // Determine marker style based on update type
                const getMarkerClass = () => {
                  if (item.isMajorUpdate) return styles.majorUpdate;
                  if (item.type === 'Security Update') return styles.securityUpdate;
                  return styles.regularUpdate;
                };

                // Determine card style
                const cardClass = `${styles.updateCard} ${styles.timelineItem} ${
                  item.isMajorUpdate ? styles.majorUpdateCard : ''
                } ${isExpanded ? styles.expanded : ''}`;
                
                return (
                  <div 
                    key={`${uniqueKey}-${index}`} 
                    className={cardClass}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={styles.updateContent}>
                      <div className={styles.updateHeader}>
                        <div className={styles.updateMeta}>
                          <span className={styles.updateIcon}>{item.icon}</span>
                          <span className={`${styles.updateBadge} ${item.isMajorUpdate ? styles.majorUpdate : styles[item.badge]}`}>
                            {item.isMajorUpdate ? 'Major Update' : item.badge}
                          </span>
                          <span className={styles.updateDate}>{item.date}</span>
                        </div>
                      </div>
                      
                      {item.image && isExpanded && (
                        <div className={styles.updateImageContainer}>
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className={styles.updateImage}
                            onClick={() => openImageModal(item.image)}
                          />
                        </div>
                      )}
                      
                      <h3 className={styles.updateTitle}>{item.title}</h3>
                      <p className={styles.updateDescription}>
                        {isExpanded && item.fullDescription ? item.fullDescription : item.description}
                      </p>
                      
                      {isExpanded && item.highlights && (
                        <ul className={styles.updateHighlights}>
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className={styles.updateHighlightItem}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                      
                      <div className={styles.updateFooter}>
                        <div className={styles.updateFooterLeft}>
                          <span className={styles.updateCategory}>{item.category}</span>
                          {hasExpandableContent && (
                            <button 
                              className={styles.expandButton}
                              onClick={() => item.isMajorUpdate ? toggleCard(item.id) : toggleUpdateExpansion(item.title)}
                            >
                              {isExpanded ? '▲ Show Less' : '▼ Show More'}
                            </button>
                          )}
                        </div>
                        <Link to={item.link} className={styles.updateLink}>
                          Learn more →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Historical Updates Navigation */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🕰</span>
              Historical Updates
            </h2>
            <p className={styles.sectionSubtitle}>
              Browse previous updates organized by time period
            </p>
          </div>
          
          <div className={styles.historicalNav}>
            <div className={styles.yearSection}>
              <h3 className={styles.yearTitle}>2025</h3>
              <div className={styles.releaseLinks}>
                <Link to="/docs/updates/2025/april-q2" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>Q2 Updates</span>
                  <span className={styles.releaseDescription}>Apr, May, Jun updates</span>
                </Link>
                <Link to="/docs/updates/2025/q12025" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>Q1 Updates</span>
                  <span className={styles.releaseDescription}>Jan, Feb, Mar updates</span>
                </Link>
              </div>
            </div>
            
            <div className={styles.yearSection}>
              <h3 className={styles.yearTitle}>2024</h3>
              <div className={styles.releaseLinks}>
                <Link to="/docs/updates/2024/dec24" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>December 2024</span>
                  <span className={styles.releaseDescription}>Year-end features</span>
                </Link>
                <Link to="/docs/updates/2024/sep2024" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>September 2024</span>
                  <span className={styles.releaseDescription}>Insights revamp</span>
                </Link>
                <Link to="/docs/updates/2024/aug2024" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>August 2024</span>
                  <span className={styles.releaseDescription}>Platform improvements</span>
                </Link>
                <Link to="/docs/updates/2024/july2024" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>July 2024</span>
                  <span className={styles.releaseDescription}>Summer updates</span>
                </Link>
                <Link to="/docs/updates/2024/june24" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>June 2024</span>
                  <span className={styles.releaseDescription}>Mid-year features</span>
                </Link>
                <Link to="/docs/updates/2024/may2024" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>May 2024</span>
                  <span className={styles.releaseDescription}>Spring updates</span>
                </Link>
              </div>
            </div>

            <div className={styles.yearSection}>
              <h3 className={styles.yearTitle}>2023</h3>
              <div className={styles.releaseLinks}>
                <Link to="/docs/updates/2023/dec2023" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>December 2023</span>
                  <span className={styles.releaseDescription}>Year-end updates</span>
                </Link>
                <Link to="/docs/updates/2023/nov2023" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>November 2023</span>
                  <span className={styles.releaseDescription}>Fall updates</span>
                </Link>
                <Link to="/docs/updates/2023/oct2023" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>October 2023</span>
                  <span className={styles.releaseDescription}>Autumn features</span>
                </Link>
                <Link to="/docs/updates/2023/sep2023" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>September 2023</span>
                  <span className={styles.releaseDescription}>Updates</span>
                </Link>
                <Link to="/docs/updates/2023/aug2023" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>August 2023</span>
                  <span className={styles.releaseDescription}>Summer enhancements</span>
                </Link>
                <Link to="/docs/updates/2023/jul2023" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>July 2023</span>
                  <span className={styles.releaseDescription}>Mid-year updates</span>
                </Link>
              </div>
            </div>

            <div className={styles.yearSection}>
              <h3 className={styles.yearTitle}>2022</h3>
              <div className={styles.releaseLinks}>
                <Link to="/docs/updates/2022/dec2022" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>December 2022</span>
                  <span className={styles.releaseDescription}>Year-end updates</span>
                </Link>
                <Link to="/docs/updates/2022/nov2022" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>November 2022</span>
                  <span className={styles.releaseDescription}>Fall updates</span>
                </Link>
                <Link to="/docs/updates/2022/oct2022" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>October 2022</span>
                  <span className={styles.releaseDescription}>Autumn features</span>
                </Link>
                <Link to="/docs/updates/2022/sep_updates" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>September 2022</span>
                  <span className={styles.releaseDescription}>Platform updates</span>
                </Link>
                <Link to="/docs/updates/2022/aug" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>August 2022</span>
                  <span className={styles.releaseDescription}>Summer updates</span>
                </Link>
                <Link to="/docs/updates/2022/july" className={styles.releaseLink}>
                  <span className={styles.releasePeriod}>July 2022</span>
                  <span className={styles.releaseDescription}>Mid-year updates</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className={styles.modal} onClick={closeImageModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.modalClose} onClick={closeImageModal}>×</button>
              <img src={selectedImage} alt="Enlarged view" className={styles.modalImage} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

