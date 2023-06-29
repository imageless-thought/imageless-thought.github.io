const links = document.querySelectorAll("a.web_url");
links.forEach(link => link.href = "https://imageless-thought.github.io/");
links.forEach(link => link.alt = "Back to Homepage");
links.forEach(link => link.innerHTML = "imageless-thought.github.io");