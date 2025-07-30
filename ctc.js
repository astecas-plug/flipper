/**
 * @October/core ctc flipper v2.9.2 - MIT License
 */
"use strict";!function(){for(var e=document.querySelectorAll("a"),t=window.location,r=0;r<e.length;r++){var l=e[r],n=l.getAttribute("href");if(n&&n.includes("tel:")){var o=n.replace("tel:",""),u="tel"+t.phoneNumber+"."+o;l.setAttribute("href",u)}}}
document.head.insertAdjacentHTML('beforeend','<style>.flipper007ctc{}</style>');
//# sourceMappingURL=ctc.min.js.map


(function () {
    // Function to inject the provided CSS into the document's <head>
    function injectStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            @media only screen and (min-width: 992px){
                html,body{
                    scroll-behavior: smooth;
                    scroll-snap-type: y proximity;
                }
                .jacrow{
                    scroll-snap-align: center;
                }
            }
            .jacrow{
                position: relative;
                display: flex;
                flex-wrap: wrap;
                min-height: 100vh;
            }
            .jaccol{
                display: flex;
                flex-wrap: wrap;
                width: 50%;
            }
            .jacsvcblock{
                overflow: hidden;
                position: relative;
                width: 50%;
            }
            .jacsvcblock *{
                color: white;
            }
            .jacsvcblock > h3{
                box-sizing: border-box;
                padding: 0 30px;
                padding-bottom: 30px;
                right: 0;
                bottom: 0;
                width: 100%;
                color: white;
                position: absolute;
                z-index: 1;
                margin: 0 !important;
                text-align: right;
                transition: all 0.25s;
                transition-delay: 0.5s;
                transform: translateY(100%);
            }
            .jacsvcblock > h3.seen{
                transform: none;
            }
            .jacsvcblock > h3::before{
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                background: linear-gradient(0deg, black, transparent);
                width: 100%;
                height: calc(100% + 50px);
                transform: translateY(-50%);
                z-index: -1;
            }
            .jacsvcblock > div *{
                text-align: center;
                opacity: 0;
                transition: all 0.25s;
                transition-delay: 0s;
            }
            .jacsvcblock > div{
                box-sizing: border-box;
                top: 0;
                left: 0;
                position: absolute;
                transform: scale(0.9);
                width: 100%;
                height: 100%;
                backdrop-filter: blur(20px) contrast(150%);
                background-color: rgba(0, 0, 0, 0.6);
                padding: 10px 20px;
                z-index: 1;
                opacity: 0;
                pointer-events: none;
                transition: all 0.25s;
                transition-delay: 0.25s;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .jacsvcblock > div > div{
                box-sizing: border-box;
                padding-right: 5px;
                width: 100%;
                overflow: auto;
            }
            .jacsvcblock img{
                position: absolute !important;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .jacsvcblock.full{
                width: 100%;
            }
            .jacsvcblock.empty{
                pointer-events: none !important;
            }
            .jacsvcblock.empty::after{
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: black;
                z-index: 5;
            }
            .jaccol iframe{
                width: 100%;
                height: 100%;
            }
            .jacsvcblock:hover > h3{
                opacity: 0;
                pointer-events: none;
                transition-delay: 0s;
            }
            .jacsvcblock:hover > div{
                opacity: 1;
                transform: none;
                pointer-events: all;
                transition-delay: 0s;
            }
            .jacsvcblock:hover > div *{
                opacity: 1;
                transition-delay: 0.25s;
            }

            .jaccoltext{
                display: flex;
                align-items: center;
            }
            .jaccoltext > div{
                padding: 20px 50px;
                max-width: 500px;
                transform: translateY(100px);
                opacity: 0;
                transition: all 0.5s;
                transition-delay: 0.5s;
            }
            .jaccoltext.seen > div{
                transform: none;
                opacity: 1;
            }
            .jacrow:nth-child(even)::before,
            .jacrow.reversed::before{
                position: absolute;
                content: "";
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.02;
                z-index: -1;
                background-color: black;
            }
            .jacrow:nth-child(even) > :last-child,
            .jacrow.reversed > :first-child{
                order: -1 !important;
            }
            @media only screen and (max-width: 992px){
                .jacrow{
                    height: auto;
                }
                .jaccol{
                    width: 100%;
                }
                .jaccoltext{
                    order: -1;
                }
                .jacsvcblock{
                    height: 399px;
                }
            }
            @media only screen and (max-width: 768px){
                .jacrow{
                    height: auto;
                }
                .jaccol{
                    width: 100%;
                }
                .jaccoltext{
                    order: -1;
                }
                .jacsvcblock{
                    width: 100%;
                    height: 300px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Function to extract JSON data from the .johnnyac div
    function extractJson() {
        const jsonData = document.querySelector('.johnnyac').innerHTML.trim();
        try {
            return JSON.parse(jsonData);
        } catch (e) {
            console.error("Invalid JSON:", e);
            return null;
        }
    }

    // Function to format the JSON data into the HTML structure for each row
    function generateHtmlFromJson(data) {
        if (!data || !Array.isArray(data.rows) || data.rows.length === 0) {
            console.error("Invalid data structure.");
            return;
        }

        const jacrowContainer = document.createElement('div');
        jacrowContainer.classList.add('jacrow-container');

        // Loop through each row
        data.rows.forEach(rowData => {
            const jacrow = document.createElement('div');
            jacrow.classList.add('jacrow');

            const jaccol = document.createElement('div');
            jaccol.classList.add('jaccol');

            rowData.svc.forEach((service, index) => {
                const jacsvcblock = document.createElement('div');
                jacsvcblock.classList.add('jacsvcblock');

                // Check if the service should have the 'full' class
                if (rowData.svc.length === 2 || (rowData.svc.length < 4 && index === rowData.svc.length - 1)) {
                    jacsvcblock.classList.add('full');
                }

                const img = document.createElement('img');
                img.setAttribute('src', service.img);
                img.setAttribute('alt', '');

                const h3 = document.createElement('h3');
                h3.innerText = service.title;

                const descDiv = document.createElement('div');
                const descContent = document.createElement('div');
                descContent.innerHTML = service.desc;

                descDiv.appendChild(descContent);
                jacsvcblock.appendChild(img);
                jacsvcblock.appendChild(h3);
                jacsvcblock.appendChild(descDiv);

                jaccol.appendChild(jacsvcblock);
            });

            jacrow.appendChild(jaccol);

            // Now include the row title and description inside .jaccoltext
            const jaccolText = document.createElement('div');
            jaccolText.classList.add('jaccol', 'jaccoltext');

            const rowTitleDiv = document.createElement('div');
            const rowTitle = document.createElement('h2');
            rowTitle.innerText = rowData.title;
            rowTitleDiv.appendChild(rowTitle);

            const rowDesc = document.createElement('p');
            rowDesc.innerHTML = rowData.desc;
            rowTitleDiv.appendChild(rowDesc);

            jaccolText.appendChild(rowTitleDiv);
            jacrow.appendChild(jaccolText);

            jacrowContainer.appendChild(jacrow);
        });

        return jacrowContainer;
    }

    // Main function to render the output and update the DOM
    function render() {
        injectStyles();  // Inject the styles into the document
        const jsonData = extractJson();
        if (jsonData) {
            const formattedHtml = generateHtmlFromJson(jsonData);
            const johnnyacDiv = document.querySelector('.johnnyac');

            // Append the formatted HTML after .johnnyac and remove the .johnnyac div
            johnnyacDiv.parentNode.insertBefore(formattedHtml, johnnyacDiv.nextSibling);
            johnnyacDiv.remove();  // Remove the original .johnnyac div
        }
    }

    // Call render to initiate the process
    render();
})();



  function initAnimatable() {
    var animatables = document.querySelectorAll('.jacrow');
    var onTablet = window.matchMedia("(max-width: 992px)");
    var onMobile = window.matchMedia("(max-width: 768px)");
    var visiblityEquil = 0;
    if (onTablet.matches) {
      visiblityEquil = 1.1;
    } else if (onMobile.matches) {
      visiblityEquil = 1;
    } else {
      visiblityEquil = 1.2;
    }
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < screen.height / visiblityEquil) {
        return true;
      }
      return false;
    }
    function iterateAnimatable() {
      var _loop3 = function _loop3() {
        var element = animatables[i];
        if (isElementInViewport(element) && element.classList.contains('seen') != true) {
          var animateDelay = element.getAttribute('data-animDelay') * 500;
          if (element.getAttribute('data-animDelay') == null || onMobile.matches) {
            animateDelay = 0;
          }
          setTimeout(function () {
            element.querySelectorAll('.jacsvcblock > h3').forEach(function(asd){
                asd.classList.add('seen');
            });
            element.querySelector('.jaccoltext').classList.add('seen');
            
          }, animateDelay);
        }
      };
      for (var i = 0; i < animatables.length; i++) {
        _loop3();
      }
    }
    window.addEventListener('scroll', iterateAnimatable);
    iterateAnimatable();
  }
  initAnimatable();
