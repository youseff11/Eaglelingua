import { useState } from 'react';
import { COMPANY, whatsappLink } from '../data/company.js';
import { SERVICES } from '../data/services.js';
import { useI18n } from '../lib/i18n.jsx';
import Icon from './Icon.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function compose(title, fields) {
  return [title, '', ...fields.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`)].join('\n');
}

/** Sends to VITE_FORM_ENDPOINT if configured, otherwise opens WhatsApp with the message pre-filled. */
async function deliver({ subject, fields, data }) {
  const text = compose(subject, fields);
  if (COMPANY.formEndpoint) {
    const res = await fetch(COMPANY.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ subject, ...data, message_full: text }),
    });
    if (!res.ok) throw new Error('send failed');
    return 'sent';
  }
  window.open(whatsappLink(text), '_blank', 'noopener');
  return 'whatsapp';
}

function Field({ id, label, error, full, children }) {
  return (
    <div className={`field ${full ? 'full' : ''} ${error ? 'invalid' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="err">{error}</span>}
    </div>
  );
}

function Success({ mode, onReset }) {
  const { t } = useI18n();
  return (
    <div className="form-success" role="status">
      <div className="ok"><Icon name="tick" size={34} strokeWidth={2.2} /></div>
      <h3 className="h3">{t('form.sentTitle')}</h3>
      <p className="muted" style={{ marginTop: 10 }}>{mode === 'whatsapp' ? t('form.viaWhatsapp') : t('form.sent')}</p>
      <button className="btn btn-outline btn-sm" style={{ marginTop: 22 }} onClick={onReset}>↺</button>
    </div>
  );
}

export function ContactForm() {
  const { t } = useI18n();
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | whatsapp | error

  const submit = async (e) => {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const errs = {};
    if (!fd.name?.trim()) errs.name = t('form.required');
    if (!EMAIL_RE.test(fd.email || '')) errs.email = t('form.invalidEmail');
    if (!fd.message?.trim()) errs.message = t('form.required');
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('sending');
    try {
      const mode = await deliver({
        subject: 'New website inquiry — Eaglelingua',
        data: fd,
        fields: [['Name', fd.name], ['Email', fd.email], ['Phone', fd.phone], ['Subject', fd.subject], ['Message', fd.message]],
      });
      setStatus(mode);
    } catch { setStatus('error'); }
  };

  if (status === 'sent' || status === 'whatsapp') return <div className="form-card"><Success mode={status} onReset={() => setStatus('idle')} /></div>;

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <h3 className="h3" style={{ marginBottom: 24 }}>{t('contact.formTitle')}</h3>
      <div className="form-grid">
        <Field id="c-name" label={t('form.name')} error={errors.name}><input id="c-name" name="name" autoComplete="name" /></Field>
        <Field id="c-email" label={t('form.email')} error={errors.email}><input id="c-email" name="email" type="email" autoComplete="email" /></Field>
        <Field id="c-phone" label={t('form.phone')}><input id="c-phone" name="phone" type="tel" autoComplete="tel" dir="ltr" /></Field>
        <Field id="c-subject" label={t('form.subject')}><input id="c-subject" name="subject" /></Field>
        <Field id="c-msg" label={t('form.message')} error={errors.message} full><textarea id="c-msg" name="message" /></Field>
      </div>
      <div className="form-foot" style={{ marginTop: 24 }}>
        <small><Icon name="lock" size={15} /> {t('form.privacy')}</small>
        <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t('form.sending') : t('form.send')} <Icon name="send" size={17} />
        </button>
      </div>
      {status === 'error' && <p className="err" style={{ color: '#c0392b', marginTop: 14 }}>{t('form.error')}</p>}
    </form>
  );
}

export function QuoteForm({ defaultService = '' }) {
  const { t } = useI18n();
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const langs = t('languages');

  const submit = async (e) => {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const errs = {};
    if (!fd.name?.trim()) errs.name = t('form.required');
    if (!EMAIL_RE.test(fd.email || '')) errs.email = t('form.invalidEmail');
    if (!fd.phone?.trim()) errs.phone = t('form.required');
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('sending');
    const svc = SERVICES.find((s) => s.slug === fd.service);
    try {
      const mode = await deliver({
        subject: 'Quote request — Eaglelingua',
        data: fd,
        fields: [
          ['Name', fd.name], ['Email', fd.email], ['Phone', fd.phone],
          ['Service', svc ? svc.title.en : fd.service], ['From', fd.from], ['To', fd.to],
          ['Volume', fd.pages], ['Deadline', fd.deadline], ['Details', fd.details],
        ],
      });
      setStatus(mode);
    } catch { setStatus('error'); }
  };

  if (status === 'sent' || status === 'whatsapp') return <div className="form-card"><Success mode={status} onReset={() => setStatus('idle')} /></div>;

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <div className="form-grid">
        <Field id="q-name" label={t('form.name')} error={errors.name}><input id="q-name" name="name" autoComplete="name" /></Field>
        <Field id="q-email" label={t('form.email')} error={errors.email}><input id="q-email" name="email" type="email" autoComplete="email" /></Field>
        <Field id="q-phone" label={t('form.phone')} error={errors.phone}><input id="q-phone" name="phone" type="tel" autoComplete="tel" dir="ltr" /></Field>
        <Field id="q-service" label={t('form.service')}>
          <select id="q-service" name="service" defaultValue={defaultService}>
            <option value="">{t('form.choose')}</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{t(s.title)}</option>)}
            <option value="other">{t('form.other')}</option>
          </select>
        </Field>
        <Field id="q-from" label={t('form.from')}>
          <select id="q-from" name="from" defaultValue="">
            <option value="">—</option>
            {langs.map((l) => <option key={l}>{l}</option>)}
          </select>
        </Field>
        <Field id="q-to" label={t('form.to')}>
          <select id="q-to" name="to" defaultValue="">
            <option value="">—</option>
            {langs.map((l) => <option key={l}>{l}</option>)}
          </select>
        </Field>
        <Field id="q-pages" label={t('form.pages')}><input id="q-pages" name="pages" /></Field>
        <Field id="q-deadline" label={t('form.deadline')}><input id="q-deadline" name="deadline" type="date" /></Field>
        <Field id="q-details" label={t('form.details')} full><textarea id="q-details" name="details" /></Field>
      </div>
      <div className="form-foot" style={{ marginTop: 24 }}>
        <small><Icon name="lock" size={15} /> {t('form.privacy')}</small>
        <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t('form.sending') : t('form.sendQuote')} <Icon name="send" size={17} />
        </button>
      </div>
      {status === 'error' && <p style={{ color: '#c0392b', marginTop: 14 }}>{t('form.error')}</p>}
    </form>
  );
}
