# Converts every Simplified display string in the content into Traditional (phrase-aware, via opencc) -> trad.js.
# Called by build.mjs. Usage: python3 make-trad.py in.json out.js    (in.json = list of strings)
# Same conversion fixes as the chapter generators (names, 著, 裡, 台階 ...).
import json, sys, opencc
cc = opencc.OpenCC('s2t')
def trad(s):
    t = cc.convert(s)
    for a, b in (('峯', '峰'), ('爲', '為'), ('喫', '吃'), ('着', '著'), ('裏', '裡'), ('臺階', '台階')):
        t = t.replace(a, b)
    return t
strings = json.load(open(sys.argv[1], encoding='utf-8'))
out = {}
for s in strings:
    t = trad(s)
    if t != s: out[s] = t
open(sys.argv[2], 'w', encoding='utf-8').write('window.TRAD = ' + json.dumps(out, ensure_ascii=False) + ';\n')
print('trad.js: %d strings converted' % len(out))
