import{dom}from 'https://gitcdn.link/cdn/anliting/simple.js/55124630741399dd0fcbee2f0396642a428cdd24/src/simple.static.js'
function Keyboard(){
    this._keyNodes={
        'Escape':{
            0:dom.div({className:'key escape'},'ESC'),
        },
        'F1':{
            0:dom.div({className:'key f1'},'F1'),
        },
        'F2':{
            0:dom.div({className:'key f2'},'F2'),
        },
        'F3':{
            0:dom.div({className:'key f3'},'F3'),
        },
        'F4':{
            0:dom.div({className:'key f4'},'F4'),
        },
        'F5':{
            0:dom.div({className:'key f5'},'F5'),
        },
        'F6':{
            0:dom.div({className:'key f6'},'F6'),
        },
        'F7':{
            0:dom.div({className:'key f7'},'F7'),
        },
        'F8':{
            0:dom.div({className:'key f8'},'F8'),
        },
        'F9':{
            0:dom.div({className:'key f9'},'F9'),
        },
        'F10':{
            0:dom.div({className:'key f10'},'F10'),
        },
        'F11':{
            0:dom.div({className:'key f11'},'F11'),
        },
        'F12':{
            0:dom.div({className:'key f12'},'F12'),
        },
        'Print':{
            0:dom.div({className:'key'},'PS'),
        },
        'ScrollLock':{
            0:dom.div({className:'key'},'SL'),
        },
        'Pause':{
            0:dom.div({className:'key'},'PB'),
        },
        '`':{
            0:dom.div({className:'key backQuote'},'`')
        },
        1:{
            0:dom.div({className:'key num1'},'1'),
        },
        2:{
            0:dom.div({className:'key num2'},'2'),
        },
        3:{
            0:dom.div({className:'key num3'},'3'),
        },
        4:{
            0:dom.div({className:'key num4'},'4'),
        },
        5:{
            0:dom.div({className:'key num5'},'5'),
        },
        6:{
            0:dom.div({className:'key num6'},'6'),
        },
        7:{
            0:dom.div({className:'key num7'},'7'),
        },
        8:{
            0:dom.div({className:'key num8'},'8'),
        },
        9:{
            0:dom.div({className:'key num9'},'9'),
        },
        0:{
            0:dom.div({className:'key num0'},'0'),
        },
        '-':{
            0:dom.div({className:'key minus'},'-'),
        },
        '=':{
            0:dom.div({className:'key equal'},'='),
        },
        Backspace:{
            0:dom.div({className:'key backspace'},'←'),
        },
        Tab:{
            0:dom.div({className:'key tab'},'TAB'),
        },
        q:{
            0:dom.div({className:'key q'},'Q'),
        },
        w:{
            0:dom.div({className:'key w'},'W'),
        },
        e:{
            0:dom.div({className:'key e'},'E'),
        },
        r:{
            0:dom.div({className:'key r'},'R'),
        },
        t:{
            0:dom.div({className:'key t'},'T'),
        },
        y:{
            0:dom.div({className:'key y'},'Y'),
        },
        u:{
            0:dom.div({className:'key u'},'U'),
        },
        i:{
            0:dom.div({className:'key i'},'I'),
        },
        o:{
            0:dom.div({className:'key o'},'O'),
        },
        p:{
            0:dom.div({className:'key p'},'P'),
        },
        '[':{
            0:dom.div({className:'key openSquareBracket'},'['),
        },
        ']':{
            0:dom.div({className:'key closedSquareBracket'},']'),
        },
        '\\':{
            0:dom.div({className:'key backslash'},'\\'),
        },
    }
    this.node=dom.div({className:'keyboard'},
        dom.div({className:'table'},
            dom.div(
                dom.div(
                    dom.div({className:'escape'},
                        n=>{dom(n.style,{display:'inline-block'})},
                        this._keyNodes['Escape'][0],
                    ),
                    dom.div({className:'function'},
                        n=>{dom(n.style,{display:'inline-block'})},
                        this._keyNodes['F1'][0],
                        this._keyNodes['F2'][0],
                        this._keyNodes['F3'][0],
                        this._keyNodes['F4'][0],
                        this._keyNodes['F5'][0],
                        this._keyNodes['F6'][0],
                        this._keyNodes['F7'][0],
                        this._keyNodes['F8'][0],
                        this._keyNodes['F9'][0],
                        this._keyNodes['F10'][0],
                        this._keyNodes['F11'][0],
                        this._keyNodes['F12'][0],
                    ),
                ),
                dom.div(
                    dom.div({className:'legacy'},
                        this._keyNodes['Print'][0],
                        this._keyNodes['ScrollLock'][0],
                        this._keyNodes['Pause'][0],
                    ),
                ),
                dom.div(
                ),
            ),
            dom.div(
                dom.div(
                    dom.div({className:'row'},
                        this._keyNodes['`'][0],
                        this._keyNodes[1][0],
                        this._keyNodes[2][0],
                        this._keyNodes[3][0],
                        this._keyNodes[4][0],
                        this._keyNodes[5][0],
                        this._keyNodes[6][0],
                        this._keyNodes[7][0],
                        this._keyNodes[8][0],
                        this._keyNodes[9][0],
                        this._keyNodes[0][0],
                        this._keyNodes['-'][0],
                        this._keyNodes['='][0],
                        this._keyNodes.Backspace[0],
                    ),
                    dom.div({className:'row'},
                        this._keyNodes.Tab[0],
                        this._keyNodes.q[0],
                        this._keyNodes.w[0],
                        this._keyNodes.e[0],
                        this._keyNodes.r[0],
                        this._keyNodes.t[0],
                        this._keyNodes.y[0],
                        this._keyNodes.u[0],
                        this._keyNodes.i[0],
                        this._keyNodes.o[0],
                        this._keyNodes.p[0],
                        this._keyNodes['['][0],
                        this._keyNodes[']'][0],
                        this._keyNodes['\\'][0],
                    ),
                ),
                dom.div(
                    dom.div({className:'navigation'},
                    ),
                ),
                dom.div(
                    dom.div({className:'numeric'},
                    ),
                ),
            ),
        ),
    )
}
Keyboard.prototype._key=function(){
    let now=new Date
    /*if(this._lastKey)
        console.log(now-this._lastKey)*/
    this._lastKey=now
}
Keyboard.prototype.keydown=function(e){
    this._key()
    if(this._keyNodes[e.key]&&this._keyNodes[e.key][e.location])
        this._keyNodes[e.key][e.location].classList.add('keydown')
    else{
        console.log(e.key,e.location)
    }
}
Keyboard.prototype.keyup=function(e){
    this._key()
    if(this._keyNodes[e.key]&&this._keyNodes[e.key][e.location])
        this._keyNodes[e.key][e.location].classList.remove('keydown')
}
Keyboard.style=`
    .keyboard{
        --scale:2;
        overflow:auto;
        width:calc(422px * var(--scale));
        background-color:#ddd;
        font-size:calc(8px * var(--scale));
    }
    .keyboard>.table{
        display:table;
        margin:calc(8px * var(--scale));
    }
    .keyboard>.table>*{
        display:table-row;
    }
    .keyboard>.table>*>*{
        display:table-cell;
    }
    .keyboard>.table>*>:nth-child(2){
        padding-left:calc(8px * var(--scale));
    }
    .keyboard>.table>:nth-child(1)>*{
        height:calc(16px * var(--scale));
    }
    .keyboard>.table>:nth-child(2)>*{
        padding-top:calc(8px * var(--scale));
        height:calc(88px * var(--scale));
    }
    .keyboard>.table>*>*>.row{
        height:calc(18px * var(--scale));
    }
    .keyboard .key{
        display:inline-block;
        border-radius:1px;
        width:calc(16px * var(--scale));
        height:calc(16px * var(--scale));
        background-color:#fff;
        font-family:monospace;
        text-align:center;
    }
    .keyboard .key.keydown{
        background-color:#000;
        color:#fff;
    }
    .keyboard .key+.key{
        margin-left:calc(2px * var(--scale));
    }
    .keyboard .key.f1{
        margin-left:calc(20px * var(--scale));
    }
    .keyboard .key.f5{
        margin-left:calc(10px * var(--scale));
    }
    .keyboard .key.f9{
        margin-left:calc(10px * var(--scale));
    }
    .keyboard .key.backspace{
        width:calc(32px * var(--scale));
    }
    .keyboard .key.tab{
        width:calc(24px * var(--scale));
    }
    .keyboard .key.backslash{
        width:calc(24px * var(--scale));
    }
`
export default Keyboard