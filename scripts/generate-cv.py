from pathlib import Path
import json
import subprocess
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT

ROOT = Path(__file__).resolve().parent.parent
experience = json.loads(subprocess.check_output(
    ["node", "--input-type=module", "-e",
     "import { experience } from './src/data/profile.js'; process.stdout.write(JSON.stringify(experience));"],
    cwd=ROOT, text=True, encoding="utf-8",
))
OUT = ROOT / 'public' / 'cv'
OUT.mkdir(parents=True, exist_ok=True)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCV', fontName='Helvetica-Bold', fontSize=25, leading=29, textColor=colors.HexColor('#14253b'), spaceAfter=5))
styles.add(ParagraphStyle(name='RoleCV', fontName='Helvetica', fontSize=12, leading=16, textColor=colors.HexColor('#426182'), spaceAfter=10))
styles.add(ParagraphStyle(name='BodyCV', fontName='Helvetica', fontSize=9, leading=13, spaceAfter=6, textColor=colors.HexColor('#263546')))
styles.add(ParagraphStyle(name='SectionCV', fontName='Helvetica-Bold', fontSize=10, leading=14, spaceBefore=13, spaceAfter=7, textColor=colors.HexColor('#274d76')))
styles.add(ParagraphStyle(name='TitleCV', fontName='Helvetica-Bold', fontSize=9.5, leading=13, spaceAfter=3))
styles.add(ParagraphStyle(name='MetaCV', fontName='Helvetica', fontSize=8, leading=11, textColor=colors.HexColor('#59697b'), spaceAfter=4))

def para(text, style='BodyCV'):
    return Paragraph(text, styles[style])

def footer(canvas, doc):
    canvas.setStrokeColor(colors.HexColor('#d8dfe7'))
    canvas.line(42, 35, 553, 35)
    canvas.setFont('Helvetica', 7)
    canvas.setFillColor(colors.HexColor('#68788a'))
    canvas.drawString(42, 23, 'Iván Gómez | Full-stack Developer')
    canvas.drawRightString(553, 23, str(doc.page))

data = {
 'es': {
  'role':'Desarrollador Full-stack | Remoto / Híbrido',
  'summary':'Desarrollador full-stack con experiencia en aplicaciones web, herramientas empresariales, automatización e integraciones en tiempo real. Trabajo con React, Next.js y Node.js, conectando interfaces, APIs y datos. Colaboración directa con clientes y experiencia previa en soporte técnico y operaciones.',
  'headings':['PERFIL','TECNOLOGÍAS','EXPERIENCIA','PROYECTOS Y COLABORACIONES','FORMACIÓN','CERTIFICACIONES E IDIOMAS'],
  'projects':[
   ('Native Sockets','Integración de feeds WebSocket/MQTT/GraphQL, normalización de eventos y mercados, cálculo de márgenes en workers y detección de oportunidades de arbitraje en fútbol en vivo. Código privado.'),
   ('WINBET','Comparador de cuotas, catálogo de promociones, cuentas de usuario y suscripciones Stripe para una comunidad de entre 400 y 500 usuarios. Next.js y MongoDB.'),
   ('Nasim Group','Barra Stock y Beach Referral: inventario, cierres de turno, gestión de ventas y reportes.'),
   ('Grupo Xcaret / ÓOL Wellness','Experiencia web de eventos con entradas, pagos Stripe, códigos QR y pases Wallet.'),
   ('AsereBank','Proyecto de wallets y operaciones P2P, transferencias internas y retiros con idempotencia. Next.js, Sequelize e integraciones blockchain.'),
   ('Honey Whale','Community management; experiencia complementaria en comunicación digital.')],
  'education':['apx | Desarrollador Full Stack | Jul 2023 - Ene 2025','Coderhouse | Front end React | Ene 2022 - Jun 2022'],
  'certs':'apx: Software Developer FullStack (2025), Nivel 1 (2022), Nivel 2 (2023). Coderhouse: React (2022), JavaScript (2022), Desarrollo web.',
  'languages':'Español nativo. Inglés B2 declarado en perfil; EF SET 42/100, B1 certificado en 2024.'
 },
 'en': {
  'role':'Full-stack Developer | Remote / Hybrid',
  'summary':'Full-stack developer with experience in web applications, business tools, automation and real-time integrations. I work with React, Next.js and Node.js to connect interfaces, APIs and data. Direct client collaboration and a background in technical support and operations.',
  'headings':['PROFILE','TECHNOLOGIES','EXPERIENCE','PROJECTS AND COLLABORATIONS','EDUCATION','CERTIFICATIONS AND LANGUAGES'],
  'projects':[
   ('Native Sockets','WebSocket/MQTT/GraphQL feeds, event and market normalization, margin calculations in workers and live football arbitrage detection. Private source code.'),
   ('WINBET','Odds comparison, promotions catalogue, user accounts and Stripe subscriptions for a community of roughly 400–500 users. Next.js and MongoDB.'),
   ('Nasim Group','Barra Stock and Beach Referral: inventory, end-of-shift workflows, sales management and reports.'),
   ('Grupo Xcaret / ÓOL Wellness','Event web experience with tickets, Stripe payments, QR codes and Wallet passes.'),
   ('AsereBank','Wallet and P2P project with internal transfers and idempotent withdrawals. Next.js, Sequelize and blockchain integrations.'),
   ('Honey Whale','Community management; additional experience in digital communication.')],
  'education':['apx | Full Stack Development | Jul 2023 - Jan 2025','Coderhouse | React Frontend Development | Jan 2022 - Jun 2022'],
  'certs':'apx: Software Developer FullStack (2025), Level 1 (2022), Level 2 (2023). Coderhouse: React (2022), JavaScript (2022), Web Development.',
  'languages':'Native Spanish. Self-reported English B2; EF SET 42/100, B1 certified in 2024.'
 }
}

for lang, content in data.items():
    doc = SimpleDocTemplate(str(OUT / f'ivan-gomez-{lang}.pdf'), pagesize=(595.28, 841.89), rightMargin=42, leftMargin=42, topMargin=38, bottomMargin=48, title=f'Iván Gómez - {content["role"]}', author='Iván Gómez')
    story = [para('Iván Gómez', 'NameCV'), para(content['role'], 'RoleCV'), para('<link href="mailto:ivansangomez6@gmail.com">ivansangomez6@gmail.com</link> | <link href="https://www.linkedin.com/in/ivangomezdeveloper/">linkedin.com/in/ivangomezdeveloper</link><br/><link href="https://github.com/ivangomezdev">github.com/ivangomezdev</link>', 'MetaCV')]
    headings = content['headings']
    story += [para(headings[0], 'SectionCV'), para(content['summary']), para(headings[1], 'SectionCV'), para('JavaScript, React, Next.js, HTML, CSS, Node.js, Express, PostgreSQL, MongoDB, Firebase, Redis, WebSockets, MQTT, REST, Stripe, Mercado Pago, Git. Claude, Codex, DeepSeek, ChatGPT. Rust / Solidity: '+('proyectos experimentales.' if lang == 'es' else 'experimental projects.'))]
    story.append(para(headings[2], 'SectionCV'))
    for item in experience:
        title = f"{item['company']} | {item['role'][lang]}"
        period = f"{item['period'][lang]} | {item['mode'][lang]}"
        description = item['description'][lang]
        story.append(KeepTogether([para(title, 'TitleCV'), para(period, 'MetaCV'), para(description), Spacer(1, 4)]))
    story.extend([PageBreak(), para('Iván Gómez', 'NameCV'), para(content['role'], 'RoleCV'), para(headings[3], 'SectionCV')])
    for title, description in content['projects']:
        story.append(KeepTogether([para(title, 'TitleCV'), para(description), Spacer(1, 3)]))
    story.append(para(headings[4], 'SectionCV'))
    story.extend(para(line) for line in content['education'])
    story += [para(headings[5], 'SectionCV'), para(content['certs']), para(content['languages'])]
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(OUT / f'ivan-gomez-{lang}.pdf')
