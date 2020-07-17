const landingTitleText = document.getElementById('landingTitleText');
const landingSubTitleText = document.getElementById('landingSubTitleText');

const startTypewriter = () => {
    const options = {
        strings: ['','Stáb Official'],
        typeSpeed: 40
      };
      
    const typed = new Typed(landingTitleText, options);
      
    
    
    const options2 = {
        strings: ['', ' ^1000 Az első gondolattól az utolsó simításig.'],
        typeSpeed: 25
      };
      
    const typed2 = new Typed(landingSubTitleText, options2);
}

startTypewriter();