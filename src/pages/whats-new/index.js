import React, { useState, useEffect, useRef } from 'react';
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
  const cardRefs = useRef({});

  // Format date to show "Upcoming" for future dates or today before 4pm
  const formatDateDisplay = (dateString) => {
    const itemDate = new Date(dateString);
    const now = new Date();
    
    // Compare dates (ignoring time)
    const itemDateOnly = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate());
    const todayOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Future date
    if (itemDateOnly > todayOnly) {
      return 'Upcoming';
    }
    
    // Today but before 4pm (16:00)
    if (itemDateOnly.getTime() === todayOnly.getTime() && now.getHours() < 16) {
      return 'Upcoming';
    }
    
    // Today after 4pm or past date - return the original date
    return dateString;
  };

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

  // Convert feature highlights to unified format
  const majorUpdatesFormatted = featureHighlights.map(feature => ({
    ...feature,
    description: feature.shortDescription,
    fullDescription: feature.fullDescription,
    type: 'Major Update',
    contentType: 'major',
    category: feature.category,
    icon: feature.icon || '🚀',
    isMajorUpdate: true,
    highlights: feature.highlights,
    badge: feature.badge || 'MAJOR',
    link: feature.link || '#'
  }));

  // Combine all updates (major + regular) into single array
  const allUpdatesCombined = [...majorUpdatesFormatted, ...allUpdates];

  // Get unique categories from combined updates
  const categories = ['All', ...new Set(allUpdatesCombined.map(update => update.category))];
  const contentTypes = ['All', 'Major Features'];

  // Filter updates by category and content type
  const filteredUpdates = allUpdatesCombined
    .filter(update => {
      const categoryMatch = selectedCategory === 'All' || update.category === selectedCategory;
      const contentTypeMatch = selectedContentType === 'All' || 
        (selectedContentType === 'Major Features' && update.contentType === 'major');
      return categoryMatch && contentTypeMatch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

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

  // Click outside to collapse expanded cards
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if clicking outside any expanded card
      if (expandedCard !== null) {
        const cardElement = cardRefs.current[expandedCard];
        if (cardElement && !cardElement.contains(event.target)) {
          setExpandedCard(null);
        }
      }
      
      // Check for expanded regular updates
      if (expandedUpdates.size > 0) {
        let clickedOutside = true;
        expandedUpdates.forEach(updateTitle => {
          const cardElement = cardRefs.current[updateTitle];
          if (cardElement && cardElement.contains(event.target)) {
            clickedOutside = false;
          }
        });
        if (clickedOutside) {
          setExpandedUpdates(new Set());
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedCard, expandedUpdates]);

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

        {/* Unified Updates Section - Single section for all updates */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>✨</span>
              {viewMode === 'grid' ? 'Recent Updates' : 'Timeline View'}
            </h2>
            {viewMode === 'timeline' && (
              <p className={styles.sectionSubtitle}>
                Chronological view of all updates
              </p>
            )}
          </div>

          {viewMode === 'grid' ? (
            <div className={`${styles.updatesContainer} ${styles.grid}`}>
              {filteredUpdates.map((update, index) => {
                const isMajorUpdate = update.isMajorUpdate || update.contentType === 'major';
                const isExpanded = isMajorUpdate 
                  ? expandedCard === update.id 
                  : expandedUpdates.has(update.title);
                const hasExpandableContent = update.fullDescription || update.highlights || update.image;
                
                // Use highlight card style for major updates, regular card for others
                const cardClass = isMajorUpdate 
                  ? `${styles.highlightCard} ${isExpanded ? styles.expanded : ''}`
                  : `${styles.updateCard} ${isExpanded ? styles.expanded : ''}`;
                
                const handleCardClick = (e) => {
                  // Don't expand if clicking on links, buttons, or images
                  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG' || e.target.closest('a') || e.target.closest('button')) {
                    return;
                  }
                  // Toggle expansion
                  if (isMajorUpdate) {
                    toggleCard(update.id || update.title);
                  } else {
                    toggleUpdateExpansion(update.title);
                  }
                };

                const cardKey = isMajorUpdate ? update.id : update.title;
                
                return (
                  <div 
                    key={isMajorUpdate ? update.id : `${update.title}-${index}`} 
                    ref={(el) => cardRefs.current[cardKey] = el}
                    className={cardClass}
                    style={{ animationDelay: `${index * 50}ms`, cursor: hasExpandableContent ? 'pointer' : 'default' }}
                    onClick={hasExpandableContent ? handleCardClick : undefined}
                  >
                    {/* Hover overlay for expandable cards */}
                    {hasExpandableContent && !isExpanded && (
                      <div className={styles.cardHoverOverlay}>
                        <span className={styles.hoverText}>Click to view details</span>
                      </div>
                    )}
                    
                    {hasExpandableContent && isExpanded && (
                      <div className={styles.cardExpandedIndicator}>
                        <span className={styles.expandedText}>Click to show less</span>
                      </div>
                    )}
                    
                    <div className={isMajorUpdate ? styles.cardContent : styles.updateContent}>
                      {isMajorUpdate ? (
                        <div className={styles.cardHeader}>
                          <div className={`${styles.cardBadge} ${
                            update.badge === 'NEW' ? styles.newFeature :
                            update.badge === 'ENHANCEMENT' ? styles.enhancement :
                            update.badge === 'MAJOR' ? styles.majorUpdate : ''
                          }`}>{update.badge || 'MAJOR'}</div>
                          <span className={`${styles.cardDate} ${formatDateDisplay(update.date) === 'Upcoming' ? styles.upcoming : ''}`}>
                            {formatDateDisplay(update.date)}
                          </span>
                        </div>
                      ) : (
                        <div className={styles.updateHeader}>
                          <div className={styles.updateMeta}>
                            <span className={`${styles.updateBadge} ${styles[update.badge] || ''}`}>
                              {update.badge}
                            </span>
                            <span className={`${styles.updateDate} ${formatDateDisplay(update.date) === 'Upcoming' ? styles.upcoming : ''}`}>
                              {formatDateDisplay(update.date)}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {update.image && (
                        <div className={isMajorUpdate ? styles.cardImageContainer : styles.updateImageContainer}>
                          <img 
                            src={update.image} 
                            alt={update.title}
                            className={isMajorUpdate 
                              ? (update.showFullImage ? styles.cardImageFull : styles.cardImage)
                              : (isExpanded ? styles.updateImage : '')
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              openImageModal(update.image);
                            }}
                            style={!isMajorUpdate && !isExpanded ? { display: 'none' } : {}}
                          />
                        </div>
                      )}
                      
                      <h3 className={isMajorUpdate ? styles.cardTitle : styles.updateTitle}>
                        {update.title}
                      </h3>
                      
                      <div className={isMajorUpdate ? styles.cardDescription : styles.updateDescription}>
                        {renderFormattedDescription(
                          isExpanded && update.fullDescription 
                            ? update.fullDescription 
                            : (update.description || update.shortDescription)
                        )}
                      </div>
                      
                      {isExpanded && update.highlights && (
                        <ul className={isMajorUpdate ? styles.highlightsList : styles.updateHighlights}>
                          {update.highlights.map((highlight, idx) => (
                            <li key={idx} className={isMajorUpdate ? styles.highlightItem : styles.updateHighlightItem}>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <div className={isMajorUpdate ? styles.cardFooter : styles.updateFooter}>
                        {isMajorUpdate ? (
                          <>
                            <span className={styles.cardCategoryBadge}>
                              {update.category}
                            </span>
                            <div className={styles.cardActions} onClick={(e) => e.stopPropagation()}>
                              <Link 
                                to={update.link || '#'} 
                                className={styles.readMoreButton}
                              >
                                Learn more →
                              </Link>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={styles.updateFooterLeft}>
                              <span className={styles.updateCategory}>
                                {update.category}
                              </span>
                            </div>
                            <Link 
                              to={update.link || '#'} 
                              className={styles.updateLink}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Learn more →
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Timeline View */
            <div className={`${styles.updatesContainer} ${styles.timeline}`}>
              {filteredUpdates.map((item, index) => {
                const isMajorUpdate = item.isMajorUpdate || item.contentType === 'major';
                const isExpanded = isMajorUpdate ? expandedCard === item.id : expandedUpdates.has(item.title);
                const hasExpandableContent = item.fullDescription || item.highlights || item.image;
                const uniqueKey = isMajorUpdate ? item.id : item.title;
                
                // Determine marker style based on update type
                const getMarkerClass = () => {
                  if (isMajorUpdate) return styles.majorUpdate;
                  if (item.type === 'Security Update') return styles.securityUpdate;
                  return styles.regularUpdate;
                };

                // Determine card style
                const cardClass = `${styles.updateCard} ${styles.timelineItem} ${
                  isMajorUpdate ? styles.majorUpdateCard : ''
                } ${isExpanded ? styles.expanded : ''}`;
                
                const handleTimelineCardClick = (e) => {
                  // Don't expand if clicking on links, buttons, or images
                  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG' || e.target.closest('a') || e.target.closest('button')) {
                    return;
                  }
                  // Toggle expansion
                  if (isMajorUpdate) {
                    toggleCard(item.id || item.title);
                  } else {
                    toggleUpdateExpansion(item.title);
                  }
                };
                
                return (
                  <div 
                    key={`${uniqueKey}-${index}`} 
                    ref={(el) => cardRefs.current[uniqueKey] = el}
                    className={cardClass}
                    style={{ animationDelay: `${index * 50}ms`, cursor: hasExpandableContent ? 'pointer' : 'default' }}
                    onClick={hasExpandableContent ? handleTimelineCardClick : undefined}
                  >
                    {/* Hover overlay for expandable cards */}
                    {hasExpandableContent && !isExpanded && (
                      <div className={styles.cardHoverOverlay}>
                        <span className={styles.hoverText}>Click to view details</span>
                      </div>
                    )}
                    
                    {hasExpandableContent && isExpanded && (
                      <div className={styles.cardExpandedIndicator}>
                        <span className={styles.expandedText}>Click to show less</span>
                      </div>
                    )}
                    
                    <div className={styles.updateContent}>
                      <div className={styles.updateHeader}>
                        <div className={styles.updateMeta}>
                          <span className={`${styles.updateBadge} ${isMajorUpdate ? styles.majorUpdate : (styles[item.badge] || '')}`}>
                            {isMajorUpdate ? (item.badge || 'MAJOR') : item.badge}
                          </span>
                          <span className={`${styles.updateDate} ${formatDateDisplay(item.date) === 'Upcoming' ? styles.upcoming : ''}`}>
                            {formatDateDisplay(item.date)}
                          </span>
                        </div>
                      </div>
                      
                      {item.image && isExpanded && (
                        <div className={styles.updateImageContainer}>
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className={styles.updateImage}
                            onClick={(e) => {
                              e.stopPropagation();
                              openImageModal(item.image);
                            }}
                          />
                        </div>
                      )}
                      
                      <h3 className={styles.updateTitle}>{item.title}</h3>
                      
                      <div className={styles.updateDescription}>
                        {renderFormattedDescription(
                          isExpanded && item.fullDescription 
                            ? item.fullDescription 
                            : (item.description || item.shortDescription)
                        )}
                      </div>
                      
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
                        </div>
                        <Link 
                          to={item.link || '#'} 
                          className={styles.updateLink}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn more →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Historical Updates Navigation */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🗓</span>
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

