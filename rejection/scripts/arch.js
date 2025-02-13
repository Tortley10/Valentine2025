       // Matrix background effect
       const canvas = document.getElementById('matrix-bg');
       const ctx = canvas.getContext('2d');

       function resizeCanvas() {
           canvas.width = window.innerWidth;
           canvas.height = window.innerHeight;
       }

       window.addEventListener('resize', resizeCanvas);
       resizeCanvas();

       const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|;:,.<>?';
       const fontSize = 14;
       const columns = canvas.width / fontSize;

       const drops = [];
       for (let i = 0; i < columns; i++) {
           drops[i] = 1;
       }

       function drawMatrixRain() {
           ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
           ctx.fillRect(0, 0, canvas.width, canvas.height);

           ctx.fillStyle = '#00ff00';
           ctx.font = fontSize + 'px monospace';

           for (let i = 0; i < drops.length; i++) {
               const text = characters.charAt(Math.floor(Math.random() * characters.length));
               ctx.fillText(text, i * fontSize, drops[i] * fontSize);

               if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                   drops[i] = 0;
               }
               drops[i]++;
           }
       }

       setInterval(drawMatrixRain, 50);

       // Logo hover effect
       document.addEventListener('DOMContentLoaded', () => {
           const logo = document.querySelector('.logo');
           const wings = document.querySelectorAll('.wing');
           const letter = document.querySelector('.letter');

           logo.addEventListener('mouseover', () => {
               wings.forEach(wing => {
                   wing.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
                   wing.style.boxShadow = '0 0 20px #00ff00';
                   if (wing.classList.contains('wing-left')) {
                       wing.style.transform = 'translateY(-50%) rotate(-30deg)';
                   } else {
                       wing.style.transform = 'translateY(-50%) rotate(30deg) scaleX(-1)';
                   }
               });
               letter.style.transition = 'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out';
               letter.style.transform = 'translate(-50%, -50%) scale(1.1)';
               letter.style.textShadow = '0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00';
           });

           logo.addEventListener('mouseout', () => {
               wings.forEach(wing => {
                   wing.style.boxShadow = 'none';
                   if (wing.classList.contains('wing-left')) {
                       wing.style.transform = 'translateY(-50%) rotate(-20deg)';
                   } else {
                       wing.style.transform = 'translateY(-50%) rotate(20deg) scaleX(-1)';
                   }
               });
               letter.style.transform = 'translate(-50%, -50%) scale(1)';
               letter.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00';
           });
       });