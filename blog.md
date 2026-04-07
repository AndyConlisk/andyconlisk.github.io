---
layout: default
title: Blog
---

<section class="blog-header">
    <h1>Andy's Thoughts</h1>
    <p>Sharing thoughts on software architecture, engineering leadership, and other random topics</p>
</section>

<div class="post-list">
  {% for post in site.posts %}
    <article class="post-card">
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%b %d, %Y" }}
        </time>
        <span class="category">{{ post.categories | first }}</span>
      </div>
      
      <h2>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      
      <a href="{{ post.url | relative_url }}" class="read-more">
        Read Post {% include icons.html icon="external" %}
      </a>
    </article>
  {% endfor %}
</div>