// Language switcher functionality
(function() {
    // Translation dictionary
    const translations = {
        en: {
            // Profile card
            'Google Scholar': 'Google Scholar',
            'GitHub': 'GitHub',
            'WeChat': 'WeChat',
            'Twitter': 'Twitter',
            'LinkedIn': 'LinkedIn',
            'ORCID': 'ORCID',
            'Curriculum Vitae': 'Curriculum Vitae',
            'Close': 'Close',
            
            // Experience card
            'Education': 'Education',
            'Experience': 'Experience',
            'Honors & Awards': 'Honors & Awards',
            
            // News card
            'News': 'News',
            
            // Publication card
            'Selected Publications': 'Selected Publications',
            'Publications': 'Publications',
            
            // Navigation
            'Home': 'Home',
            'Publications': 'Publications',
            'Showcase': 'Showcase',
            'Menu': 'Menu',
            
            // Language toggle
            'lang_toggle': '中文'
        },
        zh: {
            // Profile card
            'Google Scholar': '谷歌学术',
            'GitHub': 'GitHub',
            'WeChat': '微信',
            'Twitter': 'Twitter',
            'LinkedIn': '领英',
            'ORCID': 'ORCID',
            'Curriculum Vitae': '简历',
            'Close': '关闭',
            
            // Experience card
            'Education': '教育经历',
            'Experience': '工作经历',
            'Honors & Awards': '荣誉奖项',
            
            // News card
            'News': '最新动态',
            
            // Publication card
            'Selected Publications': '精选论文',
            'Publications': '论文发表',
            
            // Navigation
            'Home': '首页',
            'Publications': '论文发表',
            'Showcase': '项目展示',
            'Menu': '菜单',
            
            // Language toggle
            'lang_toggle': 'EN'
        }
    };

    // Profile data
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

    // Get current language from localStorage or default to 'en'
    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'en';
    }

    // Set current language
    function setCurrentLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    // Translate text nodes
    function translateElement(element, lang) {
        const text = element.textContent.trim();
        if (translations[lang][text]) {
            element.textContent = translations[lang][text];
        }
    }

    // Update profile content
    function updateProfileContent(lang) {
        const data = profileData[lang];
        
        // Update navbar name
        const navbarName = document.querySelector('.navbar-brand strong');
        if (navbarName) {
            navbarName.textContent = data.navbar_name;
        }
        
        // Update primary name
        const primaryName = document.querySelector('.h1.font-weight-normal');
        if (primaryName) {
            primaryName.childNodes[0].textContent = data.primary_name + ' ';
        }
        
        // Update position
        const position = document.querySelector('.text-profile-position');
        if (position) {
            position.innerHTML = data.positions + '<br/>';
        }
        
        // Update bio
        const bio = document.querySelector('.text-profile-bio');
        if (bio) {
            bio.innerHTML = data.short_bio;
        }
        
        // Update education
        const educationItems = document.querySelectorAll('.col-md-6 .mx-2 .list-unstyled.mb-1 .media');
        if (educationItems.length >= 3) {
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
        }
        
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

    // Apply translations to the page
    function applyTranslations(lang) {
        // Update navigation links
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            translateElement(link, lang);
        });
        
        // Update headings
        const headings = document.querySelectorAll('h6');
        headings.forEach(heading => {
            const icon = heading.querySelector('i');
            const text = heading.textContent.replace(/\s+/g, ' ').trim();
            
            if (icon) {
                const textWithoutIcon = text.replace(icon.className, '').trim();
                if (translations[lang][textWithoutIcon]) {
                    heading.innerHTML = icon.outerHTML + ' ' + translations[lang][textWithoutIcon];
                }
            } else if (translations[lang][text]) {
                heading.textContent = translations[lang][text];
            }
        });
        
        // Update common text elements
        document.querySelectorAll('a, button, .text-muted').forEach(element => {
            if (element.children.length === 0) {
                translateElement(element, lang);
            }
        });
        
        // Update profile content
        updateProfileContent(lang);
        
        // Update language toggle text
        const langText = document.getElementById('lang-text');
        if (langText) {
            langText.textContent = translations[lang].lang_toggle;
        }
        
        // Update Menu button
        const menuButton = document.querySelector('.navbar-toggler');
        if (menuButton) {
            const menuText = menuButton.childNodes[1];
            if (menuText && menuText.nodeType === Node.TEXT_NODE) {
                menuText.textContent = ' ' + translations[lang].Menu;
            }
        }
    }

    // Toggle language
    window.toggleLanguage = function() {
        const currentLang = getCurrentLanguage();
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setCurrentLanguage(newLang);
        applyTranslations(newLang);
        
        // Dispatch custom event for language change
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
    };

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        const currentLang = getCurrentLanguage();
        applyTranslations(currentLang);
    });
})();

