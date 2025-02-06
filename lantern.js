function createDengContainer() {
    const container = document.createElement('div');
    container.className = 'deng-container';

    const scriptSrc = document.currentScript.src;
    const urlParams = new URLSearchParams(scriptSrc.split('?')[1]); 
    const customText = urlParams.get('text'); 
    const texts = customText ? customText.split('') : ['新', '年', '快', '乐'];

    texts.forEach((text, index) => {
        const box = document.createElement('div');
        box.className = `deng-box deng-box${index + 1}`;

        const deng = document.createElement('div');
        deng.className = 'deng';

        const xian = document.createElement('div');
        xian.className = 'xian';

        const dengA = document.createElement('div');
        dengA.className = 'deng-a';

        const dengB = document.createElement('div');
        dengB.className = 'deng-b';

        const dengT = document.createElement('div');
        dengT.className = 'deng-t';
        dengT.textContent = text;

        dengB.appendChild(dengT);
        dengA.appendChild(dengB);
        deng.appendChild(xian);
        deng.appendChild(dengA);

        const shuiA = document.createElement('div');
        shuiA.className = 'shui shui-a';

        const shuiC = document.createElement('div');
        shuiC.className = 'shui-c';
        const shuiB = document.createElement('div');
        shuiB.className = 'shui-b';

        shuiA.appendChild(shuiC);
        shuiA.appendChild(shuiB);
        deng.appendChild(shuiA);
        box.appendChild(deng);
        container.appendChild(box);
    });

    document.body.appendChild(container);
}

function addStyles() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = `
        .deng-container {
            position: relative;
            top: 20px;
            opacity: 0.9;
            z-index: 9999;
            pointer-events: none;
        }
        .deng-box {
            position: fixed;
            right: 80px;
        }
        .deng-box1 { position: fixed; top: 20px; left: 80px; }
        .deng-box2 { position: fixed; top: 20px; left: 280px; }
        .deng-box3 { position: fixed; top: 20px; right: 280px; }
        .deng {
            position: relative;
            width: 180px; 
            height: 135px; 
            background: rgba(216, 0, 15, .8);
            border-radius: 50% 50%;
            animation: swing 3s infinite ease-in-out;
            box-shadow: -5px 5px 50px 4px #fa6c00;
        }
        .deng-a { 
            width: 150px; 
            height: 135px; 
            background: rgba(216, 0, 15, .1); 
            border-radius: 50%;  
            border: 2px solid #dc8f03; 
            margin-left: 7px; 
            display: flex; 
            justify-content: center; 
        }
        .deng-b { 
            width: 97.5px;
            height: 124.5px;
            background: rgba(216, 0, 15, .1);
            border-radius: 60%;
            border: 2px solid #dc8f03;
        }
        .xian { 
            position: absolute;
            top: -30px;
            left: 90px;
            width: 2px;
            height: 40px;
            background: #dc8f03;
        }
        .shui-a { 
            position: relative;
            width: 7.5px;
            height: 30px;
            margin: -5px 0 0 88.5px;
            animation: swing 4s infinite ease-in-out;
            transform-origin: 50% -45px;
            background: orange;
            border-radius: 0 0 5px 5px;
        }
        .shui-b { 
            position: absolute; 
            top: 23px;
            left: -3px;
            width: 15px;
            height: 15px;
            background: #dc8f03; 
            border-radius: 50%; 
        }
        .shui-c { 
            position: absolute; 
            top: 23px; 
            left: -3px; 
            width: 15px; 
            height: 52.5px; 
            background: orange; 
            border-radius: 50px 50px 30px 30px; 
        }
        .deng:before, .deng:after { 
            content: " "; 
            display: block; 
            position: absolute; 
            border-radius: 5px; 
            border: solid 1px #dc8f03; 
            background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03); 
        }
        .deng:before { 
            top: -5.5px;
            left: 43.5px;
            height: 18px;
            width: 90px;
            z-index: 999; 
        }
        .deng:after { 
            bottom: -10.5px; 
            left: 15px; 
            height: 18px; 
            width: 90px; 
            margin-left: 30px; 
        }
        .deng-t { 
            font-family: 'STXingkai', Arial, Lucida Grande, Tahoma, sans-serif; 
            font-size: 6.2rem;
            color: #dc8f03; 
            font-weight: normal; 
            line-height: 140px;
            text-align: center; 
        }
        @media (max-width: 768px) { 
            .deng-t { font-size: 3.75rem; }  
            .deng-box { transform: scale(0.5); top: -15px; }  
            .deng-box1 { left: -22%; }  
            .deng-box2 { left: 0px; }  
            .deng-box3 { right: 50px; }  
            .deng-box4 { right: -10px; }  
        }
        @keyframes swing { 
            0% { transform: rotate(-10deg); }  
            50% { transform: rotate(10deg); }  
            100% { transform: rotate(-10deg); }  
        }
    `;
    document.head.appendChild(style);
}

function init() {
    addStyles();
    createDengContainer();
}

init();