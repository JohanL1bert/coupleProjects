import '../assets/sounds/LetItSnow.mp3';

export class AudioTree {
    isPlay: boolean;
    audio: HTMLAudioElement;
    constructor() {
        this.isPlay = false;
        this.audio = new Audio('./assets/LetItSnow.mp3');
    }

    public createAudio() {
        const music = this.audio;

        if (this.isPlay) {
            this.isPlay = false;
            music.pause();
            music.currentTime = 0;
        } else {
            this.isPlay = true;
            music.play();
        }
    }

    public changeBackground(event: any) {
        const backgroundImg = event.target.closest('.christmas__background__item');
        if (!backgroundImg) return;
        const imgUrl = window.getComputedStyle(backgroundImg).getPropertyValue('background-image');

        const mainTreeBackground = document.querySelector('.tree__background') as HTMLElement;
        mainTreeBackground.style.backgroundImage = `${imgUrl}`;
    }

    private changeTree(event: any) {
        const backgroundImg = event.target.closest('.christmas__tree__item');
        if (!backgroundImg) return;
        const imgUrl = window.getComputedStyle(backgroundImg).getPropertyValue('background-image');

        const treeBackground = document.querySelector('.tree__form') as HTMLElement;
        treeBackground.style.backgroundImage = `${imgUrl}`;
    }

    private garlandsInclusions() {
        console.log('123');
    }

    private fallingSnow() {
        const setTime = setInterval(this.createSnow, 100);
        setTimeout(() => {
            clearInterval(setTime);
        }, 3000);
    }

    private createSnow() {
        const treeBackground = document.querySelector('.snowflakes') as HTMLElement;
        const flakes = document.querySelector('.flake') as HTMLElement;
        const treeBgContainer = document.querySelector('.tree__background') as HTMLElement;
        const widthContainer = treeBgContainer.offsetWidth;
        const widthSnowFlakes = treeBackground.offsetWidth;
        if (widthSnowFlakes > widthContainer) {
            return;
        } else {
            const clone: any = flakes.cloneNode(true);
            const random = Math.random();
            console.log(random);
            clone.style.paddingLeft = random * 10 + 'px';
            clone.style.animationDuration = Math.random() * 5 + 3 + 's';
            clone.style.opacity = Math.random() * 1;

            treeBackground.append(clone);
        }
    }

    private listenerState() {
        const audioBtn = document.querySelector('.music__setting');
        const snowBtn = document.querySelector('.snow__setting');
        const familyBackground = document.querySelector('.christmas__background__list');
        const treeFamilyBackground = document.querySelector('.christmas__tree__list');
        const colorButton = document.querySelectorAll('.garlands__item');
        audioBtn?.addEventListener('click', this.createAudio.bind(this));
        familyBackground?.addEventListener('click', this.changeBackground.bind(this));
        treeFamilyBackground?.addEventListener('click', this.changeTree.bind(this));
        snowBtn?.addEventListener('click', this.fallingSnow.bind(this));

        colorButton.forEach((item) => item.addEventListener('click', this.garlandsInclusions.bind(this)));
    }

    public cycleToys() {
        this.listenerState();
    }
}
