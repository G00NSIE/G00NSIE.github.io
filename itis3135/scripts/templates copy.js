class HeaderTemplate extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          
          header {
            background-color: #ff8a00;
            color:#ffffff;
            padding-bottom: 10px;
            
            
          }
          nav {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
          }
          nav ul {
            list-style: none;
          }
          nav li {
            display: inline-block;
            margin: 0 10px;
          }
          nav a {
            color:#ffffff;
            text-decoration: none;
          }
          nav a:hover {
            text-decoration: underline;
          }
        </style>
        <header>
          <nav>
            <ul>
              <li><a href="https://g00nsie.github.io/">CLT</a></li>
              <li>∵</li>
              <li><a href="index.html">Home</a></li>
              <li>∵</li>
              <li><a href="introduction.html">Introduction</a></li>
              <li>∵</li>
              <li><a href="contract.html">Contract</a></li>
              <li>∵</li>
              <li><a href="tables.html">Tables</a></li>
              <li>∵</li>
              <li><a href="forms.html">Forms</a></li>
              <li>∵</li>
              <li><a href="crap.html">Crap Evaluation</a></li>
              <li>∵</li>
              <li><a href="firstscripts.html">First Script Page</a></li>
              <li>∵</li>
              <li><a href="about.html">About</a></li>
              <li>∵</li>
              <li><a href="byo_intro.html">BYO Intro</a></li>
              <li>∵</li>
              <li><a href="calculator_try.html">Calculator Try</a></li>
              <li>∵</li>
              <li><a href="arrays.html">Arrays</a></li>
              <li>∵</li>
              <li><a href="drawing.html">Drawing</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-template', HeaderTemplate);

  



  //----

  class FooterTemplate extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <style>
          
      footer {
        background-color: var(--tertiary-color);
        color: var(--secondary-color);
        padding: 20px;
      }
      .validation-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
      }
      li {
        list-style: none;
        display: inline;
        margin: 0 10px;
      }
      a {
        text-decoration: none;
        color: var(--secondary-color);
      }
      a:hover {
        text-decoration: underline;
      }
      p{
        text-align: center;
        font-size: 12px;
      }
    </style>
    <footer>
    <p><strong>The Motivated Manatee:</strong> <em>The Ultimate Snack Destination for Exotic Cheese Puffs</em></p>
      <ul>
        <li><a href="https://g00nsie.github.io/">CLT</a></li>
        <li><a href="https://github.com/G00NSIE">Github</a></li>
        <li><a href="https://g00nsie.github.io/">Github.io</a></li>
        <li><a href="https://g00nsie.github.io/itis3135/index.html">itis3135.io</a></li>
        <li><a href="https://www.freecodecamp.org/MerinoM">FreeCodeCamp</a></li>
        <li><a href="https://www.codecademy.com/profiles/MerinoM">Codecademy</a></li>
        <li><a href="https://www.linkedin.com/in/mannymerino/">LinkedIn</a></li>
      </ul>
      <div class="validation-container">
      <a class="validation" href="https://validator.w3.org/check?uri=referer" id="validation_link_html">
        <img style="border: 0; width: 88px; height: 31px;" src="https://mytienhoang.github.io/itis3135/z_archives/html_validation.png" alt="Valid HTML!">
      </a>
      <a href="https://jigsaw.w3.org/css-validator/check/referer" id="validation_link_css">
        <img class="validation" style="border: 0; width: 88px; height: 31px;"  src="https://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!">
      </a>
      <a href="https://wave.webaim.org/report#/" id="validation_link_disability"> 
  <img class="validation" style="border:0;width:88px;height:31px" src="images/Valid.png" alt="Valid Disabiliy/Accessibility Design!">
</a>
</div>
      <p>© 2024 mannydesigns.space All rights reserved.</p>
      <p>The best design solutions for your needs.</p>
      <footer>
      <p>Designed by <a href="../merinodesigns.space/index.html">merinodesigns</a> Certified in <a href="https://www.freecodecamp.org/certification/MerinoM/responsive-web-design">RWD</a></p>
        
      </footer>
    </footer>
      `;
    }
  
    connectedCallback() {
      let encodedUrl = encodeURIComponent(location.href);
      this.shadowRoot.getElementById("validation_link_html").setAttribute("href","https://validator.w3.org/nu/?doc=" + encodedUrl);
      this.shadowRoot.getElementById("validation_link_css").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + encodedUrl);
      this.shadowRoot.getElementById("validation_link_disability").setAttribute("href","https://wave.webaim.org/report#/" + location.href);
    }
  }
  
  customElements.define('footer-template', FooterTemplate);
  