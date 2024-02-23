//# д 

beijing: 北京
chongqing: 重庆
hong kong: 香港
nanjing: 南京
shanghai: 上海
wuhan: 武汉
xi-an: 西安

b: bottom
l: left
r: right
t: top

// ROOT

## HEX ##

ALPHA - NANJING
BETA - SHANGHAI
CHARLIE - CHONGQING
DELTA - WUHAN
ECHO - BEIJING
FOXTROT - XI'AN

## END HEX ##

A - xian, wuhan, shanghai;
À - xian, wuhan, hong-kong;
Á - xian, hong-hong, shanghai;
Ã - shanghai, hong-kong;
Â - hong-kong, wuhan;
B - chongqing, beijing, wuhan;
C - shanghai, chongqing, nanjing;
D - beijing, xi-an, shanghai;
E - hong-kong, nanjing, beijing;
È - hong-kong, shanghai, nanjing;
É - hong-kong, beijing, shanghai;
Ê - shanghai, nanjing, hong-kong;
F - wuhan, chongqin, wuhan;
G - nanjing, xian, wuhan, beijing;
H - wuhan, nanjing, xian, beijing;
I - xian, shanghai, wuhan, beijing;
J - beijing, shanghai, wuhan, nanjing;
K - wuhan, nanjing, beijing, shanghai;
L - shanghai, beijing, nanjing, wuhan;
M - xian, chongqing, wuhan;
N - wuhan, xian, nanjing;
O - shanghai, beijing;
Ò - shanghai, nanjing, wuhan;
Ó - shanghai, nanjing, xian;
Ô - shanghai, xian;
P - wuhan, nanjing, shanghai;
Q - beijing, wuhan, nanjing, shanghai;
R - beijing, wuhan, nanjing, xian;
S - beijing, nanjing, wuhan, shanghai;
T - shanghai, nanjing, wuhan, beijing;
U - shanghai, xian, nanjing, beijing;
Ù - shanghai, xian;
Ú - shanghai, wuhan;
Û - shanghai, nanjing;
V - shanghai, nanjing, wuhan, beijing;
W - wuhan, beijing;
X - xian, beijing;
Y - hong-kong, chongqing;
Z - hong-kong, wuhan;
[ SPACEBAR ] - wuhan, shanghai;

- beijing: chongqing -> xian -> wuhan -> nanjing -> hong-kong -> shanghai -> beijing
- chongqing: beijing -> shanghai -> xian -> wuhan -> nanjing -> chongqing -> hong-kong
- hong-kong: shanghai -> wuhan -> nanjing -> chongqing -> xian -> hong-kong -> beijing
- nanjing: wuhan -> nanjing -> xian -> chongqing -> hong-kong -> beijing -> shanghai
- shanghai: shanghai -> wuhan -> xian -> hong-kong -> nanjing -> beijing -> chongqing
- wuhan: xian -> hong-kong -> chongqing -> wuhan -> nanjing -> shanghai -> beijing
- xi-an: xian -> wuhan -> shanghai -> nanjing -> beijing -> hong-kong -> chongqing

- bottom: left right bottom top
- left: right top
- right: bottom left
- top: right left

// END OF ROOT

beijing (bl-tr)
- beijing: bl-tr
- chongqing: tr-bl
- hong-kong: rt
- nanjing: bl
- shanghai: br
- wuhan: rl-tb
- xi-an: open range available

chongqing (bt-rl)
- beijing: lt-br
- chongqing: br-tl
- hong-kong: br-tl
- nanjing: tl-br
- shanghai: bl-tr
- wuhan: tl-br
- xi-an: open range bottom left - top right

hong kong (bt-lr)
- beijing: rl (bl-tr)
- chongqing: bt-rl
- hong-kong: lt-rt
- nanjing: rt-bl
- shanghai: lb-rt
- wuhan: bt-rl
- xi-an: open range lt-bl

nanjing (lt)
- beijing: lr-tb
- chongqing: lr-bt
- hong-kong: bt-lr
- nanjing: tl-br
- shanghai: lb-tr
- wuhan: lr-tb
- xi-an: tb-rl

shanghai (tr)
- beijing: lr-tb
- chongqing: tl-rb
- hong-kong: bt-rl
- nanjing: rt-bl
- shanghai: lt-rb
- wuhan: bt
- xi-an: rb-lt

wuhan (bt)
- beijing: lt-br
- chongqing: rb-tl
- hong-kong: lr-tb
- nanjing: lr-tb
- shanghai: lb-tr
- wuhan: tr-lb
- xi-an: r[left]t-bl

xi-an (rt-lb)
- beijing: tr-lb
- chongqing: tb
- hong-kong: rt
- nanjing: br
- shanghai: rt-lb
- wuhan: lt-br
- xi-an: tr-tr
