import React from 'react';
import SEO from '../components/SEO';
import './Blog.css';

const Blog: React.FC = () => {
  const posts = [
    {
      title: '5 Tips for Maintaining Your AC in the UAE Heat',
      date: 'March 15, 2025',
      category: 'Maintenance',
      image: '/assets/images/blog-ac.png',
      excerpt: 'Keep your cooling system running efficiently during the peak summer months with these expert maintenance tips.',
    },
    {
      title: 'Trending Villa Renovation Ideas for 2025',
      date: 'February 28, 2025',
      category: 'Renovation',
      image: '/assets/images/blog-villa.png',
      excerpt: 'Explore the latest trends in luxury villa design, from open-plan living to sustainable materials.',
    },
    {
      title: 'Why Professional Plumbing Saves You Money',
      date: 'February 10, 2025',
      category: 'Expert Advice',
      image: '/assets/images/blog-plumbing.png',
      excerpt: 'Small leaks can lead to big bills. Learn why hiring a professional plumber for routine checks is a smart investment.',
    },
    // Adding more placeholders to reach 9 posts
    { title: 'Electrical Safety Checklist for Homes', date: 'Jan 25, 2025', category: 'Maintenance', image: '/assets/images/project-electrical.png', excerpt: 'Ensure your home\'s electrical system is safe with our comprehensive checklist.' },
    { title: 'Choosing the Right Paint for UAE Climate', date: 'Jan 10, 2025', category: 'Renovation', image: '/assets/images/project-painting.png', excerpt: 'The desert sun can be harsh on exterior paint. Here is how to choose the right one.' },
    { title: 'Maximize Office Productivity with Smart Design', date: 'Dec 15, 2024', category: 'Commercial', image: '/assets/images/project-office.png', excerpt: 'How a simple office renovation can boost your team\'s efficiency.' },
    { title: 'Kitchen Remodelling: A Step-by-Step Guide', date: 'Dec 1, 2024', category: 'Renovation', image: '/assets/images/project-bathroom.png', excerpt: 'Planning a kitchen upgrade? Follow our expert guide for a stress-free experience.' },
    { title: 'Common Plumbing Myths Debunked', date: 'Nov 20, 2024', category: 'Maintenance', image: '/assets/images/blog-plumbing.png', excerpt: 'We clear up common misconceptions about home plumbing systems.' },
    { title: 'The Future of Smart Home Maintenance', date: 'Nov 5, 2024', category: 'Expert Advice', image: '/assets/images/blog-ac.png', excerpt: 'How AI and IoT are changing the way we look after our homes.' },
  ];

  return (
    <div className="blog-page">
      <SEO 
        title="Insights & Maintenance Tips" 
        description="Stay updated with the latest trends in renovation and get expert tips on maintaining your property in the UAE climate."
        canonical="/blog"
      />
      <section className="page-hero section-padding">
        <div className="container">
          <span className="section-eyebrow">Insights & Tips</span>
          <h1 className="gold-gradient-text">Al SAND Blog</h1>
        </div>
      </section>

      <section className="blog-grid-section section-padding">
        <div className="container blog-page-container">
          <div className="blog-main">
            <div className="blog-grid">
              {posts.map((post, index) => (
                <article key={index} className="blog-card hover-lift">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} className="blog-img" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <a href="#" className="read-more">Read More →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-widget">
              <h3 className="widget-title">Categories</h3>
              <ul className="widget-list">
                <li><a href="#">Renovation (12)</a></li>
                <li><a href="#">Maintenance (8)</a></li>
                <li><a href="#">Commercial (5)</a></li>
                <li><a href="#">Expert Advice (4)</a></li>
              </ul>
            </div>
            <div className="sidebar-widget">
              <h3 className="widget-title">Recent Posts</h3>
              <div className="recent-posts">
                {posts.slice(0, 3).map((post, i) => (
                   <div key={i} className="recent-post-item">
                     <h4 className="recent-post-title"><a href="#">{post.title}</a></h4>
                     <span className="recent-post-date">{post.date}</span>
                   </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blog;
