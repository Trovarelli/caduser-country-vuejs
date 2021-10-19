<template>
    <div id="div-pai">
        <div id="anuncio">
            <h1>Olá, seja bem-vindo!</h1>
        </div>
        <div id="animation">
            <img id="blowFish" src="img/blowFish.png">
            <img id="diverBg" src="img/diverBg.png">
            <img id="cFish1" src="img/cFish.png">
            <img id="cFish2" src="img/cFish.png">
            <img id="yFish1" src="img/yFish.png">
            <img id="yFish2" src="img/yFish.png">
            <img id="yFish3" src="img/yFish.png">
            <img id="yFish4" src="img/yFish.png">
            <img id="yFish5" src="img/yFish.png">
            <img id="pFish1" src="img/pFish.png">
            <img id="pFish2" src="img/pFish.png">
            <img id="pFish3" src="img/pFish.png">
            <img id="bFish1" src="img/bFish.png">
            <img id="bFish2" src="img/bFish.png">
            <img id="bFish3" src="img/bFish.png">
            <img id="bFish4" src="img/bFish.png">
            <img id="bFish5" src="img/bFish.png">
            <img id="tFish1" src="img/tFish.png">
            <img id="tFish2" src="img/tFish.png">
            <img id="tFish3" src="img/tFish.png">
            <img id="tFish4" src="img/tFish.png">
            <img id="tFish5" src="img/tFish.png">
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>

    #blowFish {
        position: absolute;
        top: 20px;
        right: -700px;
        width: 2000px;
        height: 90px;
        z-index: -9;
        animation: FadeIn 4s ease-out;
        animation-duration: 80s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBlowFish, FadeFloat, OpFish;
        object-fit: contain;
    }

    #diverBg {
        position: absolute;
        width: 200px;
        height: 200px;
        z-index: -12;
        left: auto;
        right: 200px;
        animation-name: bounce;
        animation-timing-function: ease;
        animation-duration: 13s;
        animation-iteration-count: infinite;
        object-fit: contain;
    }

    #tFish5 {
        position: absolute;
        top: 20px;
        right: 760px;
        width: 2000px;
        height: 50px;
        z-index: -11;
        animation: FadeIn 4s ease-out;
        animation: OpFish 20s ease-out;
        animation-delay: 20s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish5, FadeFloat, OpFish;
        object-fit: contain;
    }

    #tFish4 {
        position: absolute;
        top: 20px;
        right: 770px;
        width: 2000px;
        height: 60px;
        z-index: -10;
        animation: FadeIn 4s ease-out;
        animation: OpFish 20s ease-out;
        animation-delay: 20s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish4, FadeFloat, OpFish;
        object-fit: contain;
    }

    #tFish3 {
        position: absolute;
        top: 30px;
        right: 720px;
        width: 2000px;
        height: 70px;
        z-index: -9;
        animation: FadeIn 4s ease-out;
        animation: OpFish 20s ease-out;
        animation-delay: 20s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish3, FadeFloat, OpFish;
        object-fit: contain;
    }

    #tFish2 {
        position: absolute;
        top: 30px;
        right: 800px;
        width: 2000px;
        height: 70px;
        z-index: -9;
        animation: FadeIn 4s ease-out;
        animation: OpFish 20s ease-out;
        animation-delay: 20s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish2, FadeFloat, OpFish;
        object-fit: contain;
    }

    #tFish1 {
        position: absolute;
        right: 800px;
        top: 10px;
        width: 2000px;
        height: 30px;
        z-index: -12;
        animation: FadeIn 4s ease-out;
        animation: OpFish 20s ease-out;
        animation-delay: 20s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish1, FadeFloat, OpFish;
        object-fit: contain;
    }


    #bFish5 {
        position: absolute;
        top: 20px;
        right: 760px;
        width: 2000px;
        height: 50px;
        z-index: -11;
        animation: FadeIn 4s ease-out;
        animation: OpFish 15s ease-out;
        animation-delay: 15s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish5, FadeFloat, OpFish;
        object-fit: contain;
    }

    #bFish4 {
        position: absolute;
        top: 20px;
        right: 770px;
        width: 2000px;
        height: 60px;
        z-index: -10;
        animation: FadeIn 4s ease-out;
        animation: OpFish 15s ease-out;
        animation-delay: 15s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish4, FadeFloat, OpFish;
        object-fit: contain;
    }

    #bFish3 {
        position: absolute;
        top: 30px;
        right: 720px;
        width: 2000px;
        height: 70px;
        z-index: -9;
        animation: FadeIn 4s ease-out;
        animation: OpFish 15s ease-out;
        animation-delay: 15s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish3, FadeFloat, OpFish;
        object-fit: contain;
    }

    #bFish2 {
        position: absolute;
        top: 30px;
        right: 800px;
        width: 2000px;
        height: 70px;
        z-index: -9;
        animation: FadeIn 4s ease-out;
        animation: OpFish 15s ease-out;
        animation-delay: 15s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish2, FadeFloat, OpFish;
        object-fit: contain;
    }

    #bFish1 {
        position: absolute;
        right: 800px;
        top: 10px;
        width: 2000px;
        height: 30px;
        z-index: -12;
        animation: FadeIn 4s ease-out;
        animation: OpFish 15s ease-out;
        animation-delay: 15s;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatBFish1, FadeFloat, OpFish;
        object-fit: contain;
    }

    #pFish3 {
        top: 20px;
        position: absolute;
        right: -800px;
        width: 1500px;
        height: 75px;
        z-index: -11;
        animation: FadeIn 4s ease-out;
        animation: OpFish 15s ease-out;
        animation-delay: 15s;
        animation-duration: 30s ;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatPFish3, FadeFloat, OpFish;
        object-fit: contain;
    }

    #pFish2 {
        top: 30;
        position: absolute;
        right: -600px;
        width: 1500px;
        height: 80px;
        z-index: -10;
        animation: FadeIn 4s ease-out;
        animation-duration: 30s ;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 1;
        animation-name: FloatPFish2, FadeFloat;
        object-fit: contain;
    }

    #pFish1 {
        position: absolute;
        right: -630px;
        width: 1500px;
        height: 90px;
        z-index: -9;
        animation: FadeIn 4s ease-out;
        animation: OpFish 15s ease-out;
        animation-delay: 15s;
        animation-duration: 30s ;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        opacity: 0;
        animation-name: FloatPFish1, FadeFloat, OpFish;
        object-fit: contain;
    }
    
    #cFish2 {
        position: absolute;
        right: 1015px;
        width: 2000px;
        height: 50px;
        z-index: -5;
        animation: FadeIn 4s ease-out;
        animation-duration: 40s ;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-name: FloatCFish2, FadeFloat;
        object-fit: contain;
    }

    #cFish1 {
        position: absolute;
        right: 1000px;
        width: 2000px;
        height: 50px;
        z-index: -11;
        animation: FadeIn 4s ease-out;
        animation-duration: 40s ;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-name: FloatCFish1, FadeFloat;
        object-fit: contain;
    }

    #yFish5 {
        position: absolute;
        top: 20px;
        right: -560px;
        width: 2000px;
        height: 50px;
        z-index: -11;
        animation: FadeIn 4s ease-out;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-name: FloatYFish5, FadeFloat;
        object-fit: contain;
    }

    #yFish4 {
        position: absolute;
        top: 20px;
        right: -570px;
        width: 2000px;
        height: 60px;
        z-index: -10;
        animation: FadeIn 4s ease-out;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-name: FloatYFish4, FadeFloat;
        object-fit: contain;
    }

    #yFish3 {
        position: absolute;
        top: 30px;
        right: -520px;
        width: 2000px;
        height: 70px;
        z-index: -9;
        animation: FadeIn 4s ease-out;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-name: FloatYFish3, FadeFloat;
        object-fit: contain;
    }

    #yFish2 {
        position: absolute;
        top: 30px;
        right: -600px;
        width: 2000px;
        height: 70px;
        z-index: -9;
        animation: FadeIn 4s ease-out;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-name: FloatYFish2, FadeFloat;
        object-fit: contain;
    }

    #yFish1 {
        position: absolute;
        right: -600px;
        top: 10px;
        width: 2000px;
        height: 30px;
        z-index: -12;
        animation: FadeIn 4s ease-out;
        animation-duration: 35s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-name: FloatYFish1, FadeFloat;
        object-fit: contain;
    }

    #animation {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        animation: fadeIn ease 1s;
    }

    #div-pai {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
        width: 100%;
        min-height: 85vh;
    }

    #anuncio {
        display: flex;
        font-size: 40px;
        margin-left: 60px;
        animation: fadeIn ease 5s;
        color: #170263;
    }


    @keyframes OpFish {
        5%, 100%{opacity:1;}
    }

    @keyframes FloatBlowFish {
        0% { transform: translateX(5%) translateY(100%); }
        10% { transform: translateX(-5%) translateY(80%); }
        20% { transform: translateX(-15%) translateY(110%); }
        30% { transform: translateX(-25%) translateY(120%); }
        40% { transform: translateX(-35%) translateY(100%); }
        50% { transform: translateX(-45%) translateY(120%); }
        60% { transform: translateX(-55%) translateY(150%); }
        70% { transform: translateX(-65%) translateY(120%); }
        80% { transform: translateX(-75%) translateY(130%); }
        90% { transform: translateX(-85%) translateY(140%); }
        100% { transform: translateX(-90%) translateY(120%); }
    }

    @keyframes FloatBFish5 {
        0% { transform: translateX(-5%) translateY(100%); }
        10% { transform: translateX(5%) translateY(80%); }
        20% { transform: translateX(15%) translateY(110%); }
        30% { transform: translateX(25%) translateY(120%); }
        40% { transform: translateX(35%) translateY(100%); }
        50% { transform: translateX(45%) translateY(120%); }
        60% { transform: translateX(55%) translateY(150%); }
        70% { transform: translateX(65%) translateY(120%); }
        80% { transform: translateX(75%) translateY(130%); }
        90% { transform: translateX(85%) translateY(140%); }
        100% { transform: translateX(90%) translateY(120%); }
    }

    @keyframes FloatBFish4 {
        0% { transform: translateX(-5%) translateY(80%); }
        10% { transform: translateX(5%) translateY(120%); }
        20% { transform: translateX(15%) translateY(130%); }
        30% { transform: translateX(25%) translateY(100%); }
        40% { transform: translateX(35%) translateY(130%); }
        50% { transform: translateX(45%) translateY(140%); }
        60% { transform: translateX(55%) translateY(150%); }
        70% { transform: translateX(65%) translateY(130%); }
        80% { transform: translateX(75%) translateY(150%); }
        90% { transform: translateX(85%) translateY(130%); }
        100% { transform: translateX(90%) translateY(150%); }
    }

    @keyframes FloatBFish3 {
        0% { transform: translateX(-5%) translateY(150%); }
        10% { transform: translateX(5%) translateY(140%); }
        20% { transform: translateX(15%) translateY(130%); }
        30% { transform: translateX(25%) translateY(100%); }
        40% { transform: translateX(35%) translateY(130%); }
        50% { transform: translateX(45%) translateY(140%); }
        60% { transform: translateX(55%) translateY(130%); }
        70% { transform: translateX(65%) translateY(120%); }
        80% { transform: translateX(75%) translateY(130%); }
        90% { transform: translateX(85%) translateY(150%); }
        100% { transform: translateX(90%) translateY(160%); }
    }
    @keyframes FloatBFish2 {
        0% { transform: translateX(-5%) translateY(100%); }
        10% { transform: translateX(5%) translateY(110%); }
        20% { transform: translateX(15%) translateY(80%); }
        30% { transform: translateX(25%) translateY(120%); }
        40% { transform: translateX(35%) translateY(130%); }
        50% { transform: translateX(45%) translateY(150%); }
        60% { transform: translateX(55%) translateY(140%); }
        70% { transform: translateX(65%) translateY(120%); }
        80% { transform: translateX(75%) translateY(140%); }
        90% { transform: translateX(85%) translateY(160%); }
        100% { transform: translateX(90%) translateY(150%); }
    }
    @keyframes FloatBFish1 {
        0% { transform: translateX(-5%) translateY(120%); }
        10% { transform: translateX(5%) translateY(150%); }
        20% { transform: translateX(15%) translateY(130%); }
        30% { transform: translateX(25%) translateY(100%); }
        40% { transform: translateX(35%) translateY(130%); }
        50% { transform: translateX(45%) translateY(120%); }
        60% { transform: translateX(55%) translateY(140%); }
        70% { transform: translateX(65%) translateY(150%); }
        80% { transform: translateX(75%) translateY(150%); }
        90% { transform: translateX(85%) translateY(130%); }
        100% { transform: translateX(90%) translateY(150%); }
    }

    @keyframes FloatPFish3 {
        0% {transform: translateX(0%) translateY(120%) rotate(-45deg)}
        10% { transform: translateX(-5%) translateY(110%) rotate(-45deg) }
        20% { transform: translateX(-15%) translateY(120%) rotate(-45deg) }
        30% { transform: translateX(-25%) translateY(150%) rotate(-45deg)}
        40% { transform: translateX(-35%) translateY(120%) rotate(-45deg) }
        50% { transform: translateX(-45%) translateY(130%) rotate(-45deg) }
        60% { transform: translateX(-55%) translateY(110%) rotate(-45deg) }
        70% { transform: translateX(-65%) translateY(100%) rotate(-45deg) }
        80% { transform: translateX(-75%) translateY(90%) rotate(-45deg) }
        90% { transform: translateX(-85%) translateY(80%) rotate(-45deg) }
        100% { transform: translateX(-90%) translateY(100%) rotate(-45deg) }
    }

    @keyframes FloatPFish2 {
        0% {transform: translateX(0%) translateY(150%) rotate(-45deg) }
        10% { transform: translateX(-5%) translateY(120%) rotate(-45deg) }
        20% { transform: translateX(-15%) translateY(130%) rotate(-45deg) }
        30% { transform: translateX(-25%) translateY(100%) rotate(-45deg)}
        40% { transform: translateX(-35%) translateY(90%) rotate(-45deg) }
        50% { transform: translateX(-45%) translateY(110%) rotate(-45deg) }
        60% { transform: translateX(-55%) translateY(120%) rotate(-45deg) }
        70% { transform: translateX(-65%) translateY(130%) rotate(-45deg) }
        80% { transform: translateX(-75%) translateY(120%) rotate(-45deg) }
        90% { transform: translateX(-85%) translateY(130%) rotate(-45deg) }
        100% { transform: translateX(-90%) translateY(150%) rotate(-45deg) }
    }

    @keyframes FloatPFish1 {
        0% {transform: translateX(0%) translateY(120%) rotate(-45deg) }
        10% { transform: translateX(-5%) translateY(140%) rotate(-45deg) }
        20% { transform: translateX(-15%) translateY(130%) rotate(-45deg) }
        30% { transform: translateX(-25%) translateY(120%) rotate(-45deg)}
        40% { transform: translateX(-35%) translateY(150%) rotate(-45deg) }
        50% { transform: translateX(-45%) translateY(120%) rotate(-45deg) }
        60% { transform: translateX(-55%) translateY(100%) rotate(-45deg) }
        70% { transform: translateX(-65%) translateY(120%) rotate(-45deg) }
        80% { transform: translateX(-75%) translateY(110%) rotate(-45deg) }
        90% { transform: translateX(-85%) translateY(80%) rotate(-45deg) }
        100% { transform: translateX(-90%) translateY(100%) rotate(-45deg) }
    }

    @keyframes FloatCFish2 {
        0% { transform: translateX(0%) translateY(120%); }
        10% { transform: translateX(5%) translateY(140%); }
        20% { transform: translateX(15%) translateY(130%); }
        30% { transform: translateX(25%) translateY(120%); }
        40% { transform: translateX(35%) translateY(150%); }
        50% { transform: translateX(45%) translateY(120%); }
        60% { transform: translateX(55%) translateY(100%); }
        70% { transform: translateX(65%) translateY(120%); }
        80% { transform: translateX(75%) translateY(110%); }
        90% { transform: translateX(85%) translateY(80%); }
        100% { transform: translateX(90%) translateY(100%); }
    }

    @keyframes FloatCFish1 {
        0% { transform: translateX(0%) translateY(100%); }
        10% { transform: translateX(5%) translateY(80%); }
        20% { transform: translateX(15%) translateY(110%); }
        30% { transform: translateX(25%) translateY(120%); }
        40% { transform: translateX(35%) translateY(100%); }
        50% { transform: translateX(45%) translateY(120%); }
        60% { transform: translateX(55%) translateY(150%); }
        70% { transform: translateX(65%) translateY(120%); }
        80% { transform: translateX(75%) translateY(130%); }
        90% { transform: translateX(85%) translateY(140%); }
        100% { transform: translateX(90%) translateY(120%); }
    }

    @keyframes FloatYFish5 {
        0% { transform: translateX(5%) translateY(100%); }
        10% { transform: translateX(-5%) translateY(80%); }
        20% { transform: translateX(-15%) translateY(110%); }
        30% { transform: translateX(-25%) translateY(120%); }
        40% { transform: translateX(-35%) translateY(100%); }
        50% { transform: translateX(-45%) translateY(120%); }
        60% { transform: translateX(-55%) translateY(150%); }
        70% { transform: translateX(-65%) translateY(120%); }
        80% { transform: translateX(-75%) translateY(130%); }
        90% { transform: translateX(-85%) translateY(140%); }
        100% { transform: translateX(-90%) translateY(120%); }
    }

    @keyframes FloatYFish4 {
        0% { transform: translateX(5%) translateY(80%); }
        10% { transform: translateX(-5%) translateY(120%); }
        20% { transform: translateX(-15%) translateY(130%); }
        30% { transform: translateX(-25%) translateY(100%); }
        40% { transform: translateX(-35%) translateY(130%); }
        50% { transform: translateX(-45%) translateY(140%); }
        60% { transform: translateX(-55%) translateY(150%); }
        70% { transform: translateX(-65%) translateY(130%); }
        80% { transform: translateX(-75%) translateY(150%); }
        90% { transform: translateX(-85%) translateY(130%); }
        100% { transform: translateX(-90%) translateY(150%); }
    }

    @keyframes FloatYFish3 {
        0% { transform: translateX(5%) translateY(150%); }
        10% { transform: translateX(-5%) translateY(140%); }
        20% { transform: translateX(-15%) translateY(130%); }
        30% { transform: translateX(-25%) translateY(100%); }
        40% { transform: translateX(-35%) translateY(130%); }
        50% { transform: translateX(-45%) translateY(140%); }
        60% { transform: translateX(-55%) translateY(130%); }
        70% { transform: translateX(-65%) translateY(120%); }
        80% { transform: translateX(-75%) translateY(130%); }
        90% { transform: translateX(-85%) translateY(150%); }
        100% { transform: translateX(-90%) translateY(160%); }
    }
    @keyframes FloatYFish2 {
        0% { transform: translateX(5%) translateY(100%); }
        10% { transform: translateX(-5%) translateY(110%); }
        20% { transform: translateX(-15%) translateY(80%); }
        30% { transform: translateX(-25%) translateY(120%); }
        40% { transform: translateX(-35%) translateY(130%); }
        50% { transform: translateX(-45%) translateY(150%); }
        60% { transform: translateX(-55%) translateY(140%); }
        70% { transform: translateX(-65%) translateY(120%); }
        80% { transform: translateX(-75%) translateY(140%); }
        90% { transform: translateX(-85%) translateY(160%); }
        100% { transform: translateX(-90%) translateY(150%); }
    }
    @keyframes FloatYFish1 {
        0% { transform: translateX(5%) translateY(120%); }
        10% { transform: translateX(-5%) translateY(150%); }
        20% { transform: translateX(-15%) translateY(130%); }
        30% { transform: translateX(-25%) translateY(100%); }
        40% { transform: translateX(-35%) translateY(130%); }
        50% { transform: translateX(-45%) translateY(120%); }
        60% { transform: translateX(-55%) translateY(140%); }
        70% { transform: translateX(-65%) translateY(150%); }
        80% { transform: translateX(-75%) translateY(150%); }
        90% { transform: translateX(-85%) translateY(130%); }
        100% { transform: translateX(-90%) translateY(150%); }
    }

    @keyframes Float3 {
        from { transform: translateX(0%) translateZ(0); }
        to { transform: translateX(40%) translateZ(0); }
    }

    @keyframes FadeFloat {
        0%, 100% { opacity: 0; }
        5%, 90% { opacity: 1; }
    }

    @keyframes bounce {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }

    @keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
  }
}


</style>