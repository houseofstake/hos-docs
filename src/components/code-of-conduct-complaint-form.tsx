"use client";

import { useState, type FormEvent } from "react";

export function CodeOfConductComplaintForm() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const bodyLines = [name && `Name: ${name}`, details].filter(
      (line): line is string => Boolean(line)
    );

    const mailtoUrl = `mailto:ops@houseofstake.org?subject=${encodeURIComponent(
      "Code of Conduct Complaint"
    )}&body=${encodeURIComponent(bodyLines.join("\n\n"))}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="not-prose mb-8 flex flex-col gap-4 rounded-xl border border-fd-border bg-fd-card p-6"
    >
      <div>
        <h2 className="text-lg font-bold text-fd-card-foreground">
          Code of Conduct Complaint Form
        </h2>
        <p className="mt-1 text-sm text-fd-muted-foreground">
          If you believe someone has breached the House of Stake Code of
          Conduct, use this form to report it. Sharing your name is optional.
          Submitting opens a pre-filled email to{" "}
          <span className="font-medium text-fd-card-foreground">
            ops@houseofstake.org
          </span>{" "}
          for you to send.
        </p>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-fd-card-foreground">
        Name (optional)
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Jane Doe"
          className="rounded-md border border-fd-border bg-fd-background px-3 py-2 text-sm text-fd-foreground outline-none focus:border-fd-primary"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-fd-card-foreground">
        Describe the issue
        <textarea
          required
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          rows={5}
          placeholder="What happened, when, and who was involved?"
          className="resize-y rounded-md border border-fd-border bg-fd-background px-3 py-2 text-sm text-fd-foreground outline-none focus:border-fd-primary"
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center rounded-full bg-fd-primary px-5 py-2.5 text-sm font-bold text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
      >
        Send Report via Email
      </button>
    </form>
  );
}
