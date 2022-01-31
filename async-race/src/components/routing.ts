import { TArrayClassName } from '../components/interfaces/interface';
import hexRgb, { RgbaObject } from 'hex-rgb';
import { StateManager } from './state';

class HTMLManager {
    private mainBody: HTMLElement;
    state: StateManager;
    constructor(state: StateManager) {
        this.mainBody = document.getElementById('root') as HTMLElement;
        this.state = state;
    }

    public createHTMLElement(element: string, classElement: string[]) {
        const createdElement = document.createElement(`${element}`);
        createdElement.classList.add(...classElement);
        return createdElement;
    }

    public createHTMLElementArray(elementName: string[], classList: string[][]) {
        return elementName.map((className, index) => {
            const element = document.createElement(`${className}`);
            const getClassName = classList[index];
            if (getClassName !== undefined) {
                element.classList.add(...getClassName);
            }
            return element;
        });
    }

    public appendToChild(elementToAppend: HTMLElement, appendChildElement: HTMLElement) {
        elementToAppend.insertAdjacentElement('beforeend', appendChildElement);
    }

    public AddTextContentToHTMLElement(element: HTMLElement, text: string) {
        element.textContent = text;
    }

    public AddTextContentMultiple(element: Element[], text: Array<string>) {
        element.forEach((node, i) => {
            node.textContent = text[i];
        });
    }

    public getHTMLElement(elementName: string) {
        const getElement = document.querySelector(`.${elementName}`) as HTMLElement;
        if (getElement === null) {
            throw new Error(`${elementName}, null is element`);
        }
        return getElement;
    }

    public appendToNeighbor(firstElement: HTMLElement, secondELement: HTMLElement) {
        firstElement.insertAdjacentElement('afterend', secondELement);
    }

    public getAllHTMLElement(elementName: string) {
        const getElement = document.querySelectorAll(`.${elementName}`);
        if (getElement === null) {
            throw new Error(`${elementName}, null is element`);
        }
        return getElement;
    }

    public removeNodes(nodes: HTMLElement[]) {
        nodes.map((el) => el.remove());
    }

    public removeChildNode(node: HTMLElement) {
        node.replaceChildren();
    }

    public cloneNodeCustom(node: HTMLElement, times: number) {
        const arr: Node[] = [];
        const createArrayOfCount = Array.from(Array(times).keys());
        createArrayOfCount.forEach((_) => {
            const element = node.cloneNode(true);
            arr.push(element);
        });
        return arr;
    }

    public createSVG(color: string) {
        return `<?xml version="1.0" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
         "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="100.000000pt" height="100.000000pt" viewBox="0 0 1280.000000 869.000000"
         preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
        </metadata>
        <g transform="translate(0.000000,869.000000) scale(0.100000,-0.100000)"
        fill="${color}" stroke="black"
        stroke-width="15%">
        <path d="M6491 7949 c-85 -10 -218 -48 -307 -89 -161 -73 -324 -223 -430 -396
        -93 -153 -123 -207 -143 -254 -13 -30 -34 -77 -48 -105 -26 -54 -132 -321
        -156 -395 -37 -114 -130 -418 -187 -610 -23 -80 -55 -185 -70 -235 -56 -176
        -79 -252 -130 -425 -28 -96 -60 -202 -70 -235 -33 -104 -60 -282 -60 -393 0
        -119 -14 -224 -35 -263 -13 -23 -12 -30 6 -65 12 -21 31 -49 43 -62 21 -23 21
        -24 2 -38 -23 -16 -76 -19 -76 -4 0 20 -123 90 -203 115 -63 20 -101 25 -179
        25 -75 0 -100 3 -104 14 -3 8 -21 17 -40 21 -19 3 -49 18 -67 34 -17 15 -54
        43 -82 63 -67 48 -119 104 -111 117 4 6 20 11 35 11 37 0 128 32 202 71 53 29
        119 96 119 122 0 5 14 39 30 77 26 60 30 79 30 162 -1 135 -27 230 -90 329
        -29 44 -30 49 -30 171 0 144 -13 202 -61 261 l-33 40 22 38 c12 21 22 45 22
        54 0 9 -20 38 -45 64 -45 48 -119 93 -207 126 -27 10 -50 26 -53 36 -8 24
        -118 174 -137 185 -7 5 -31 11 -53 14 -33 4 -41 10 -49 35 -27 89 -45 123 -86
        163 -25 24 -58 51 -74 59 -28 15 -39 14 -134 -3 -24 -5 -49 1 -92 20 -42 19
        -84 29 -142 33 -118 8 -191 -13 -294 -82 -122 -83 -181 -146 -239 -254 -40
        -75 -58 -99 -92 -120 -23 -14 -44 -35 -47 -46 -3 -11 -24 -33 -45 -49 -45 -32
        -86 -113 -78 -153 2 -14 -6 -55 -19 -91 -32 -91 -31 -147 5 -237 26 -63 28
        -79 20 -110 -6 -21 -8 -48 -5 -61 5 -20 1 -26 -21 -36 -16 -6 -82 -37 -149
        -69 -108 -52 -128 -66 -195 -136 -102 -107 -148 -192 -219 -404 -35 -108 -47
        -132 -81 -164 -61 -57 -53 -77 41 -94 115 -21 270 8 371 71 36 22 58 28 101
        28 72 0 136 20 200 63 59 39 144 127 170 174 12 24 26 34 52 39 20 3 39 10 42
        15 8 13 78 11 97 -3 17 -14 77 -138 77 -162 0 -7 -11 -21 -25 -30 -30 -19 -32
        -53 -10 -117 15 -41 14 -53 -5 -164 -17 -94 -20 -140 -15 -216 6 -91 4 -101
        -29 -200 -68 -206 -79 -257 -72 -335 9 -99 56 -214 141 -344 42 -64 75 -143
        75 -179 0 -35 32 -107 62 -141 30 -33 36 -35 86 -33 35 1 74 11 107 27 59 30
        95 33 95 11 0 -22 34 -87 65 -124 24 -27 25 -31 8 -31 -10 0 -49 9 -88 20
        -104 30 -262 51 -432 59 l-152 6 -53 55 c-69 72 -158 131 -211 141 -107 20
        -195 -50 -213 -173 -9 -60 -39 -106 -82 -124 -51 -21 -67 -38 -81 -87 -7 -23
        -16 -48 -20 -56 -7 -14 -103 -57 -181 -82 -68 -22 -314 -171 -405 -246 -38
        -32 -225 -215 -305 -299 -59 -63 -180 -215 -180 -227 0 -3 -18 -32 -40 -65
        -21 -33 -49 -79 -61 -103 -12 -24 -37 -66 -54 -94 -18 -27 -36 -61 -40 -75 -4
        -14 -14 -32 -22 -41 -19 -23 -63 -147 -63 -182 0 -16 -5 -37 -10 -47 -6 -10
        -12 -45 -14 -77 -2 -32 -7 -66 -11 -76 -4 -9 -5 -32 -2 -50 3 -17 3 -63 -2
        -100 -13 -117 3 -260 39 -367 18 -52 41 -126 50 -165 38 -147 63 -195 134
        -261 59 -55 93 -78 199 -132 36 -18 282 -68 402 -81 258 -29 480 -32 2055 -27
        883 2 1661 1 1730 -4 69 -5 220 -10 335 -11 326 -3 1205 10 1350 20 l130 9 22
        -26 21 -27 224 0 c198 0 227 2 258 19 25 13 79 22 188 32 84 7 203 25 265 39
        189 42 210 46 267 54 30 5 82 16 115 25 33 9 96 24 140 32 98 19 169 52 215
        99 18 19 37 35 41 35 5 0 52 -44 106 -97 73 -73 115 -106 164 -130 137 -66
        119 -65 926 -69 430 -3 793 0 880 5 250 17 354 59 563 227 95 76 142 129 197
        224 96 166 144 302 173 499 17 112 19 164 14 320 -9 292 -37 478 -94 631 -40
        105 -173 331 -251 424 -116 140 -284 292 -436 395 -50 35 -99 71 -108 81 -15
        17 -15 20 0 44 16 24 16 28 0 52 -21 32 -53 45 -186 79 -184 47 -300 65 -479
        76 -278 16 -280 16 -291 47 -12 34 -32 71 -80 146 -21 32 -41 70 -44 85 -3 14
        -19 44 -35 66 -107 145 -121 173 -169 321 -27 82 -54 176 -61 209 -19 94 -55
        200 -126 366 -95 222 -94 217 -56 274 17 25 28 53 25 60 -2 8 4 27 14 42 11
        15 22 35 26 44 3 9 19 19 36 22 28 6 46 37 21 37 -5 0 -10 6 -10 14 0 7 -7 19
        -15 26 -13 11 -12 17 7 52 18 32 20 42 10 58 -7 11 -12 29 -12 39 0 11 -5 23
        -11 27 -7 4 -9 22 -4 50 4 31 3 44 -6 44 -8 0 -9 10 -5 31 5 25 0 38 -30 74
        -21 26 -31 46 -24 50 18 11 11 31 -16 44 -14 6 -24 17 -21 24 2 6 0 20 -5 30
        -6 12 -5 23 3 33 9 12 9 20 -1 38 -6 13 -9 33 -6 44 7 20 -11 46 -35 54 -9 3
        -7 12 5 30 14 21 28 27 99 37 45 6 102 11 127 11 25 0 59 7 75 16 17 8 53 18
        80 21 97 11 128 47 125 149 -1 33 -1 87 0 122 0 38 -5 73 -14 90 -8 15 -20 41
        -26 59 -11 29 -58 78 -184 191 -29 25 -57 42 -72 42 -14 0 -34 5 -45 10 -24
        13 -79 -13 -79 -38 0 -11 -23 -28 -68 -49 -50 -24 -98 -62 -189 -148 -68 -63
        -131 -115 -141 -115 -10 0 -33 -11 -52 -24 -25 -17 -41 -21 -60 -16 -59 17
        -99 -24 -104 -107 -4 -74 -9 -83 -46 -83 -26 0 -31 6 -60 78 -18 42 -52 123
        -76 180 -24 57 -44 105 -44 108 0 3 -22 58 -49 122 -27 64 -79 188 -115 274
        -36 87 -66 160 -66 163 0 2 -13 34 -30 70 -16 36 -30 68 -30 71 0 11 -114 263
        -149 329 -109 205 -171 294 -268 386 -160 151 -301 215 -440 199 -74 -8 -206
        -51 -229 -75 -23 -23 -35 -19 -124 41 -93 62 -184 106 -280 134 -64 19 -253
        51 -287 49 -10 -1 -51 -5 -92 -10z m307 -149 c46 -11 109 -32 140 -46 76 -35
        202 -114 202 -125 0 -5 -24 -44 -54 -87 -88 -126 -136 -233 -206 -462 -47
        -151 -62 -212 -114 -440 -47 -211 -67 -305 -76 -360 -4 -30 -25 -136 -45 -235
        -42 -208 -54 -274 -95 -520 -16 -99 -36 -211 -44 -249 -8 -38 -18 -153 -22
        -255 -5 -150 -10 -195 -25 -230 -23 -52 -24 -120 -5 -185 l14 -46 -36 -15
        c-31 -13 -117 -76 -132 -96 -3 -4 -52 -14 -109 -23 -150 -24 -221 -60 -221
        -112 0 -15 -12 -29 -34 -42 -19 -11 -42 -34 -51 -51 -9 -18 -23 -31 -34 -31
        -26 0 -201 -46 -250 -66 l-41 -16 -35 33 c-26 26 -33 39 -28 60 3 16 -2 37
        -12 52 -17 26 -80 57 -116 57 -32 0 -141 58 -181 97 -22 21 -46 60 -59 95 -20
        54 -20 60 -5 76 15 17 13 21 -27 59 -23 22 -50 43 -60 46 -15 6 -17 19 -12
        138 9 198 25 261 294 1139 32 107 78 260 100 340 47 164 150 482 188 580 32
        82 141 325 163 365 118 206 140 237 237 332 102 100 149 131 263 177 192 77
        348 90 528 46z m904 -153 c58 -28 90 -52 159 -123 47 -49 100 -108 117 -132
        26 -36 172 -322 172 -337 0 -3 14 -33 30 -67 17 -35 69 -157 115 -273 46 -115
        112 -275 145 -355 120 -284 181 -441 178 -452 -2 -6 -58 70 -124 169 -65 100
        -163 248 -217 330 -147 223 -377 549 -512 726 -66 87 -134 178 -151 203 -18
        25 -84 101 -148 169 -64 68 -116 128 -116 133 0 5 8 12 18 15 9 3 35 13 57 22
        67 26 187 14 277 -28z m-380 -174 c85 -81 252 -287 350 -433 40 -58 97 -139
        127 -180 31 -41 64 -86 73 -100 9 -14 34 -50 56 -80 170 -242 304 -435 336
        -485 21 -33 45 -69 52 -80 40 -58 185 -276 209 -314 l27 -45 -31 -25 c-38 -32
        -39 -45 -5 -68 22 -14 25 -22 20 -52 -3 -19 0 -41 5 -48 6 -7 9 -19 6 -27 -4
        -10 -36 1 -129 47 -142 69 -246 95 -423 104 l-110 6 -63 54 c-79 70 -117 77
        -195 39 -76 -37 -127 -90 -127 -133 0 -21 6 -36 15 -39 9 -4 15 -19 15 -41 0
        -39 -10 -50 -145 -163 -42 -36 -143 -139 -224 -230 -171 -193 -238 -279 -324
        -419 -36 -57 -78 -102 -92 -98 -5 2 -19 30 -30 63 -18 54 -24 61 -67 81 -33
        16 -49 30 -54 47 -9 36 5 306 20 401 7 44 31 172 54 285 54 269 128 657 142
        745 7 39 18 93 26 120 8 28 24 95 34 150 43 220 99 426 170 624 28 78 59 157
        69 174 48 84 67 115 95 150 16 20 34 37 39 37 5 0 41 -30 79 -67z m1179 -3343
        c72 -47 104 -122 135 -312 17 -101 17 -113 1 -195 -9 -48 -18 -146 -21 -218
        -10 -252 -42 -409 -89 -439 -22 -14 -99 24 -237 117 -104 69 -128 87 -305 222
        -242 184 -625 554 -625 604 0 11 7 13 105 31 33 7 141 31 240 55 99 24 205 46
        235 50 30 3 78 12 105 20 28 7 91 21 141 29 51 9 123 26 160 40 91 31 103 31
        155 -4z m753 -411 c41 -90 94 -200 119 -245 52 -91 86 -201 89 -292 l3 -62
        -107 -49 c-127 -59 -238 -125 -332 -198 -71 -56 -93 -63 -103 -37 -8 22 15
        183 43 294 14 52 35 145 49 205 13 61 35 146 49 190 14 44 39 139 56 210 41
        171 40 169 51 158 5 -5 42 -83 83 -174z m-2609 -341 c17 0 54 3 83 7 49 7 52
        6 52 -14 0 -51 49 -91 110 -91 39 0 84 -44 94 -91 3 -18 17 -46 30 -63 13 -17
        27 -42 31 -55 4 -13 29 -74 56 -135 27 -61 54 -140 60 -175 12 -77 44 -143
        115 -238 59 -79 70 -87 147 -110 89 -25 135 -59 182 -131 44 -68 71 -97 136
        -145 32 -23 39 -36 54 -99 9 -41 31 -95 49 -123 51 -80 80 -146 70 -160 -118
        -162 -226 -290 -256 -306 -16 -9 -20 -5 -30 23 -37 108 -145 268 -271 404 -52
        55 -78 74 -166 116 l-104 50 27 21 c24 20 27 30 29 89 2 37 8 73 15 80 7 7 12
        20 12 30 0 12 16 26 45 40 93 46 95 127 3 224 -79 83 -182 142 -348 197 -261
        87 -484 137 -609 137 -46 0 -48 1 -102 67 -30 38 -94 109 -143 160 -78 81 -97
        113 -65 113 8 0 48 18 244 110 118 56 252 83 360 73 33 -4 74 -6 90 -5z
        m-1187 -560 c67 -20 130 -100 90 -112 -7 -2 -53 -11 -103 -20 -49 -9 -143 -35
        -207 -56 -116 -40 -168 -49 -168 -30 0 24 45 89 93 133 103 96 184 119 295 85z
        m5000 -673 c40 -43 42 -88 8 -161 -24 -52 -43 -68 -65 -55 -10 6 -40 187 -41
        245 0 30 59 13 98 -29z m-773 -157 c50 -58 165 -242 165 -265 0 -8 -5 -24 -12
        -36 -6 -12 -14 -35 -17 -50 -5 -25 -18 -33 -116 -73 -61 -25 -137 -55 -170
        -66 -33 -11 -74 -26 -92 -34 -66 -30 -113 -9 -113 49 0 47 35 156 75 239 50
        100 193 288 220 288 8 0 34 -24 60 -52z m1128 -137 c93 -87 65 -131 -82 -131
        -65 0 -84 4 -112 23 -19 12 -35 33 -37 45 -4 28 39 103 74 131 l27 21 46 -26
        c25 -15 63 -43 84 -63z m-8070 -3 c42 -22 -6 -88 -65 -88 -65 0 -90 48 -48 90
        17 17 28 19 58 14 20 -4 45 -11 55 -16z m-382 -29 c20 -39 15 -87 -13 -115
        -22 -23 -30 -25 -54 -17 -16 5 -36 22 -44 36 -13 24 -13 30 0 53 13 24 72 64
        92 64 4 0 12 -10 19 -21z m625 -90 c19 -21 18 -21 -5 -40 -47 -38 -96 -12 -66
        35 21 31 45 33 71 5z m144 -188 c0 -30 -14 -41 -54 -41 -38 0 -77 14 -66 23 5
        4 87 24 108 26 6 0 12 -3 12 -8z m-915 -70 c-27 -53 -57 -68 -151 -76 -102 -8
        -123 2 -102 47 18 38 44 46 130 41 45 -3 84 0 95 6 35 20 45 14 28 -18z m8613
        -12 c97 -5 180 -13 185 -18 5 -5 8 -47 6 -93 -3 -69 -10 -94 -37 -150 -34 -71
        -69 -104 -99 -94 -31 10 -315 324 -311 344 3 16 53 33 71 24 5 -2 88 -8 185
        -13z m-1008 -190 c-31 -71 -94 -163 -138 -202 -18 -17 -25 -17 -57 -6 -66 24
        -123 97 -113 144 4 21 120 88 210 122 37 14 73 32 79 40 11 12 15 11 32 -5 19
        -19 18 -20 -13 -93z m-1715 15 c28 -80 28 -80 -117 -100 -34 -4 -48 -3 -48 6
        0 28 127 168 139 154 5 -5 16 -32 26 -60z m-5040 4 c51 -25 55 -38 23 -69 -50
        -47 -90 -45 -152 7 -48 41 -69 71 -60 85 10 17 138 2 189 -23z m-825 -56 c0
        -14 -70 -83 -92 -91 -29 -11 -79 -1 -85 17 -9 21 21 39 77 47 27 4 57 13 67
        21 21 15 33 18 33 6z m8283 -117 c100 -111 101 -135 2 -135 -56 0 -98 34 -119
        97 -26 76 -19 123 18 123 14 0 48 -30 99 -85z m-8003 25 c15 -36 8 -47 -38
        -56 -29 -6 -32 -4 -32 17 0 40 11 68 29 72 22 5 27 2 41 -33z m7634 -57 c20
        -102 19 -121 -7 -147 -25 -25 -70 -35 -81 -18 -3 5 6 39 20 78 42 118 58 138
        68 87z"/>
        </g>
        </svg>
        
        `;
    }

    public hexToRgbColor(value: string) {
        const rgbColor: RgbaObject = hexRgb(value);
        return rgbColor;
    }

    private createHeader() {
        const arrayOfTags: Array<string> = ['header', 'div', 'div', 'nav', 'ul', 'li', 'a', 'li', 'a'];
        const arrayOfClassName: TArrayClassName = [
            ['header'],
            ['container'],
            ['header__inner'],
            ['navigation'],
            ['navigation__menu'],
            ['navigation__garage'],
            ['navigation__garage__link'],
            ['navigation__winners'],
            ['navigation__winners__link'],
        ];

        const [
            headerElement,
            containerElement,
            headerInnerElement,
            navElement,
            ulElement,
            liElement,
            aElement,
            liElementWinners,
            aElementWinners,
        ] = this.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        //textContent
        this.AddTextContentToHTMLElement(aElement, 'Go to Garage');
        aElement.setAttribute('href', '#');

        this.AddTextContentToHTMLElement(aElementWinners, 'Go to Winners');

        aElementWinners.setAttribute('href', '#');

        //Append Section
        this.appendToChild(this.mainBody, headerElement);
        this.appendToChild(headerElement, containerElement);
        this.appendToChild(containerElement, headerInnerElement);
        this.appendToChild(headerInnerElement, navElement);

        //Navigation
        this.appendToChild(navElement, ulElement);
        this.appendToChild(ulElement, liElement);
        this.appendToChild(liElement, aElement);
        //
        this.appendToChild(ulElement, liElementWinners);
        this.appendToChild(liElementWinners, aElementWinners);
    }

    private createFooter() {
        const arrayofTags: Array<string> = ['foooter', 'div', 'div', 'div', 'p', 'p', 'a'];
        const arrayOfClassName: TArrayClassName = [
            ['footer'],
            ['container'],
            ['main__footer__inner'],
            ['footer__creator'],
            ['copyright'],
            ['year__create'],
            ['github__link'],
        ];

        const [
            footerElement,
            containerElement,
            footerInnerElement,
            footerCreator,
            pCopyrightElement,
            pYearelement,
            aGithubElement,
        ] = this.createHTMLElementArray(arrayofTags, arrayOfClassName);

        const foooterLogoElement = this.createHTMLElement('div', ['footer__logo']);
        //Append Section
        this.appendToChild(this.mainBody, footerElement);
        this.appendToChild(footerElement, containerElement);
        this.appendToChild(containerElement, footerInnerElement);
        this.appendToChild(footerInnerElement, footerCreator);
        this.appendToChild(footerCreator, pCopyrightElement);
        this.appendToChild(footerCreator, pYearelement);
        this.appendToChild(footerCreator, aGithubElement);

        this.appendToChild(footerInnerElement, foooterLogoElement);
    }

    public createHeaderFooter() {
        this.createHeader();
        this.createFooter();
    }
}

export class UpdateManager extends HTMLManager {
    constructor(state: StateManager) {
        super(state);
    }

    public getColorFromInput(template: string) {
        const inputColor = this.getHTMLElement(`${template}`) as HTMLInputElement;
        const color = inputColor.value;
        return color;
    }

    public getInputFromInput(template: string) {
        const inputText = this.getHTMLElement(`${template}`) as HTMLInputElement;
        const text = inputText.value;
        return text;
    }

    public changePlaceHolder(template: HTMLInputElement, contentPlaceHolder: string) {
        template.placeholder = contentPlaceHolder;
    }

    public changeValueForm(template: HTMLInputElement, contentValue: string) {
        template.value = contentValue;
    }

    public closestAttribute() {
        const getClosest = document.querySelector('.car');
        return getClosest;
    }

    public randomColor() {
        const maxColorNum = 256;
        const randomColor = Math.floor(Math.random() * (maxColorNum * maxColorNum * maxColorNum))
            .toString(16)
            .padStart(6, '0');
        return '#' + randomColor;
    }

    public randomInterval() {
        return Math.floor(Math.random() * (50 - 0 + 1) + 0);
    }
}
