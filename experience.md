---
layout: page
title: Experience
---

## Professional Experience

{% for job in site.data.experience %}
<div class="experience-item">
  <h3>{{ job.role }} @ {{ job.company }}</h3>
  <small>{{ job.date }}</small>
  <p>{{ job.description }}</p>
</div>
{% endfor %}