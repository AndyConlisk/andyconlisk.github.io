---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-content">
    <h1>Building Scalable Systems & Better Habits</h1>
    <p class="lead">
      I am an <strong>Application Architect</strong> and <strong>Senior Technical Leader</strong> 
      focused on distributed systems, clean code, and engineering leadership.
    </p>
    <div class="hero-cta">
      <a href="/expereience/" class="btn btn-primary">View My Experience</a>
      <a href="https://github.com/{{ site.github_username }}" class="btn btn-secondary">
        {% include icons.html icon="github" %} GitHub
      </a>
    </div>
  </div>
</section>

<hr class="section-divider">

<section class="recent-posts">
  <div class="section-header">
    <h2>Latest From the Blog</h2>
    <a href="/blog/" class="view-all">View All Posts →</a>
  </div>

  <div class="post-grid">
    {% for post in site.posts limit:3 %}
      <article class="post-card-mini">
        <time>{{ post.date | date: "%B %d, %Y" }}</time>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
      </article>
    {% endfor %}
  </div>
</section>