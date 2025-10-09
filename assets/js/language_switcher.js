// Language switcher functionality - Simplified version
(function() {
    // Translation dictionary for UI elements
    const translations = {
        en: {
            'Google Scholar': 'Google Scholar',
            'GitHub': 'GitHub',
            'WeChat': 'WeChat',
            'LinkedIn': 'LinkedIn',
            'ORCID': 'ORCID',
            'Curriculum Vitae': 'Curriculum Vitae',
            'Close': 'Close',
            'Education': 'Education',
            'Experience': 'Experience',
            'Honors & Awards': 'Honors & Awards',
            'News': 'News',
            'Selected Publications': 'Selected Publications',
            'Publications': 'Publications',
            'Home': 'Home',
            'Showcase': 'Showcase',
            'Menu': 'Menu',
            'lang_toggle': '中文',
            'view all': 'view all',
            'All publications': 'All publications'
        },
        zh: {
            'Google Scholar': '谷歌学术',
            'GitHub': 'GitHub',
            'WeChat': '微信',
            'LinkedIn': '领英',
            'ORCID': 'ORCID',
            'Curriculum Vitae': '简历',
            'Close': '关闭',
            'Education': '教育经历',
            'Experience': '工作经历',
            'Honors & Awards': '荣誉奖项',
            'News': '最新动态',
            'Selected Publications': '精选论文',
            'Publications': '论文发表',
            'Home': '首页',
            'Showcase': '项目展示',
            'Menu': '菜单',
            'lang_toggle': 'EN',
            'view all': '查看全部',
            'All publications': '全部论文'
        }
    };

    // Profile data in both languages
    const profileData = {
        en: {
            navbar_name: "Zhihui Chen",
            primary_name: "Zhihui Chen",
            positions: "Ph.D. Student in Artificial Intelligence, National University of Singapore",
            short_bio: `<p>
    I am currently a first-year PhD student at the National University of Singapore, supervised by 
    <a href="https://www.mornin-feng.com/" target="_blank">Prof. Mengling Feng</a>. 
  </p>
  <p>
    Reviewer for NIPS, IJCAI, ACM TIST, with over 10 papers reviewed.
  </p>
  <p>
    <strong>Research Interests:</strong> Trustworthy and Agentic LLM • Multi-modality Intelligence in Healthcare
  </p>
  <p style="border: 2px solid #007bff; border-radius: 10px; padding: 10px; display: inline-block; text-align: center; background-color: #e6f3ff;">Looking for a summer 26' internship!! 🙏</p>`,
            education: [
                {
                    name: "National University of Singapore",
                    position: "Ph.D. in Artificial Intelligence",
                    date: "Jan. 2025 - present"
                },
                {
                    name: "The University of Hong Kong",
                    position: "M.Sc. in Artificial Intelligence",
                    date: "Sep. 2022 - Jul. 2024"
                },
                {
                    name: "The Chinese University of Hong Kong, Shenzhen",
                    position: "B.Sc. in Statistics, Data Science Stream",
                    date: "Sep. 2018 - May. 2022"
                }
            ],
            awards: [
                {
                    name: "Full Ph.D. Scholarship, National University of Singapore",
                    date: "2025"
                },
                {
                    name: "Outstanding College Graduate, CUHK-Shenzhen Diligentia College",
                    date: "2022"
                },
                {
                    name: "Undergraduate Research Excellence Award, CUHK-Shenzhen",
                    date: "2021"
                }
            ]
        },
        zh: {
            navbar_name: "陈致晖",
            primary_name: "陈致晖",
            positions: "新加坡国立大学人工智能博士生",
            short_bio: `<p>
    我目前是新加坡国立大学一年级博士生，导师为
    <a href="https://www.mornin-feng.com/" target="_blank">冯梦凌教授</a>。
  </p>
  <p>
    担任NIPS、IJCAI、ACM TIST等会议和期刊的审稿人，已审稿10余篇。
  </p>
  <p>
    <strong>研究方向：</strong>可信与智能体大语言模型 • 医疗领域多模态智能
  </p>
  <p style="border: 2px solid #007bff; border-radius: 10px; padding: 10px; display: inline-block; text-align: center; background-color: #e6f3ff;">期待26年暑期实习机会！！🙏</p>`,
            education: [
                {
                    name: "新加坡国立大学",
                    position: "人工智能博士",
                    date: "2025年1月 - 至今"
                },
                {
                    name: "香港大学",
                    position: "人工智能理学硕士",
                    date: "2022年9月 - 2024年7月"
                },
                {
                    name: "香港中文大学（深圳）",
                    position: "统计学理学学士（数据科学方向）",
                    date: "2018年9月 - 2022年5月"
                }
            ],
            awards: [
                {
                    name: "新加坡国立大学全额博士奖学金",
                    date: "2025"
                },
                {
                    name: "香港中文大学（深圳）祥波书院优秀毕业生",
                    date: "2022"
                },
                {
                    name: "香港中文大学（深圳）本科生科研卓越奖",
                    date: "2021"
                }
            ]
        }
    };

    // Get/set language from localStorage
    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'en';
    }

    function setCurrentLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    // Update profile content
    function updateProfileContent(lang) {
        const data = profileData[lang];
        
        // Update navbar and primary name
        const navbarName = document.querySelector('.navbar-brand strong');
        if (navbarName) navbarName.textContent = data.navbar_name;
        
        const primaryName = document.querySelector('.h1.font-weight-normal');
        if (primaryName) primaryName.childNodes[0].textContent = data.primary_name + ' ';
        
        // Update position
        const position = document.querySelector('.text-profile-position');
        if (position) position.innerHTML = data.positions + '<br/>';
        
        // Update bio
        const bio = document.querySelector('.text-profile-bio');
        if (bio) bio.innerHTML = data.short_bio;
        
        // Update education
        const educationItems = document.querySelectorAll('.col-md-6 .mx-2 .list-unstyled.mb-1 .media');
        educationItems.forEach((item, index) => {
            if (data.education[index]) {
                const nameDiv = item.querySelector('.media-body > div:first-child');
                const positionDiv = item.querySelector('.media-body .small.d-flex > div:first-child');
                const dateDiv = item.querySelector('.media-body .small.d-flex > div:last-child em');
                
                if (nameDiv) nameDiv.textContent = data.education[index].name;
                if (positionDiv) positionDiv.textContent = data.education[index].position;
                if (dateDiv) dateDiv.textContent = data.education[index].date;
            }
        });
        
        // Update awards
        const awardsList = document.querySelector('.col-md-6 .mx-2 .list.small.pl-3.mb-1');
        if (awardsList) {
            const awardItems = awardsList.querySelectorAll('li');
            awardItems.forEach((item, index) => {
                if (data.awards[index]) {
                    const nameDiv = item.querySelector('.d-flex > div:first-child');
                    const dateDiv = item.querySelector('.d-flex > div:last-child em');
                    
                    if (nameDiv) nameDiv.textContent = data.awards[index].name;
                    if (dateDiv) dateDiv.textContent = data.awards[index].date;
                }
            });
        }
    }

    // Translate UI text elements
    function translateUI(lang) {
        const t = translations[lang];
        
        // Update headings
        document.querySelectorAll('h6').forEach(h6 => {
            const icon = h6.querySelector('i');
            const text = h6.textContent.trim().replace(/\s+/g, ' ');
            
            if (icon) {
                const iconClass = icon.className;
                const textWithoutIcon = text.replace(iconClass, '').trim();
                Object.keys(translations.en).forEach(key => {
                    if (textWithoutIcon.includes(key) && t[key]) {
                        h6.innerHTML = h6.innerHTML.replace(key, t[key]);
                    }
                });
            }
        });
        
        // Update navigation links (excluding language toggle)
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            if (!link.onclick) {
                const text = link.textContent.trim();
                if (t[text]) link.textContent = t[text];
            }
        });
        
        // Update language toggle
        const langText = document.getElementById('lang-text');
        if (langText) langText.textContent = t.lang_toggle;
        
        // Update menu button
        const menuButton = document.querySelector('.navbar-toggler');
        if (menuButton) {
            const textNode = Array.from(menuButton.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
            if (textNode) textNode.textContent = ' ' + t.Menu;
        }
        
        // Update publication card links
        document.querySelectorAll('a').forEach(link => {
            const text = link.textContent.trim();
            if (text === 'view all' || text === '查看全部') {
                link.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                        node.textContent = t['view all'] + ' ';
                    }
                });
            } else if (text.startsWith('All publications') || text.startsWith('全部论文')) {
                link.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                        node.textContent = t['All publications'] + ' ';
                    }
                });
            }
        });
        
        // Update social media links
        const socialLinks = {
            'Google Scholar': '.fa-google-scholar',
            'GitHub': '.fa-github',
            'WeChat': '.fa-weixin',
            'LinkedIn': '.fa-linkedin',
            'ORCID': '.fa-orcid'
        };
        
        Object.entries(socialLinks).forEach(([key, iconClass]) => {
            const link = document.querySelector(`a ${iconClass}`);
            if (link && link.parentElement) {
                const textNode = Array.from(link.parentElement.childNodes).find(
                    n => n.nodeType === Node.TEXT_NODE && n.textContent.trim()
                );
                if (textNode) textNode.textContent = ' ' + t[key];
            }
        });
    }

    // Translate publication and news content using data attributes
    function translateContent(lang) {
        // Translate publication titles
        document.querySelectorAll('.publication-title').forEach(el => {
            const text = lang === 'zh' ? el.dataset.zh : el.dataset.en;
            if (text && text !== 'undefined') {
                el.textContent = text;
            }
        });
        
        // Translate publication venues
        document.querySelectorAll('.pub-venue').forEach(el => {
            const text = lang === 'zh' ? el.dataset.zh : el.dataset.en;
            if (text && text !== 'undefined') {
                // Extract the year and semantic scholar span
                const yearMatch = el.textContent.match(/\d{4}/);
                const year = yearMatch ? yearMatch[0] : '';
                const semanticSpan = el.querySelector('span[data-semantic-scholar-id]');
                const miscSpan = el.querySelector('.pub-venue-misc');
                
                el.innerHTML = text;
                if (year) el.innerHTML += ' ' + year;
                if (miscSpan) {
                    const miscText = lang === 'zh' ? miscSpan.dataset.zh : miscSpan.dataset.en;
                    if (miscText && miscText !== 'undefined') {
                        el.innerHTML += ' ' + miscText;
                    }
                }
                if (semanticSpan) {
                    el.innerHTML += ' ';
                    el.appendChild(semanticSpan);
                }
            }
        });
        
        // Translate publication abstracts
        document.querySelectorAll('.pub-abstract').forEach(el => {
            const text = lang === 'zh' ? el.dataset.zh : el.dataset.en;
            if (text && text !== 'undefined') {
                el.textContent = text;
            }
        });
        
        // Translate news titles
        document.querySelectorAll('.news-title').forEach(el => {
            const text = lang === 'zh' ? el.dataset.zh : el.dataset.en;
            if (text && text !== 'undefined') {
                el.textContent = text;
            }
        });
        
        // Translate publication links
        document.querySelectorAll('.abstract-links').forEach(el => {
            try {
                const linksData = lang === 'zh' ? el.dataset.linksZh : el.dataset.linksEn;
                if (linksData && linksData !== 'undefined' && linksData !== 'null') {
                    const links = JSON.parse(linksData);
                    if (links && Object.keys(links).length > 0) {
                        let html = '';
                        Object.entries(links).forEach(([key, value]) => {
                            const url = typeof value === 'object' ? value.url : value;
                            const target = typeof value === 'object' ? value.target : '_blank';
                            html += `<a target="${target}" href="${url}">[${key}]</a> `;
                        });
                        el.innerHTML = html.trim();
                    }
                }
            } catch (e) {
                // Keep original links if parsing fails
            }
        });
    }

    // Main translation function
    function applyTranslations(lang) {
        updateProfileContent(lang);
        translateUI(lang);
        translateContent(lang);
        
        // Store data attributes from Jekyll frontmatter
        storeContentData();
    }

    // Store content translations from page data
    function storeContentData() {
        // This will be populated by the Jekyll template with data attributes
        // containing the Chinese translations
    }

    // Toggle language
    window.toggleLanguage = function() {
        const currentLang = getCurrentLanguage();
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setCurrentLanguage(newLang);
        applyTranslations(newLang);
    };

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        const currentLang = getCurrentLanguage();
        applyTranslations(currentLang);
    });
})();
