import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function DeleteAccount() {
  return (
    <>
      <Nav />
      <main className="section-pad pb-24 pt-28">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-beast-green">
          Account &amp; Data
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Delete your account
        </h1>
        <p className="mt-4 max-w-xl text-leaf/65">
          This page explains how to delete your <strong>Bogeybeasts</strong>{' '}
          account and all associated data. Bogeybeasts is published by RootPi
          AB.
        </p>

        <div className="mt-10 max-w-2xl space-y-10 text-leaf/80">
          <section>
            <h2 className="font-display text-2xl font-bold text-leaf">
              Delete from within the app
            </h2>
            <p className="mt-3">
              You can permanently delete your account at any time, directly in
              the app:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>Open the Bogeybeasts app and sign in.</li>
              <li>
                On the home screen, tap the <strong>menu</strong> in the
                top-right corner.
              </li>
              <li>
                Tap <strong>Delete account</strong>.
              </li>
              <li>
                <strong>Confirm</strong> when prompted.
              </li>
            </ol>
            <p className="mt-3">
              Your account and all associated data are deleted{' '}
              <strong>immediately and permanently</strong>, and you are
              returned to the sign-in screen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-leaf">
              Request deletion by email
            </h2>
            <p className="mt-3">
              If you cannot access the app, email{' '}
              <a
                href="mailto:info@rootpi.xyz"
                className="text-beast-green underline"
              >
                info@rootpi.xyz
              </a>{' '}
              from the address associated with your account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-leaf">
              What data is deleted
            </h2>
            <p className="mt-3">
              When you delete your account, the following is{' '}
              <strong>permanently removed</strong> from our servers:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your account and login credentials (email address)</li>
              <li>
                Your profile (golfer name, team, handicap, avatar, home course)
              </li>
              <li>Caught Bogeybeasts and your Bogeydex</li>
              <li>Round history and scorecards</li>
              <li>Your club bag and inventory items</li>
              <li>Course leaderships you hold</li>
              <li>Notifications, custom courses, and battle records</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-leaf">
              What data is kept
            </h2>
            <p className="mt-3">
              <strong>No personal data is retained</strong> after account
              deletion. The deletion is immediate, with no additional retention
              period.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-leaf">
              Deleting data without deleting your account
            </h2>
            <p className="mt-3">
              To clear your gameplay progress but keep your account, use the{' '}
              <strong>Reset progress</strong> option in the home screen menu.
              This removes your rounds, caught Bogeybeasts, and items while
              keeping your account active.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-leaf">
              Contact
            </h2>
            <p className="mt-3">
              For any questions about account or data deletion, contact us at{' '}
              <a
                href="mailto:info@rootpi.xyz"
                className="text-beast-green underline"
              >
                info@rootpi.xyz
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
