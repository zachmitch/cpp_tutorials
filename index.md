---
layout: default
---

<!-- Main Content -->
<div class="container">
  <div class="row">
    <div class="col-lg-8 col-md-10 mx-auto">
      <div class="embed-responsive embed-responsive-16by9 ">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5Q4UJb2Zvx4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div id="lessons">

        {% for lesson in site.lessons %}

          <div class="post-preview">
            <a href=" {{ lesson.permalink }} ">
              <h2 class="post-title">
                {{ lesson.title }}
              </h2>
            </a>
          </div>
          <hr>

        {% endfor %}

      </div>
    </div>
  </div>
</div>
