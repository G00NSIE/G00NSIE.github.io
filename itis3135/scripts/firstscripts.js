
           
        const dateTime = new Date();
        document.getElementById('date-time').textContent = `Today is ${dateTime.toLocaleTimeString()} on ${dateTime.toLocaleDateString()}`;
        

        document.getElementById('user-form').addEventListener('submit', function(event) {
            event.preventDefault();  

            const name = document.getElementById('name').value;
            const mood = document.getElementById('mood').value;
        
            document.getElementById('greeting').textContent = `The Motivated Manatee welcomes you, ${name}! We're glad you are doing ${mood}!`;
            showFavoritePolygon();

        })

        function showFavoritePolygon() {
            const number = document.getElementById('number').value;
            const polygons = ['digon', 'triangle', 'quadrilateral', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon', 'hendecagon', 'dodecagon'];
            const polygon = polygons[number - 2] || 'polygon';
    
            
            alert(`Your favorite polygon is a ${polygon}!`);
        }


        function joke() {
        const card = document.getElementById('function');
        card.textContent = 'Why do manatees make great friends? Because they always sea the best in you';
        card.style.display = 'block';        }

        function animalFact() {
            const card = document.getElementById('function');
           card.textContent='Manatees are typically found in shallow coastal areas and rivers where they feed on sea grass, mangrove leaves, and algae. These herbivores munch on food for almost half the day, eating ten percent of their body weight in plant mass every day. With weights of up to 1,200 pounds, that is a whole lot of greenery!';
           card.style.display = 'block';        
        }

        function story() {
            const card = document.getElementById('function');
           card.textContent='Manny was a young manatee who lived in the warm waters of Florida. He loved to swim around with his friends and eat seagrass. He was curious about everything and always wanted to explore new places.One day, he saw a big boat with people on it. He wondered what they were doing and decided to follow them. He swam closer and closer, until he heard a loud noise. It was a propeller, spinning fast and cutting through the water. Manny didnt know what it was, but he felt a sudden pain in his back. He cried out and quickly swam away.He reached his home and looked for his mother. She was there, waiting for him. She saw the wound on his back and gasped. She hugged him and said, "Oh, Manny, what happened to you? Manny told her everything. He said he was sorry for being so reckless. His mother said, "Its okay, Manny. Im glad youre safe. But you have to be careful around boats. They can hurt you very badly. They dont mean to, but they dont know were here. We have to stay away from them and protect ourselves.Manny nodded and said, "I understand, Mom. I wont go near them again. I just wanted to see what they were doing. His mother said, "I know, Manny. Youre a brave and adventurous manatee. But sometimes, its better to be cautious and stay with your friends. There are many other things to see and do in the ocean. You can still have fun and learn new things without risking your life.Manny smiled and said, "Youre right, Mom. I love you.His mother said, "I love you too, Manny.They hugged each other and swam together, happy and safe.';
           card.style.display = 'block';   
        }

        function motivate() {
            const card = document.getElementById('function');
           card.textContent='"Dont let the fear of striking out keep you from playing the game." - Babe Ruth';
           card.style.display = 'block';   
        }

       
   