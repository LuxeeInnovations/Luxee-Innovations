const coursesData = [
    {
      title: "HTML Basics",
      description: "Learn the fundamentals of HTML, the building block of web development.",
      icon: "icons/html-icon.png",
    },
    {
      title: "CSS Basics",
      description: "Understand the basics of CSS for styling websites.",
      icon: "icons/css-icon.png",
    },
    {
      title: "JavaScript Basics",
      description: "Dive into JavaScript, the programming language of the web.",
      icon: "icons/javascript-icon.png",
    },
    {
      title: "UI/UX Design",
      description: "Learn the principles of user interface and user experience design.",
      icon: "icons/uiux-icon.png",
    },
    {
      title: "Motion Graphics",
      description: "Explore the basics of creating stunning motion graphics.",
      icon: "icons/motion-graphics-icon.png",
    },
    {
      title: "Video Editing",
      description: "Master the fundamentals of editing videos professionally.",
      icon: "icons/video-editing-icon.png",
    },
    {
      title: "3D Animation",
      description: "Get started with 3D animation and bring your ideas to life.",
      icon: "icons/3d-animation-icon.png",
    },
    {
      title: "Radiology Basics",
      description: "Learn key topics in radiology and its applications in healthcare.",
      icon: "icons/radiology-icon.png",
    },
    {
      title: "Yoga Course",
      description: "Understand the basics of yoga for physical and mental well-being.",
      icon: "icons/yoga-icon.png",
    },
    {
      title: "Psychology Basics",
      description: "Gain foundational knowledge in psychology and human behavior.",
      icon: "icons/psychology-icon.png",
    },
  ];


  // Dropdown toggle for mobile or extra functionality
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
  const dropdownContent = dropdown.querySelector('.dropdown-content');
  const isDisplayed = window.getComputedStyle(dropdownContent).display === 'block';
  dropdownContent.style.display = isDisplayed ? 'none' : 'block';
});


  function renderCourses() {
    const container = document.getElementById("courses-container");

    coursesData.forEach((course) => {
      const courseElement = document.createElement("div");
      courseElement.classList.add("course");

      courseElement.innerHTML = `
        <img src="${course.icon}" alt="${course.title} Icon">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button onclick="downloadCertificate('${course.title}')">Download Certificate</button>
      `;

      container.appendChild(courseElement);
    });
  }

  function downloadCertificate(courseName) {
    const isLoggedIn = false; // Update this based on actual login state

    if (!isLoggedIn) {
      alert('Please log in to download your certificate.');
      window.location.href = 'login.html';
    } else {
      alert(`Downloading certificate for ${courseName}.`);
      const link = document.createElement("a");
      const certificateContent = `Certificate of Completion\n\nThis certifies that you have completed the ${courseName} course at Luxee Innovation Academy.`;
      const blob = new Blob([certificateContent], { type: "text/plain" });
      link.href = URL.createObjectURL(blob);
      link.download = `${courseName}-Certificate.txt`;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  }

  renderCourses();