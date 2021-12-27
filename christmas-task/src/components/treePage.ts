import '../assets/sounds/LetItSnow.mp3';
import hexRgb from 'hex-rgb';

export class AudioTree {
    isPlay: boolean;
    audio: HTMLAudioElement;
    isSnow: boolean;
    isColor: string;
    isCheckedColor: boolean;
    isNumberRemove: object;
    constructor() {
        this.isPlay = false;
        this.audio = new Audio('./assets/LetItSnow.mp3');
        this.isSnow = false;
        this.isColor = 'rgba(0, 0, 0, 0)';
        this.isCheckedColor = false;
        this.isNumberRemove = {};
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

        const treeBackground = document.querySelector('.tree__form') as HTMLImageElement;
        treeBackground.src = `${imgUrl.slice(5, imgUrl.length - 2)}`;
    }

    private colorGarlands(data: any) {
        if (data === 'rgba(0, 0, 0, 0)') {
            const colorArr = ['ff2400', 'e81d1d', 'e8b71d', 'e3e81d', '1de840', '1ddde8', '2b1de8'];
            const allGarlandas = document.querySelectorAll('.garlands__color > li');
            allGarlandas.forEach((el: any) => {
                const randomNumber = Math.floor(Math.random() * (7 - 0) + 0);
                const hex: any = hexRgb(`${'#' + colorArr[randomNumber]}`);
                const rgbaHex =
                    'rgb(' + hex.red.toString() + ', ' + hex.green.toString() + ', ' + hex.blue.toString() + ')';
                el.style.backgroundColor = rgbaHex;
            });
        } else {
            const allGarlandas = document.querySelectorAll('.garlands__color > li');
            allGarlandas.forEach((el: any) => (el.style.backgroundColor = `${data}`));
        }
    }

    private removeGarlands() {
        const containerGarlands = document.querySelector('.garlands__container') as HTMLElement;
        containerGarlands.replaceChildren();
    }

    //Слишком зависимо от массива и парных чисел
    //Позиция гирлянд
    private positionGarlands(data: HTMLUListElement) {
        const lenNum = data.childNodes.length;
        let i = lenNum;
        let loop = 0;
        i = i / 2;
        let iterator = lenNum;
        iterator = iterator / 2;

        for (let j = iterator; j > 0; j--) {
            const y = i ** 2;
            i--;
            const element = data.children[loop] as HTMLElement;
            element.style.transform = `translateX(${-y}px`;
            loop++;
        }

        for (let c = 0; c < iterator; c++) {
            i++;
            const y = i ** 2;
            const element = data.children[loop] as HTMLElement;
            element.style.transform = `translateX(${-y}px`;
            loop++;
        }
    }

    private createGarlands() {
        const container = document.querySelector('.garlands__container') as HTMLElement;
        const arrayOfGarlands = [];
        const arrayValueLi = [4, 6, 8, 10, 12, 14, 16, 18];

        for (let i = 0; i < 8; i++) {
            const value = document.createElement('ul');
            value.classList.add('garlands__color');
            for (let j = 0; j < arrayValueLi[i]; j++) {
                const valueLi = document.createElement('li');
                value.appendChild(valueLi);
            }

            this.positionGarlands(value);
            arrayOfGarlands.push(value);
        }

        arrayOfGarlands.map((el) => container.appendChild(el));
    }

    private offGarlands(event: Event) {
        const checked = (<HTMLInputElement>event.target).checked;
        if (!checked) {
            this.removeGarlands();
        } else {
            this.createGarlands();
            const color = this.isColor;
            this.colorGarlands(color);
        }
    }

    private garlandsInclusions(event: Event) {
        const checkButton = document.querySelector('.toggle-button') as HTMLInputElement;
        const target = event.target as Element;
        const colorBtn = target.closest('.garlands__item');
        if (!colorBtn) return;
        if (colorBtn?.classList.contains('multicolor')) {
            this.removeGarlands();
            this.createGarlands();
            const color = window.getComputedStyle(colorBtn).getPropertyValue('background-color');
            this.colorGarlands(color);
            this.isColor = color;
            checkButton.checked = true;
            this.isCheckedColor = true;
        }
        if (colorBtn?.classList.contains('red-color')) {
            this.removeGarlands();
            this.createGarlands();
            const color = window.getComputedStyle(colorBtn).getPropertyValue('background-color');
            this.colorGarlands(color);
            this.isColor = color;
            checkButton.checked = true;
            this.isCheckedColor = true;
        }
        if (colorBtn?.classList.contains('blue-color')) {
            this.removeGarlands();
            this.createGarlands();
            const color = window.getComputedStyle(colorBtn).getPropertyValue('background-color');
            this.colorGarlands(color);
            this.isColor = color;
            checkButton.checked = true;
            this.isCheckedColor = true;
        }
        if (colorBtn?.classList.contains('yellow-color')) {
            this.removeGarlands();
            const color = window.getComputedStyle(colorBtn).getPropertyValue('background-color');
            this.createGarlands();
            this.colorGarlands(color);
            this.isColor = color;
            checkButton.checked = true;
            this.isCheckedColor = true;
        }
        if (colorBtn?.classList.contains('green-color')) {
            this.removeGarlands();
            this.createGarlands();
            const color = window.getComputedStyle(colorBtn).getPropertyValue('background-color');
            this.colorGarlands(color);
            this.isColor = 'green';
            checkButton.checked = true;
            this.isCheckedColor = true;
        }
    }

    //Доделать больше снега, придумать что-то с блоком кнопки
    private fallingSnow() {
        const snowBtn = document.querySelector('.snow__setting') as HTMLButtonElement;
        snowBtn.disabled = true;
        setTimeout(() => (snowBtn.disabled = false), 1100);

        const snowContainer = document.querySelector('.snowflakes') as HTMLElement;
        const createElementI = document.createElement('i');
        createElementI.classList.add('wi', 'wi-snowflake-cold', 'flake');
        snowContainer.appendChild(createElementI);

        if (this.isSnow) {
            const snowFlakes = document.querySelectorAll('.snowflakes > i');
            snowFlakes.forEach((item) => item.remove());
            this.isSnow = false;
            snowContainer.classList.remove('snowflakes__active');
        } else {
            const setTime = setInterval(this.createSnow, 10);
            setTimeout(() => {
                clearInterval(setTime);
            }, 1000);
            snowContainer.classList.add('snowflakes__active');
            this.isSnow = true;
        }
    }

    private createSnow() {
        const treeBackground = document.querySelector('.snowflakes') as HTMLElement;
        const treeBgContainer = document.querySelector('.tree__background') as HTMLElement;
        const flakes = document.querySelector('.flake') as HTMLElement;
        const widthContainer = treeBgContainer.offsetWidth;
        const widthSnowFlakes = treeBackground.offsetWidth;
        if (widthSnowFlakes >= widthContainer) {
            return;
        } else {
            const clone: any = flakes.cloneNode(true);
            const cloneSecond: any = flakes.cloneNode(true);
            const random = Math.random();
            clone.style.paddingLeft = random * 5 + 'px';
            clone.style.animationDuration = Math.random() * 5 + 3 + 's';
            clone.style.opacity = Math.random() * 1;

            cloneSecond.style.paddingTop = Math.random() * 5 + 'px';
            cloneSecond.style.animationDuration = Math.random() * 5 + 3 + 's';
            cloneSecond.style.opacity = Math.random() * 1;

            treeBackground.append(clone);
            treeBackground.append(cloneSecond);
        }
    }

    public removeCountToys() {
        const allSpan = document.querySelectorAll('.img__count');
    }

    public dragStart(event: any) {
        const dataSet = event.currentTarget.getAttribute('data-number');
        event.dataTransfer.setData('dragn__img', dataSet);
        this.isNumberRemove = dataSet;
    }

    getAttribute(arg0: string): string {
        throw new Error('Method not implemented.');
    }

    public dragOver(event: Event) {
        /* console.log('DragOver'); */
        event.preventDefault();
    }

    //Переписать высчитывать кастомно
    public dragDrop(event: any) {
        const pageX = event.clientX;
        const pageY = event.clientY;
        const dragData = event.dataTransfer.getData('dragn__img');
        const dragedItem: any = document.querySelector(`[data-number="${dragData}"]`);
        const element = document.querySelector('area');
        element?.appendChild(dragedItem);
        dragedItem.style.left = pageX - 25 + 'px';
        dragedItem.style.top = pageY - 95 + 'px';
        dragedItem.style.position = 'absolute';
        dragedItem.style.margin = 0 + 'px';
        this.removeCountToys();
    }

    public eventDragDrop() {
        const dragDrop = document.querySelectorAll('.dragn__img');
        const treeMap = document.querySelector('area') as HTMLAreaElement;
        dragDrop.forEach((el) => {
            el.addEventListener('dragstart', this.dragStart.bind(this));
            /*   el.addEventListener('dragend', this.dragEnd),
                el.addEventListener('drag', this.dragElements); */
        });

        /* treeMap.addEventListener('dragenter', this.dragEnter);
        treeMap.addEventListener('dragleave', this.dragLeave); */
        treeMap.addEventListener('dragover', this.dragOver.bind(this));
        treeMap.addEventListener('drop', this.dragDrop.bind(this));
    }

    public toysChangeObserver() {
        this.eventDragDrop();
    }

    private listenerState() {
        const audioBtn = document.querySelector('.music__setting') as HTMLElement;
        const snowBtn = document.querySelector('.snow__setting') as HTMLButtonElement;
        const familyBackground = document.querySelector('.christmas__background__list') as HTMLElement;
        const treeFamilyBackground = document.querySelector('.christmas__tree__list') as HTMLElement;
        const colorButton: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.garlands__item');
        const toggleColorButton = document.querySelector('.toggle-button');
        const toysContainer = document.querySelector('.tree__toys__container') as HTMLElement;
        audioBtn.addEventListener('click', this.createAudio.bind(this));
        familyBackground?.addEventListener('click', this.changeBackground.bind(this));
        treeFamilyBackground?.addEventListener('click', this.changeTree.bind(this));
        this.eventDragDrop();

        if (snowBtn.disabled) {
            return;
        } else {
            snowBtn.addEventListener('click', this.fallingSnow.bind(this));
        }

        colorButton.forEach((item) => item.addEventListener('click', this.garlandsInclusions.bind(this)));
        toggleColorButton?.addEventListener('change', this.offGarlands.bind(this));

        const config = { attributes: true, childList: true, subtree: true };
        const obsever = new MutationObserver(this.toysChangeObserver.bind(this));
        obsever.observe(toysContainer, config);
    }

    public cycleToys() {
        this.listenerState();
    }
}
