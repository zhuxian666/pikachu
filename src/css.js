const string = ` 
.skin * {
    box-sizing: border-box;
    margin    : 0;
    padding   : 0;
}
.skin *::before,
.skin *::after {
    box-sizing: border-box;
}
.skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
}
.nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -12px;
    z-index: 10;
}
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    0% {
        transform: rotate(5deg);
    }

    66% {
        transform: rotate(-5deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
.nose:hover {
    transform-origin:center bottom ;
    animation: wave 300ms infinite linear;
}
.eye {
    border       : 2px solid #000;
    position     : absolute;
    width        : 64px;
    height       : 64px;
    top          : 100px;
    left         : 50%;
    margin-left  : -32px;
    background   : #2e2e2e;
    border-radius: 50%;
    z-index      : 1;
}
.eye::before {
    content      : '';
    border       : 3px solid white;
    width        : 25px;
    height       : 25px;
    display      : block;
    background   : #fff;
    border-radius: 50%;
    position     : relative;
    left         : 10px;
    top          : 2px;
}
.eye.left {
    transform: translateX(-100px);
}
.eye.right {
    transform: translateX(100px);
}
.mouth {
    width      : 200px;
    height     : 200px;
    position   : absolute;
    left       : 50%;
    top        : 170px;
    margin-left: -100px;
    position   : relative;
}
.mouth .up {
    position: relative;
}
.mouth .up .lip {
    border    : 5px solid black;
    height    : 30px;
    width     : 100px;
    position  : relative;
    position  : absolute;
    left      : 50%;
    z-index   : 1;
    background: #ffe600;
}
.mouth .up .lip.left {
    margin-left  : -50%;
    transform    : rotate(-15deg);
    border-bottom-left-radius: 50px 30px;}

.mouth .up .lip.right {
    transform    : rotate(15deg);
    border-bottom-right-radius: 50px 30px;}

.mouth .up .lip::before {
    content   : '';
    display   : block;
    width     : 7px;
    height    : 30px;
    position  : absolute;
    bottom    : 0;
    background: #ffe600;
}
.mouth .up .lip::after {
    content   : '';
    display   : block;
    width     : 102px;
    height    : 7px;
    position  : absolute;
    top       : -6px;
    background: #ffe600;
}
.mouth .up .lip.left::before {
    right: -6px;
}
.mouth .up .lip.left::after {
    right: -6px;
}
.mouth .up .lip.right::before {

    left: -6px;
}
.mouth .up .lip.right::after {
    left: -5px;
}
.mouth .down {
    width   : 100%;
    position: absolute;
    height  : 160px;
    top     : 5px;
    overflow: hidden;
}
.mouth .down .yuan1 {
    border       : 3px solid black;
    width        : 150px;
    height       : 1000px;
    position     : absolute;
    bottom       : 0;
    left         : 50%;
    margin-left  : -75px;
    border-radius: 75px/300px;
    background   : #9b000a;
    overflow     : hidden;
}
.mouth .down .yuan1 .yuan2 {
    width        : 140px;
    height       : 140px;
    position     : absolute;
    bottom       : -20px;
    left         : 50%;
    margin-left  : -70px;
    border-radius: 140px;
    background   : #ff485f;
}
.face {
    border     : 3px solid black;
    position   : absolute;
    width      : 88px;
    height     : 88px;
    left       : 50%;
    margin-left: -44px;
    top        : 210px;
    z-index    : 3;
}
.face.left {
    transform    : translateX(-180px);
    border-radius: 88px;
    background   : #ff0000;
}
.face.right {
    transform    : translateX(180px);
    border-radius: 88px;
    background   : #ff0000;
}
`
export default string;