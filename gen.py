# Uso: python gen.py [libro.xlsx] [url_firebase]   ->  crea data.js (público) y print-data.js (solo para imprimir, NO subir a GitHub)
import sys, json, hashlib
from openpyxl import load_workbook
xl = sys.argv[1] if len(sys.argv) > 1 else 'Agencia_El_Rodal_Libro_Maestro.xlsx'
fb = sys.argv[2].rstrip('/') if len(sys.argv) > 2 else ''
H = lambda t: hashlib.sha256(('RODAL' + t).encode()).hexdigest()
wb = load_workbook(xl, data_only=True)
cf = {r[0]: r[1] for r in wb['Config'].iter_rows(min_row=5, max_row=22, values_only=True)}
ag, pr = [], {}
for r in wb['Agentes'].iter_rows(min_row=5, values_only=True):
    if not r[0] or len(str(r[0])) != 3 or r[2] != 'Sí': continue
    ag.append(dict(id=r[0], nombre=r[1], rango=r[7], capsula=int(r[5]), h=H(f'{r[0]}-A-{int(r[4])}')))
    pr[r[0]] = int(r[4])
sa = [dict(n=i + 1, nombre=r[1], cat=r[3], msg=r[6]) for i, r in enumerate(wb['Salas'].iter_rows(min_row=5, max_row=8, values_only=True))]
opc = {r[0]: [dict(t=r[5 + 2 * j], c=int(r[6 + 2 * j])) for j in range(5)] for r in wb['Opciones y códigos'].iter_rows(min_row=5, values_only=True) if r[0]}
ac = {}
for r in wb['Acertijos'].iter_rows(min_row=5, values_only=True):
    if not r[0]: continue
    a, s = r[0].split('-')
    ac[r[0]] = dict(tipo=r[5], enun=r[7], pista=r[11], opc=opc[r[0]], ok=H(f'{a}-{s}-{int(r[9])}'))
fin = {r[0]: H(f"{r[0]}-F-{r[7]}") for r in wb['Códigos finales'].iter_rows(min_row=5, values_only=True) if r[0] in pr}
ca = wb['Caso']
sus = [dict(n=r[1], q=r[2], d=r[3]) for r in ca.iter_rows(min_row=26, max_row=30, values_only=True)]
data = dict(config=dict(nombre=cf['Nombre de la web'], caso=cf['Título del caso'], url=cf['URL base A (GitHub Pages)'].rstrip('/'), firebase=fb,
    minutos=int(cf['Duración del temporizador (min)']), segTimbre=int(cf['Segundos de timbre al terminar alguien']), segAnuncio=int(cf['Segundos del anuncio a pantalla completa']),
    volMusica=cf['Volumen de la música de fondo (%)'] / 100, consigna=cf['Modo de consigna (nº 1-9)'], anios=int(cf['Años de casados']),
    musica=cf['Ruta de la música'], timbre=cf['Ruta del timbre']),
    agentes=ag, salas=sa, acertijos=ac, final=fin, historia=ca['A20'].value, desenlace=ca['A33'].value, sospechosos=sus)
open('data.js', 'w', encoding='utf-8').write('// Generado por gen.py desde el Excel. Para cambiar datos: edita el Excel y vuelve a ejecutar gen.py.\nconst DATA = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')
open('print-data.js', 'w', encoding='utf-8').write('// SOLO PARA IMPRIMIR. No subir a GitHub.\nconst PRINT = ' + json.dumps(dict(acceso=pr), ensure_ascii=False) + ';\n')
print('OK:', len(ag), 'agentes,', len(ac), 'acertijos')
