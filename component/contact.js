import css from './contact.module.css'

export default function Contact() {
  return (
    <div className={css.body}>
      <p>We are located about 11 miles west of Seattle. You may contact us using the following.</p>
      <dl>
        <dt><strong>Telephone</strong></dt>
        <dd>(360) 689-0181</dd>
        <dt>&nbsp;</dt>
        <dt><strong>Mailing address</strong> </dt>
        <dd>623 Tufts Ave. East, Port Orchard WA 98366-4023</dd>
        <dt>&nbsp;</dt>
        <dt><strong>Electronic mail</strong> </dt>
        <dd>
          General Information: <a href="mailto:info@suv123.com">info@suv123.com</a>
        </dd>
        <dt>&nbsp;</dt>
        <dt><strong>SPOOF mail</strong> </dt>
        <dd>
          <p>Note that someone has a program generating random names that appear to come from SUV123.com.  The junk mail advertises stocks, incoherent messages, and just plain junk.  These unwanted emails are coming from servers as far away as Australia and Europe.  It looks like a pervasive program they have created, but we have been working with our web administrators to put a stop to it.  It is too bad that someone has the time and resources to waste other people's time and web bandwidth with trash.  Please bear with us as we work to shut them down.  If you know how to shut these crooks down, please send an email to the above address.</p>
          <p>We do <i>not</i> send out bulk email or solicitations.</p>
        </dd>
      </dl>
    </div>
  )
}
