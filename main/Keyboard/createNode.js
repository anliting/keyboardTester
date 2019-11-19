import doe from '../../lib/doe/main/doe.mjs'
function createNode(keyNodes){
    return doe.div({className:'keyboard'},
        n=>{
            doe(n.style,{
                width:'calc(16px * 22.5 * var(--scale))'
            })
        },
        doe.div({className:'table'},
            doe.div(
                doe.div({className:'function'},
                    doe.div({className:'escape'},
                        n=>{doe(n.style,{display:'inline-block'})},
                        keyNodes.Escape[0],
                    ),
                    doe.div({className:'function'},
                        n=>{doe(n.style,{display:'inline-block'})},
                        keyNodes.F1[0],
                        keyNodes.F2[0],
                        keyNodes.F3[0],
                        keyNodes.F4[0],
                        keyNodes.F5[0],
                        keyNodes.F6[0],
                        keyNodes.F7[0],
                        keyNodes.F8[0],
                        keyNodes.F9[0],
                        keyNodes.F10[0],
                        keyNodes.F11[0],
                        keyNodes.F12[0],
                    ),
                ),
                doe.div({className:'legacy'},
                    doe.div({className:'legacy'},
                        keyNodes.Print[0],
                        keyNodes.ScrollLock[0],
                        keyNodes.Pause[0],
                    ),
                ),
                doe.div(),
            ),
            doe.div(
                doe.div({className:'main'},
                    doe.div({className:'row'},
                        keyNodes['`'][0],
                        keyNodes[1][0],
                        keyNodes[2][0],
                        keyNodes[3][0],
                        keyNodes[4][0],
                        keyNodes[5][0],
                        keyNodes[6][0],
                        keyNodes[7][0],
                        keyNodes[8][0],
                        keyNodes[9][0],
                        keyNodes[0][0],
                        keyNodes['-'][0],
                        keyNodes['='][0],
                        keyNodes.Backspace[0],
                    ),
                    doe.div({className:'row'},
                        keyNodes.Tab[0],
                        keyNodes.q[0],
                        keyNodes.w[0],
                        keyNodes.e[0],
                        keyNodes.r[0],
                        keyNodes.t[0],
                        keyNodes.y[0],
                        keyNodes.u[0],
                        keyNodes.i[0],
                        keyNodes.o[0],
                        keyNodes.p[0],
                        keyNodes['['][0],
                        keyNodes[']'][0],
                        keyNodes['\\'][0],
                    ),
                    doe.div({className:'row'},
                        keyNodes.CapsLock[0],
                        keyNodes.a[0],
                        keyNodes.s[0],
                        keyNodes.d[0],
                        keyNodes.f[0],
                        keyNodes.g[0],
                        keyNodes.h[0],
                        keyNodes.j[0],
                        keyNodes.k[0],
                        keyNodes.l[0],
                        keyNodes[';'][0],
                        keyNodes['\''][0],
                        keyNodes.Enter[0],
                    ),
                    doe.div({className:'row'},
                        keyNodes.Shift[1],
                        keyNodes.z[0],
                        keyNodes.x[0],
                        keyNodes.c[0],
                        keyNodes.v[0],
                        keyNodes.b[0],
                        keyNodes.n[0],
                        keyNodes.m[0],
                        keyNodes[','][0],
                        keyNodes['.'][0],
                        keyNodes['/'][0],
                        keyNodes.Shift[2],
                    ),
                    doe.div({className:'row'},
                        keyNodes.Control[1],
                        keyNodes.Meta[1],
                        keyNodes.Alt[1],
                        keyNodes[' '][0],
                        keyNodes.Alt[2],
                        keyNodes.Meta[2],
                        keyNodes.ContextMenu[0],
                        keyNodes.Control[2],
                    ),
                ),
                doe.div({className:'navigation'},
                    doe.div({className:'row'},
                        keyNodes.Insert[0],
                        keyNodes.Home[0],
                        keyNodes.PageUp[0],
                    ),
                    doe.div({className:'row'},
                        keyNodes.Delete[0],
                        keyNodes.End[0],
                        keyNodes.PageDown[0],
                    ),
                    doe.div({className:'row'},
                    ),
                    doe.div({className:'row'},
                        keyNodes.ArrowUp[0],
                    ),
                    doe.div({className:'row'},
                        keyNodes.ArrowLeft[0],
                        keyNodes.ArrowDown[0],
                        keyNodes.ArrowRight[0],
                    ),
                ),
                doe.div({className:'numpad'},
                    doe.div(
                        keyNodes.NumLock[0],
                        keyNodes['/'][3],
                        keyNodes['*'][3],
                        keyNodes['-'][3],
                        keyNodes['7'][3],
                        keyNodes['8'][3],
                        keyNodes['9'][3],
                        keyNodes['+'][3],
                        keyNodes['4'][3],
                        keyNodes['5'][3],
                        keyNodes['6'][3],
                        keyNodes['1'][3],
                        keyNodes['2'][3],
                        keyNodes['3'][3],
                        keyNodes.Enter[3],
                        keyNodes['0'][3],
                        keyNodes['.'][3],
                    ),
                ),
            ),
        ),
    )
}
export default createNode
