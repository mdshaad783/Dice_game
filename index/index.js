play = () =>{
        const play1 = Math.ceil(Math.random()*6);
        const play1dice = `dice${play1}.png`;
        document.getElementById('img1').setAttribute('src', play1dice);

        const play2 = Math.ceil(Math.random()*6);
        const play2dice = `dice${play2}.png`;
        document.getElementById('img2').setAttribute('src', play2dice);

        if(play1>play2){
            document.getElementById('result').innerHTML = 'Winner : Player 1';
        }
        else if(play1<play2){
            document.getElementById('result').innerHTML = 'Winner : Player 2';
        }
        else{
            document.getElementById('result').innerHTML = 'Match Draw'; 
        }
    }
