/* ============================================================
   PORTFOLIO TEMPLATE EDITOR — Logic
   ============================================================ */
(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // ─── Default Data ───
  const DEFAULT_DATA = {
    settings: {
      title: 'Hamza Tahir Bajwa — Digital Content Director | Motion, Design & Branding',
      meta: 'Portfolio of Hamza Tahir Bajwa — Creative Director with 12+ years of experience crafting cinematic brands, motion systems, and visual stories.',
      logo: 'HTB',
      navCta: "Let's Talk",
      tagline: 'Crafting cinematic brands & visual stories.',
      year: '2026',
    },
    hero: {
      roleLabel: 'Creative Director',
      name1: 'HAMZA',
      name2: 'TAHIR',
      name3: 'BAJWA',
      subtitle: 'Crafting cinematic brands, motion systems, and visual stories that command attention.',
      cta1: 'View Selected Work',
      cta2: 'Get In Touch',
      stats: [
        { number: 12, label: 'Years Experience' },
        { number: 150, label: 'Projects Delivered' },
        { number: 40, label: 'Brand Campaigns' },
      ],
    },
    projects: [
      {
        title: 'Brand Campaign 2024',
        category: 'Motion Graphics',
        desc: 'A cinematic motion graphics campaign for a luxury brand launch, blending editorial design with dynamic animations.',
        tags: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
        icon: 'fa-solid fa-play',
        image: '',
      },
      {
        title: 'Corporate Documentary',
        category: 'Video Production',
        desc: 'Full-scale documentary production showcasing corporate vision through cinematic storytelling and impactful narratives.',
        tags: ['Premiere Pro', 'DaVinci Resolve', 'Direction'],
        icon: 'fa-solid fa-film',
        image: '',
      },
      {
        title: 'Brand Identity Animation',
        category: 'Branding',
        desc: 'Animated brand identity system with motion logo, transitions, and visual language framework.',
        tags: ['After Effects', 'Illustrator'],
        icon: 'fa-solid fa-wand-magic-sparkles',
        image: '',
      },
      {
        title: 'Sky City Dubai',
        category: 'Video Production',
        desc: "Premium real estate video production for Dubai's Sky City development — aerial cinematography and luxury storytelling.",
        tags: ['Premiere Pro', 'Drone', 'Color Grading'],
        icon: 'fa-solid fa-building',
        image: '',
      },
      {
        title: 'Product Launch Film',
        category: 'Motion Design',
        desc: 'High-energy product launch film combining 3D renders, kinetic typography, and cinematic transitions.',
        tags: ['Blender', 'After Effects', 'Premiere Pro'],
        icon: 'fa-solid fa-rocket',
        image: '',
      },
      {
        title: 'Social Media Campaign',
        category: 'Content Direction',
        desc: 'End-to-end social media content direction — strategy, visual design, motion assets, and campaign management.',
        tags: ['Photoshop', 'After Effects', 'Strategy'],
        icon: 'fa-solid fa-hashtag',
        image: '',
      },
    ],
    about: {
      heading: 'THE VISION BEHIND THE WORK',
      intro: "I'm Hamza Tahir Bajwa — a Digital Content Director with over a decade of experience transforming ideas into cinematic brand experiences. I operate at the intersection of motion design, creative direction, and visual storytelling.",
      body: "My work bridges the gap between artistry and strategy — crafting motion systems, brand identities, and video productions that don't just look premium, but drive real impact. From Dubai real estate films to large-scale brand campaigns, every project is an opportunity to push boundaries.",
      badge: '12+',
      role: 'Chief Design Officer at Notiune',
      location: 'Islamabad, Pakistan',
      spec: 'Motion Graphics, Creative Direction, Branding',
      image: '',
    },
    experience: [
      { date: 'Present', role: 'Chief Design Officer', company: 'Notiune', desc: 'Leading design vision, creative direction, and brand strategy for a cutting-edge digital platform. Overseeing motion design, UI systems, and visual identity across all touchpoints.' },
      { date: '2024', role: 'Creative Media Specialist', company: 'MaxSheets', desc: 'Directed multimedia content, motion graphics, and brand communications for digital products, elevating the visual identity across platforms.' },
      { date: '2023', role: 'Creative Director', company: 'Sky City Real Estate, Dubai', desc: "Spearheaded all creative media for luxury real estate — including cinematic property films, drone aerials, brand collateral, and digital campaigns for Dubai's premium market." },
      { date: '2022', role: 'Media Head', company: 'Amity Private Limited', desc: 'Managed end-to-end media production pipeline, team supervision, and content strategy for corporate and digital channels.' },
      { date: '2019', role: 'Cinematographer & Video Editor', company: 'Digital Forest PVT Limited', desc: 'Shot and edited cinematic content for brands and agencies — corporate films, commercials, and event coverage with advanced color grading and post-production workflows.' },
      { date: '2017', role: 'CEO', company: 'Cozmuler PVT Limited', desc: 'Founded and led a creative media agency, managing client relationships, project pipelines, and creative output from concept to delivery.' },
    ],
    skills: {
      categories: [
        { title: 'Video Production', desc: 'Cinematography, directing, editing, color grading, aerial and documentary filmmaking.', icon: 'fa-solid fa-video', wide: true },
        { title: 'Motion Graphics', desc: '2D/3D animation, kinetic typography, logo reveals, broadcast graphics.', icon: 'fa-solid fa-wand-magic-sparkles', wide: false },
        { title: 'Design', desc: 'Brand identity, visual systems, print design, digital assets, UI direction.', icon: 'fa-solid fa-pen-nib', wide: false },
        { title: 'Creative Direction', desc: 'Art direction, concept development, campaign strategy, team leadership, brand storytelling.', icon: 'fa-solid fa-compass-drafting', wide: true },
      ],
      software: [
        { name: 'Photoshop', logo: 'assets/logos/photoshop.png', tint: true },
        { name: 'After Effects', logo: 'assets/logos/after-effects.png', tint: true },
        { name: 'Premiere Pro', logo: 'assets/logos/premiere-pro.png', tint: true },
        { name: 'Illustrator', logo: 'assets/logos/illustrator.png', tint: true },
        { name: 'Lightroom', logo: 'assets/logos/photoshop-lightroom.png', tint: true },
        { name: 'DaVinci Resolve', logo: 'https://cdn.simpleicons.org/davinciresolve/FF9A3D', tint: false },
        { name: 'Final Cut Pro', logo: 'https://cdn.simpleicons.org/apple/FF9A3D', tint: false },
        { name: 'Blender', logo: 'https://cdn.simpleicons.org/blender/FF9A3D', tint: false },
      ],
    },
    contact: {
      email: 'hamzatahirbajwa98@gmail.com',
      phone: '+92-331-5554436',
      location: 'Islamabad, Pakistan',
      socials: {
        linkedin: '#',
        instagram: '#',
        behance: '#',
        youtube: '#',
        twitter: '#',
      },
    },
  };

  let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
  let uploadedImages = [];

  // ─── Load from localStorage ───
  function loadSavedData() {
    const saved = localStorage.getItem('portfolioEditorData');
    if (saved) {
      try {
        data = JSON.parse(saved);
      } catch (e) { /* use default */ }
    }
  }

  function saveData() {
    localStorage.setItem('portfolioEditorData', JSON.stringify(data));
  }

  function autoSave() {
    saveData();
  }

  // ─── Toast ───
  function showToast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('visible');
    setTimeout(() => t.classList.remove('visible'), 2500);
  }

  // ─── Panel Switching ───
  $$('.sidebar__link').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.sidebar__link').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      $$('.panel').forEach((p) => p.classList.remove('active'));
      const panel = $(`#panel-${btn.dataset.panel}`);
      if (panel) panel.classList.add('active');
    });
  });

  // ─── Populate Fields from Data ───
  function populateFields() {
    // Hero
    $('#heroRoleLabel').value = data.hero.roleLabel;
    $('#heroName1').value = data.hero.name1;
    $('#heroName2').value = data.hero.name2;
    $('#heroName3').value = data.hero.name3;
    $('#heroSubtitle').value = data.hero.subtitle;
    $('#heroCta1').value = data.hero.cta1;
    $('#heroCta2').value = data.hero.cta2;
    if (data.hero.stats[0]) {
      $('#heroStat1Num').value = data.hero.stats[0].number;
      $('#heroStat1Label').value = data.hero.stats[0].label;
    }
    if (data.hero.stats[1]) {
      $('#heroStat2Num').value = data.hero.stats[1].number;
      $('#heroStat2Label').value = data.hero.stats[1].label;
    }
    if (data.hero.stats[2]) {
      $('#heroStat3Num').value = data.hero.stats[2].number;
      $('#heroStat3Label').value = data.hero.stats[2].label;
    }

    // About
    $('#aboutHeading').value = data.about.heading;
    $('#aboutIntro').value = data.about.intro;
    $('#aboutBody').value = data.about.body;
    $('#aboutBadge').value = data.about.badge;
    $('#aboutRole').value = data.about.role;
    $('#aboutLocation').value = data.about.location;
    $('#aboutSpec').value = data.about.spec;

    // Contact
    $('#contactEmail').value = data.contact.email;
    $('#contactPhone').value = data.contact.phone;
    $('#contactLocation').value = data.contact.location;
    $('#socialLinkedin').value = data.contact.socials.linkedin;
    $('#socialInstagram').value = data.contact.socials.instagram;
    $('#socialBehance').value = data.contact.socials.behance;
    $('#socialYoutube').value = data.contact.socials.youtube;
    $('#socialTwitter').value = data.contact.socials.twitter;

    // Settings
    $('#settingsTitle').value = data.settings.title;
    $('#settingsMeta').value = data.settings.meta;
    $('#settingsLogo').value = data.settings.logo;
    $('#settingsCta').value = data.settings.navCta;
    $('#settingsTagline').value = data.settings.tagline;
    $('#settingsYear').value = data.settings.year;

    renderProjects();
    renderExperience();
    renderSkillCategories();
    renderSoftware();
  }

  // ─── Collect Fields into Data ───
  function collectFields() {
    data.hero.roleLabel = $('#heroRoleLabel').value;
    data.hero.name1 = $('#heroName1').value;
    data.hero.name2 = $('#heroName2').value;
    data.hero.name3 = $('#heroName3').value;
    data.hero.subtitle = $('#heroSubtitle').value;
    data.hero.cta1 = $('#heroCta1').value;
    data.hero.cta2 = $('#heroCta2').value;
    data.hero.stats = [
      { number: parseInt($('#heroStat1Num').value) || 0, label: $('#heroStat1Label').value },
      { number: parseInt($('#heroStat2Num').value) || 0, label: $('#heroStat2Label').value },
      { number: parseInt($('#heroStat3Num').value) || 0, label: $('#heroStat3Label').value },
    ];

    data.about.heading = $('#aboutHeading').value;
    data.about.intro = $('#aboutIntro').value;
    data.about.body = $('#aboutBody').value;
    data.about.badge = $('#aboutBadge').value;
    data.about.role = $('#aboutRole').value;
    data.about.location = $('#aboutLocation').value;
    data.about.spec = $('#aboutSpec').value;

    data.contact.email = $('#contactEmail').value;
    data.contact.phone = $('#contactPhone').value;
    data.contact.location = $('#contactLocation').value;
    data.contact.socials.linkedin = $('#socialLinkedin').value;
    data.contact.socials.instagram = $('#socialInstagram').value;
    data.contact.socials.behance = $('#socialBehance').value;
    data.contact.socials.youtube = $('#socialYoutube').value;
    data.contact.socials.twitter = $('#socialTwitter').value;

    data.settings.title = $('#settingsTitle').value;
    data.settings.meta = $('#settingsMeta').value;
    data.settings.logo = $('#settingsLogo').value;
    data.settings.navCta = $('#settingsCta').value;
    data.settings.tagline = $('#settingsTagline').value;
    data.settings.year = $('#settingsYear').value;

    collectProjects();
    collectExperience();
    collectSkillCategories();
    collectSoftware();
  }

  // ─── Projects ───
  function renderProjects() {
    const container = $('#projectsList');
    container.innerHTML = data.projects.map((p, i) => `
      <div class="editable-card" data-index="${i}">
        <div class="editable-card__header">
          <span class="editable-card__number">Project ${i + 1}</span>
          <div class="editable-card__actions">
            <button class="editable-card__btn" onclick="moveProject(${i}, -1)" title="Move up"><i class="fa-solid fa-arrow-up"></i></button>
            <button class="editable-card__btn" onclick="moveProject(${i}, 1)" title="Move down"><i class="fa-solid fa-arrow-down"></i></button>
            <button class="editable-card__btn editable-card__btn--danger" onclick="removeProject(${i})" title="Delete"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <div class="field-row">
          <div class="field-group">
            <label class="field__label">Project Title</label>
            <input type="text" class="field__input proj-title" value="${escHtml(p.title)}" />
          </div>
          <div class="field-group">
            <label class="field__label">Category</label>
            <input type="text" class="field__input proj-category" value="${escHtml(p.category)}" />
          </div>
        </div>
        <div class="field-group">
          <label class="field__label">Description</label>
          <textarea class="field__input field__input--textarea proj-desc" rows="2">${escHtml(p.desc)}</textarea>
        </div>
        <div class="field-row">
          <div class="field-group">
            <label class="field__label">Tags (comma-separated)</label>
            <input type="text" class="field__input proj-tags" value="${escHtml(p.tags.join(', '))}" />
          </div>
          <div class="field-group">
            <label class="field__label">Icon Class (Font Awesome)</label>
            <input type="text" class="field__input proj-icon" value="${escHtml(p.icon)}" />
          </div>
        </div>
        <div class="field-group">
          <label class="field__label">Image/Video Path (e.g. assets/project1.jpg)</label>
          <input type="text" class="field__input proj-image" value="${escHtml(p.image || '')}" placeholder="Leave empty for icon placeholder" />
        </div>
      </div>
    `).join('');
  }

  function collectProjects() {
    data.projects = $$('#projectsList .editable-card').map((card) => ({
      title: $('.proj-title', card).value,
      category: $('.proj-category', card).value,
      desc: $('.proj-desc', card).value,
      tags: $('.proj-tags', card).value.split(',').map((t) => t.trim()).filter(Boolean),
      icon: $('.proj-icon', card).value,
      image: $('.proj-image', card).value,
    }));
  }

  window.removeProject = function (i) {
    collectProjects();
    data.projects.splice(i, 1);
    renderProjects();
    autoSave();
  };

  window.moveProject = function (i, dir) {
    collectProjects();
    const j = i + dir;
    if (j < 0 || j >= data.projects.length) return;
    [data.projects[i], data.projects[j]] = [data.projects[j], data.projects[i]];
    renderProjects();
    autoSave();
  };

  $('#btnAddProject').addEventListener('click', () => {
    collectProjects();
    data.projects.push({
      title: 'New Project',
      category: 'Category',
      desc: 'Project description...',
      tags: ['Tag1', 'Tag2'],
      icon: 'fa-solid fa-star',
      image: '',
    });
    renderProjects();
    autoSave();
    showToast('Project added');
  });

  // ─── Experience ───
  function renderExperience() {
    const container = $('#experienceList');
    container.innerHTML = data.experience.map((e, i) => `
      <div class="editable-card" data-index="${i}">
        <div class="editable-card__header">
          <span class="editable-card__number">Experience ${i + 1}</span>
          <div class="editable-card__actions">
            <button class="editable-card__btn" onclick="moveExperience(${i}, -1)"><i class="fa-solid fa-arrow-up"></i></button>
            <button class="editable-card__btn" onclick="moveExperience(${i}, 1)"><i class="fa-solid fa-arrow-down"></i></button>
            <button class="editable-card__btn editable-card__btn--danger" onclick="removeExperience(${i})"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <div class="field-row field-row--3">
          <div class="field-group">
            <label class="field__label">Date/Year</label>
            <input type="text" class="field__input exp-date" value="${escHtml(e.date)}" />
          </div>
          <div class="field-group">
            <label class="field__label">Role / Title</label>
            <input type="text" class="field__input exp-role" value="${escHtml(e.role)}" />
          </div>
          <div class="field-group">
            <label class="field__label">Company</label>
            <input type="text" class="field__input exp-company" value="${escHtml(e.company)}" />
          </div>
        </div>
        <div class="field-group">
          <label class="field__label">Description</label>
          <textarea class="field__input field__input--textarea exp-desc" rows="2">${escHtml(e.desc)}</textarea>
        </div>
      </div>
    `).join('');
  }

  function collectExperience() {
    data.experience = $$('#experienceList .editable-card').map((card) => ({
      date: $('.exp-date', card).value,
      role: $('.exp-role', card).value,
      company: $('.exp-company', card).value,
      desc: $('.exp-desc', card).value,
    }));
  }

  window.removeExperience = function (i) {
    collectExperience();
    data.experience.splice(i, 1);
    renderExperience();
    autoSave();
  };

  window.moveExperience = function (i, dir) {
    collectExperience();
    const j = i + dir;
    if (j < 0 || j >= data.experience.length) return;
    [data.experience[i], data.experience[j]] = [data.experience[j], data.experience[i]];
    renderExperience();
    autoSave();
  };

  $('#btnAddExperience').addEventListener('click', () => {
    collectExperience();
    data.experience.push({ date: '2025', role: 'New Role', company: 'Company', desc: 'Description...' });
    renderExperience();
    autoSave();
    showToast('Experience added');
  });

  // ─── Skill Categories ───
  function renderSkillCategories() {
    const container = $('#skillCategoriesList');
    container.innerHTML = data.skills.categories.map((s, i) => `
      <div class="editable-card" data-index="${i}">
        <div class="editable-card__header">
          <span class="editable-card__number">Category ${i + 1}</span>
          <div class="editable-card__actions">
            <button class="editable-card__btn editable-card__btn--danger" onclick="removeSkillCategory(${i})"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <div class="field-row field-row--3">
          <div class="field-group">
            <label class="field__label">Title</label>
            <input type="text" class="field__input sc-title" value="${escHtml(s.title)}" />
          </div>
          <div class="field-group">
            <label class="field__label">Icon (FA class)</label>
            <input type="text" class="field__input sc-icon" value="${escHtml(s.icon)}" />
          </div>
          <div class="field-group">
            <label class="field__label">Wide?</label>
            <select class="field__input sc-wide">
              <option value="true" ${s.wide ? 'selected' : ''}>Yes (span 2 cols)</option>
              <option value="false" ${!s.wide ? 'selected' : ''}>No (single col)</option>
            </select>
          </div>
        </div>
        <div class="field-group">
          <label class="field__label">Description</label>
          <textarea class="field__input field__input--textarea sc-desc" rows="2">${escHtml(s.desc)}</textarea>
        </div>
      </div>
    `).join('');
  }

  function collectSkillCategories() {
    data.skills.categories = $$('#skillCategoriesList .editable-card').map((card) => ({
      title: $('.sc-title', card).value,
      icon: $('.sc-icon', card).value,
      wide: $('.sc-wide', card).value === 'true',
      desc: $('.sc-desc', card).value,
    }));
  }

  window.removeSkillCategory = function (i) {
    collectSkillCategories();
    data.skills.categories.splice(i, 1);
    renderSkillCategories();
    autoSave();
  };

  $('#btnAddSkillCategory').addEventListener('click', () => {
    collectSkillCategories();
    data.skills.categories.push({ title: 'New Skill', icon: 'fa-solid fa-star', wide: false, desc: 'Description...' });
    renderSkillCategories();
    autoSave();
    showToast('Skill category added');
  });

  // ─── Software ───
  function renderSoftware() {
    const container = $('#softwareList');
    container.innerHTML = data.skills.software.map((s, i) => `
      <div class="editable-card" data-index="${i}" style="padding: 12px 16px; margin-bottom: 8px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <img src="${escHtml(s.logo)}" alt="" style="width:20px;height:20px;object-fit:contain;" onerror="this.style.display='none'" />
          <input type="text" class="field__input sw-name" value="${escHtml(s.name)}" style="flex:1" />
          <input type="text" class="field__input sw-logo" value="${escHtml(s.logo)}" style="flex:2" placeholder="Logo path or URL" />
          <label style="display:flex;align-items:center;gap:4px;font-size:0.7rem;color:var(--text-muted);white-space:nowrap;">
            <input type="checkbox" class="sw-tint" ${s.tint ? 'checked' : ''} /> Tint
          </label>
          <button class="editable-card__btn editable-card__btn--danger" onclick="removeSoftware(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `).join('');
  }

  function collectSoftware() {
    data.skills.software = $$('#softwareList .editable-card').map((card) => ({
      name: $('.sw-name', card).value,
      logo: $('.sw-logo', card).value,
      tint: $('.sw-tint', card).checked,
    }));
  }

  window.removeSoftware = function (i) {
    collectSoftware();
    data.skills.software.splice(i, 1);
    renderSoftware();
    autoSave();
  };

  $('#btnAddSoftware').addEventListener('click', () => {
    collectSoftware();
    data.skills.software.push({ name: 'New Software', logo: '', tint: false });
    renderSoftware();
    autoSave();
    showToast('Software added');
  });

  // ─── Image Manager ───
  $('#multiImageInput').addEventListener('change', (e) => {
    const files = e.target.files;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        uploadedImages.push({ name: file.name, data: ev.target.result });
        renderUploadedGallery();
      };
      reader.readAsDataURL(file);
    }
    showToast(`${files.length} file(s) loaded`);
  });

  function renderUploadedGallery() {
    const gallery = $('#uploadedGallery');
    gallery.innerHTML = uploadedImages.map((img, i) => `
      <div class="uploaded-gallery__item">
        <img src="${img.data}" alt="${escHtml(img.name)}" />
        <span class="uploaded-gallery__item-name">${escHtml(img.name)}</span>
        <button class="uploaded-gallery__item-remove" onclick="removeUploadedImage(${i})"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join('');
  }

  window.removeUploadedImage = function (i) {
    uploadedImages.splice(i, 1);
    renderUploadedGallery();
  };

  // About image
  $('#aboutImage').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      data.about.image = ev.target.result;
      $('#aboutImagePreview').innerHTML = `<img src="${ev.target.result}" alt="Portrait" />`;
      autoSave();
      showToast('Portrait uploaded');
    };
    reader.readAsDataURL(file);
  });

  // ─── Export JSON ───
  $('#btnExportData').addEventListener('click', () => {
    collectFields();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'portfolio-data.json';
    a.click();
    showToast('JSON exported');
  });

  // ─── Import JSON ───
  $('#btnLoadData').addEventListener('click', () => {
    $('#jsonImport').click();
  });

  $('#jsonImport').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        data = JSON.parse(ev.target.result);
        populateFields();
        autoSave();
        showToast('Data imported successfully');
      } catch (err) {
        showToast('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  });

  // ─── Preview ───
  $('#btnPreview').addEventListener('click', () => {
    collectFields();
    autoSave();
    window.open('index.html', '_blank');
  });

  // ─── Generate Site HTML ───
  $('#btnGenerate').addEventListener('click', () => {
    collectFields();
    autoSave();
    const html = generateHTML(data);
    const blob = new Blob([html], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'index.html';
    a.click();
    showToast('index.html generated & downloaded');
  });

  // ─── Auto-save on input ───
  document.addEventListener('input', () => {
    clearTimeout(window._saveTimeout);
    window._saveTimeout = setTimeout(() => {
      collectFields();
      autoSave();
    }, 800);
  });

  // ─── HTML Generator ───
  function generateHTML(d) {
    const projectCards = d.projects.map((p) => {
      const imgBlock = p.image
        ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" style="width:100%;height:100%;object-fit:cover;" />`
        : `<div class="project-card__placeholder"><i class="${esc(p.icon)}"></i></div>`;
      return `
          <article class="project-card">
            <div class="project-card__image">
              ${imgBlock}
              <div class="project-card__overlay">
                <span class="project-card__view">View Project <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
              </div>
            </div>
            <div class="project-card__info">
              <span class="project-card__category">${esc(p.category)}</span>
              <h3 class="project-card__title">${esc(p.title)}</h3>
              <p class="project-card__desc">${esc(p.desc)}</p>
              <div class="project-card__tags">
                ${p.tags.map((t) => `<span>${esc(t)}</span>`).join('\n                ')}
              </div>
            </div>
          </article>`;
    }).join('\n');

    const timelineItems = d.experience.map((e) => `
          <div class="timeline__item reveal">
            <div class="timeline__marker"></div>
            <div class="timeline__card">
              <span class="timeline__date">${esc(e.date)}</span>
              <h3 class="timeline__role">${esc(e.role)}</h3>
              <span class="timeline__company">${esc(e.company)}</span>
              <p class="timeline__desc">${esc(e.desc)}</p>
            </div>
          </div>`).join('\n');

    const skillCards = d.skills.categories.map((s) => `
          <div class="skill-category${s.wide ? ' skill-category--wide' : ''}">
            <div class="skill-category__icon"><i class="${esc(s.icon)}"></i></div>
            <h3 class="skill-category__title">${esc(s.title)}</h3>
            <p class="skill-category__desc">${esc(s.desc)}</p>
          </div>`).join('\n');

    const softwareChips = d.skills.software.map((s) => `
            <div class="software-chip">
              <img src="${esc(s.logo)}" alt="${esc(s.name)}" class="software-chip__logo${s.tint ? ' software-chip__logo--tint' : ''}" />
              <span>${esc(s.name)}</span>
            </div>`).join('\n');

    const aboutImgBlock = d.about.image && d.about.image.startsWith('data:')
      ? `<img src="${d.about.image}" alt="Portrait" style="width:100%;height:100%;object-fit:cover;" />`
      : `<div class="about__image-placeholder"><i class="fa-solid fa-user"></i></div>`;

    const headingParts = d.about.heading.split(' ');
    const aboutTitleHTML = headingParts.length > 2
      ? `${esc(headingParts.slice(0, 2).join(' '))}<br /><span class="text-accent">${esc(headingParts[2])}</span> ${esc(headingParts.slice(3).join(' '))}`
      : esc(d.about.heading);

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(d.settings.title)}</title>
  <meta name="description" content="${esc(d.settings.meta)}" />
  <meta name="theme-color" content="#050505" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="grain-overlay" aria-hidden="true"></div>
  <div class="cursor-dot" id="cursorDot"></div>
  <div class="cursor-ring" id="cursorRing"></div>

  <header class="nav" id="nav">
    <div class="nav__inner">
      <a href="#hero" class="nav__logo" aria-label="Home">${esc(d.settings.logo)}</a>
      <nav class="nav__links" id="navLinks" aria-label="Main Navigation">
        <a href="#hero" class="nav__link active" data-nav>Home</a>
        <a href="#work" class="nav__link" data-nav>Work</a>
        <a href="#about" class="nav__link" data-nav>About</a>
        <a href="#experience" class="nav__link" data-nav>Experience</a>
        <a href="#skills" class="nav__link" data-nav>Skills</a>
        <a href="#contact" class="nav__link" data-nav>Contact</a>
      </nav>
      <a href="#contact" class="nav__cta">${esc(d.settings.navCta)}</a>
      <button class="nav__burger" id="navBurger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu">
    <nav class="mobile-menu__links">
      <a href="#hero" class="mobile-menu__link" data-nav>Home</a>
      <a href="#work" class="mobile-menu__link" data-nav>Work</a>
      <a href="#about" class="mobile-menu__link" data-nav>About</a>
      <a href="#experience" class="mobile-menu__link" data-nav>Experience</a>
      <a href="#skills" class="mobile-menu__link" data-nav>Skills</a>
      <a href="#contact" class="mobile-menu__link" data-nav>Contact</a>
      <a href="#contact" class="mobile-menu__cta">${esc(d.settings.navCta)}</a>
    </nav>
  </div>

  <main>
    <section class="hero" id="hero">
      <div class="hero__glow hero__glow--amber" aria-hidden="true"></div>
      <div class="hero__glow hero__glow--violet" aria-hidden="true"></div>
      <div class="hero__content">
        <div class="hero__label reveal">
          <span class="hero__label-dot"></span>
          ${esc(d.hero.roleLabel)}
        </div>
        <h1 class="hero__title reveal">
          <span class="hero__title-line">${esc(d.hero.name1)}</span>
          <span class="hero__title-line hero__title-line--accent">${esc(d.hero.name2)}</span>
          <span class="hero__title-line">${esc(d.hero.name3)}</span>
        </h1>
        <p class="hero__subtitle reveal">${esc(d.hero.subtitle)}</p>
        <div class="hero__actions reveal">
          <a href="#work" class="btn btn--primary"><span>${esc(d.hero.cta1)}</span><i class="fa-solid fa-arrow-right"></i></a>
          <a href="#contact" class="btn btn--glass"><span>${esc(d.hero.cta2)}</span></a>
        </div>
        <div class="hero__stats reveal">
          ${d.hero.stats.map((s) => `
          <div class="stat-card">
            <span class="stat-card__number" data-count="${s.number}">0</span><span class="stat-card__plus">+</span>
            <span class="stat-card__label">${esc(s.label)}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="hero__scroll" aria-hidden="true"><span>Scroll</span><div class="hero__scroll-line"></div></div>
    </section>

    <section class="section work" id="work">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label"><span class="section__label-dot"></span> Portfolio</span>
          <h2 class="section__title">SELECTED<br /><span class="text-accent">WORK</span></h2>
          <p class="section__subtitle">A curated collection of cinematic productions, brand campaigns, and motion design projects.</p>
        </div>
      </div>
      <div class="work__scroll-wrapper">
        <div class="work__track" id="workTrack">
${projectCards}
        </div>
      </div>
    </section>

    <section class="section about" id="about">
      <div class="container">
        <div class="about__grid">
          <div class="about__image-col reveal">
            <div class="about__image-wrapper">
              ${aboutImgBlock}
              <div class="about__badge">
                <span class="about__badge-number">${esc(d.about.badge)}</span>
                <span class="about__badge-text">Years<br/>Experience</span>
              </div>
            </div>
          </div>
          <div class="about__text-col">
            <div class="section__header section__header--left reveal">
              <span class="section__label"><span class="section__label-dot"></span> About</span>
              <h2 class="section__title">${aboutTitleHTML}</h2>
            </div>
            <p class="about__intro reveal">${esc(d.about.intro)}</p>
            <p class="about__body reveal">${esc(d.about.body)}</p>
            <div class="about__details reveal">
              <div class="about__detail"><span class="about__detail-label">Current Role</span><span class="about__detail-value">${esc(d.about.role)}</span></div>
              <div class="about__detail"><span class="about__detail-label">Location</span><span class="about__detail-value">${esc(d.about.location)}</span></div>
              <div class="about__detail"><span class="about__detail-label">Specialization</span><span class="about__detail-value">${esc(d.about.spec)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section experience" id="experience">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label"><span class="section__label-dot"></span> Career</span>
          <h2 class="section__title">PROFESSIONAL<br /><span class="text-accent">EXPERIENCE</span></h2>
          <p class="section__subtitle">A decade-long journey through creative leadership, cinematic production, and brand direction.</p>
        </div>
        <div class="timeline">
${timelineItems}
        </div>
      </div>
    </section>

    <section class="section skills" id="skills">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label"><span class="section__label-dot"></span> Expertise</span>
          <h2 class="section__title">SKILLS &amp;<br /><span class="text-accent">TOOLS</span></h2>
          <p class="section__subtitle">Core competencies and software proficiency refined over 12+ years of creative production.</p>
        </div>
        <div class="skills__bento reveal">
${skillCards}
        </div>
        <div class="skills__software reveal">
          <h3 class="skills__software-title">Software Proficiency</h3>
          <div class="skills__chips">
${softwareChips}
          </div>
        </div>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label"><span class="section__label-dot"></span> Connect</span>
          <h2 class="section__title">LET'S CREATE<br /><span class="text-accent">TOGETHER</span></h2>
          <p class="section__subtitle">Have a project in mind? I'd love to hear about it. Let's bring your vision to life.</p>
        </div>
        <div class="contact__grid">
          <div class="contact__info reveal">
            <div class="contact__info-item">
              <i class="fa-solid fa-envelope"></i>
              <div><span class="contact__info-label">Email</span><a href="mailto:${esc(d.contact.email)}" class="contact__info-value">${esc(d.contact.email)}</a></div>
            </div>
            <div class="contact__info-item">
              <i class="fa-solid fa-phone"></i>
              <div><span class="contact__info-label">Phone</span><a href="tel:${esc(d.contact.phone.replace(/[^+\d]/g, ''))}" class="contact__info-value">${esc(d.contact.phone)}</a></div>
            </div>
            <div class="contact__info-item">
              <i class="fa-solid fa-location-dot"></i>
              <div><span class="contact__info-label">Location</span><span class="contact__info-value">${esc(d.contact.location)}</span></div>
            </div>
            <div class="contact__socials">
              <a href="${esc(d.contact.socials.linkedin)}" class="contact__social" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="${esc(d.contact.socials.instagram)}" class="contact__social" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="${esc(d.contact.socials.behance)}" class="contact__social" aria-label="Behance"><i class="fa-brands fa-behance"></i></a>
              <a href="${esc(d.contact.socials.youtube)}" class="contact__social" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
              <a href="${esc(d.contact.socials.twitter)}" class="contact__social" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
          <form class="contact__form reveal" id="contactForm" novalidate>
            <div class="form__group"><input type="text" id="formName" class="form__input" placeholder=" " required /><label for="formName" class="form__label">Your Name</label><span class="form__error" id="nameError">Please enter your name</span></div>
            <div class="form__group"><input type="email" id="formEmail" class="form__input" placeholder=" " required /><label for="formEmail" class="form__label">Your Email</label><span class="form__error" id="emailError">Please enter a valid email</span></div>
            <div class="form__group"><input type="text" id="formSubject" class="form__input" placeholder=" " required /><label for="formSubject" class="form__label">Subject</label><span class="form__error" id="subjectError">Please enter a subject</span></div>
            <div class="form__group"><textarea id="formMessage" class="form__input form__input--textarea" placeholder=" " rows="5" required></textarea><label for="formMessage" class="form__label">Your Message</label><span class="form__error" id="messageError">Please enter your message</span></div>
            <button type="submit" class="btn btn--primary btn--full"><span>Send Message</span><i class="fa-solid fa-paper-plane"></i></button>
            <div class="form__success" id="formSuccess"><i class="fa-solid fa-check-circle"></i><span>Message sent successfully! I'll get back to you soon.</span></div>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer__glow" aria-hidden="true"></div>
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <a href="#hero" class="footer__logo">${esc(d.settings.logo)}</a>
          <p class="footer__tagline">${esc(d.settings.tagline)}</p>
        </div>
        <nav class="footer__links" aria-label="Footer Navigation">
          <a href="#hero">Home</a><a href="#work">Work</a><a href="#about">About</a>
          <a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
      </div>
      <div class="footer__bottom"><p>&copy; ${esc(d.settings.year)} ${esc(d.hero.name1)} ${esc(d.hero.name2)} ${esc(d.hero.name3)}. All rights reserved.</p></div>
    </div>
  </footer>

  <button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
  <script src="script.js"><\/script>
</body>
</html>`;
  }

  // ─── Helpers ───
  function esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ─── Init ───
  loadSavedData();
  populateFields();
})();
