var strs = [
    "_include.gencolors-~-_func\n_gencolors()\n_do\n_v\ncol=\"0123456789abcdef\",\nres=\"\";\nfor(i=0;i<6;i++)\nres+=col[sFloor(sRand()*col.sLen)];\nreturn \"#\"+res;\n_end",
    "_include.fade-~-_func\n_fade(c,a,b,d)\n_do\n_v\ne = gMin(a,b)===a?true:false,\nloooo=setLoop(()=>{\nif(e+_true) a+=.01;\nelse a-=.01;\nc.css.opacity=a;\nif(e+_true&&a>=b) clearLoop(loooo)\nelse if(e+_false&&a<=b) clearLoop(loooo);\n},d);\n_end",
    "print(-~-console.log(",
    "cWarn(-~-console.warn(",
    "cError(-~-console.error(",
    "dom.-~-document.",
    "say(-~-alert(",
    "domElement-~-documentElement",
    ".K-~-000",
    ".M-~-000000",
    ".B-~-000000000",
    ".T-~-000000000000",
    "setLoop(-~-setInterval(",
    "_(\"#-~-document.getElementById(\"",
    "_(\".-~-document.getElementsByClassName(\"",
    "_(\"--~-document.getElementsByTagName(\"",
    "_(\"_-~-document.querySelector(\"",
    "gId(-~-getElementById(",
    "gClass(-~-getElementsByClassName(",
    "gTag(-~-getElementsByTagName(",
    "gQry(-~-querySelector(",
    "w.width-~-innerWidth",
    "w.height-~-innerHeight",
    "gCtx(-~-getContext(",
    "fStyle-~-fillStyle",
    "fRect(-~-fillRect(",
    ".html-~-.innerHTML",
    ".css-~-.style",
    "textAlign-~-textAlign",
    "bgColor-~-backgroundColor",
    "setWait(-~-setTimeout(",
    ".fEach(-~-.forEach(",
    "+_-~-===",
    "-_-~-!==",
    "_do-~-{",
    "_end-~-}",
    ".change(-~-.replace(",
    "_func-~-function",
    "_v-~-var",
    "sFloor(-~-Math.floor(",
    "sRand(-~-Math.random(",
    ".sLen-~-.length",
    "clearLoop(-~-clearInterval(",
    "gMax(-~-Math.max(",
    "gMin(-~-Math.min(",
    "setListener(-~-addEventListener(",
    "clearListener(-~-removeEventListener("
];

function occurrences(a, b) {
    if (b.length <= 0) return a.length + 1;
    var posi = 0,
        num = 0,
        leng = b.length;
    while (true) {
        posi = a.indexOf(b, posi);
        if (posi >= 0) {
            num++;
            posi += leng;
        } else break;
    }
    return num;
}

function _(a) {
    a = ("onload=" + a);
    strs.forEach(str => {
        a = rep(a, str.split("-~-"));
    });
    if (debug === true) alert(a);
    eval(a);
}

function rep(a, b) {
    var tim = occurrences(a, b[0]);
    for (i = -tim; i < 0; i++) {
        a = a.replace(b[0], b[1]);
    }
    return a;
}
var debug = false;