fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menu = data.menuItems;
    const navList = document.querySelector('header-template').shadowRoot.querySelector('nav ul');
    navList.innerHTML = ''; // Clear existing menu items
    menu.forEach(item => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.text;
      listItem.appendChild(link);
      navList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error loading menu:', error));
