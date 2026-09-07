import type { Metadata } from "next";
import { Container, PageHero, PageShell } from "@/components/ui";

const deletionEmail = "contact.finstage@gmail.com";

export const metadata: Metadata = {
  title: "FinStage Account & Data Deletion",
  description:
    "Request deletion of your FinStage account and associated data. Email contact.finstage@gmail.com with subject Account Deletion Request.",
  alternates: {
    canonical: "/finstage-delete-account",
  },
};

export default function FinstageDeleteAccountPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FinStage"
        title="FinStage Account & Data Deletion"
        lead="Users can request deletion of their FinStage account and associated data at any time."
      />
      <section>
        <Container className="py-14">
          <div className="soft-card mx-auto max-w-3xl space-y-6 rounded-[28px] p-5 leading-7 text-ink-soft sm:p-8">
            <p>
              To request account deletion, send an email to:{" "}
              <a href={`mailto:${deletionEmail}`} className="font-medium text-ink underline underline-offset-2">
                {deletionEmail}
              </a>
            </p>
            <div>
              <p>Please include:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Your registered Google email address</li>
                <li>Subject: Account Deletion Request</li>
              </ul>
            </div>
            <p>
              Upon verification, applicable account-related data will be deleted within a reasonable
              timeframe.
            </p>
            <p>Users may also manually remove backup files stored in their own Google Drive account.</p>
            <p>
              Certain technical logs or legally required records may be retained temporarily for
              security, fraud prevention, or compliance purposes.
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
