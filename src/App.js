import { useEffect, useState } from 'react';
import imgScroll from './media/img/xmasScroll.png';
import './App.css';



function App() {

  const [ showEffects, setShowEffects ] = useState(true);
  const [ effectClass, setEffectClass ] = useState('effectsContainer');

  const snowFlakes = ['&#10052', '&#10053', '&#10054'];
  const stars = ['&#10022', '&#10023'];

  const random = (num) => {
      return Math.floor(Math.random() * num);
  }

  const getRandomStyles = () => {
      const top = random(100);
      const left = random(100);
      const dur = random(10) + 10;
      const size = random(25) + 25;
      return  `
              top: -${top}%;
              left: ${left}%;
              font-size: ${size}px;
              animation-duration: ${dur}s;
              `;
  }

  const Effects = ({ num }) => {
    let effectArray = [];
    for (let i = num; i > 0; i--) {
      let snow = document.createElement("div");
      snow.classList.add('snow');
      snow.style.cssText = getRandomStyles();
      snow.innerHTML = snowFlakes[random(2)];
      effectArray.push(snow);
    }

    for (let i = num; i > 0; i--) {
      let newStar = document.createElement("div");
      newStar.classList.add('star');
      newStar.style.cssText = getRandomStyles();
      newStar.innerHTML = stars[random(2)];
      effectArray.push(newStar);
    }
    return (
      <div>
        { effectArray.map((effect, index) => <Effect key={ index } icon={ effect.innerHTML } style={ effect.style.cssText } nameOfClass={ effect.className } /> )}
      </div>
    )
  }

  const Effect = ({ icon, style, nameOfClass }) => {
    // console.log(style);
    let finalArray = [];
    let splitStringArray = style.split(';')

    for (let i = 0; i < splitStringArray.length - 1; i++) {
      let tmp = splitStringArray[i].slice(splitStringArray[i].indexOf(':')).slice(2);
      // console.log(tmp);
      finalArray.push([tmp]);
    }
    // console.log(finalArray);

    return (
      <div className={ nameOfClass } style={{ top: `${ finalArray[0] }`, left: `${ finalArray[1] }`, fontSize: `${ finalArray[2] }`, animationDuration: `${ finalArray[3] }`}}>
        { icon }
      </div>
    )
  }

  const removeEffects = () => {
    setEffectClass('effectsContainer hide');
    setTimeout(() => {
      setShowEffects(false);
    }, 3000);
  }

  return (
    <div className="App" onClick={ removeEffects }>
      { showEffects 
        ?      
        <div className={`${ effectClass }`} >
          <Effects num={ 60 } />
        </div>
        :
        null
      }

      <div className='imgScroll'> 
        { showEffects
          ?
          null
          :       
          <div>
            <h1>Merry X-Mas My Love!</h1>
              <p>
                This took a bit of work, but you are more than worth it. I love you
                so much I would go to the moon and back, because you're worth it!
                Sometimes life is work, but doing it with you makes it worth it!
                I am so greatful to be able to spend my life with you, I will
                always strive to be worth it! To many Merry Christmas and Happy
                New Years! Cuz we're Worth It!
              </p>
              <hr />
              <p>I Love you more than all the things! WE DA BEST! YASSSSS!</p>
          </div>
        }
      </div>
      { showEffects
        ?
        null
        :
        <a href="https://drive.google.com/drive/folders/1ogp_Z_7YmnqeGOTID4ERwNEsWLhZIVtI?usp=share_link" target="_blank" rel="noreferrer" >
          <div className='btnPresent' >
            <h3>Get Yer Present!</h3>
          </div>
        </a>
      }
    </div>

  );
}

export default App;



