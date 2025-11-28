/* ===============================
   SMOOTH SCROLL NAVIGATION
================================= */
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector(e.target.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
    });
});
/* ===============================
   ACTIVE NAV LINK HIGHLIGHT
================================= */
const sections = document.querySelectorAll('.container');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
/* ===============================
   SCROLL APPEAR ANIMATION
================================= */
const faders = document.querySelectorAll('.container');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
/* ===============================
   BACK TO TOP BUTTON
================================= */
const topBtn = document.createElement('button');
topBtn.id = 'topBtn';
topBtn.innerHTML = '⬆️ Top';
document.body.appendChild(topBtn);

const topBtnStyle = `
  #topBtn {
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: none;
    background: #003366;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = topBtnStyle;
document.head.appendChild(styleSheet);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
/* ===============================
   SKILLS TYPING EFFECT
================================= */
document.addEventListener('DOMContentLoaded', () => {
  const skills = [
    "Still learning", 
    "Web Development", 
    "Database Management", 
    "Virutal Machine Workstation", 
    "C#", 
    "Cybersecurity"
  ];
  let skillIndex = 0;
  let charIndex = 0;
  const headerPara = document.getElementById('skills');
  headerPara.textContent = ''; 

  function typeSkill() {
    if (charIndex < skills[skillIndex].length) {
      headerPara.textContent += skills[skillIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeSkill, 150); 
    } else {
      setTimeout(eraseSkill, 1500);
    }
  }

  function eraseSkill() {
    if (charIndex > 0) {
      headerPara.textContent = skills[skillIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseSkill, 100); 
    } else {
      skillIndex = (skillIndex + 1) % skills.length;
      setTimeout(typeSkill, 200); 
    }
  }

  typeSkill(); 
});
/* ===============================
   DARK / LIGHT MODE TOGGLE
================================= */
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
