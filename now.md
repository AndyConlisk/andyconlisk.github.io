---
layout: default
title: Now
---

<section class="now-page">
  <h1>What I'm doing now</h1>
  <p class="last-updated">Last updated: {{ site.data.now.last_updated | date: "%B %d, %Y" }}</p>

  <div class="status-callout">
    <p>{{ site.data.now.status }}</p>
  </div>

  <div class="now-grid">
    {% for category in site.data.now.categories %}
      <div class="now-section">
        <h2>{{ category.title }}</h2>
        <ul>
          {% for item in category.items %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>

  <p class="now-footer">
    <em>This is a "now" page. If you have your own site, you should <a href="https://nownownow.com/about">make one</a> too.</em>
  </p>
</section>