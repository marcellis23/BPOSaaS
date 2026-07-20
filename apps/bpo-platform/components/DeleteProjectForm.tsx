"use client";

import { deleteReportAction } from "../app/actions";
import { SubmitButton } from "./SubmitButton";

interface DeleteProjectFormProps {
  projectId: string;
}

export function DeleteProjectForm({ projectId }: DeleteProjectFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const confirmed = window.confirm(
      "Warning: This will permanently delete the project and this action cannot be undone. Are you sure you want to proceed?"
    );
    if (!confirmed) {
      e.preventDefault();
    }
  };

  return (
    <form action={deleteReportAction} onSubmit={handleSubmit}>
      <input type="hidden" name="projectId" value={projectId} />
      <SubmitButton variant="danger">Delete</SubmitButton>
    </form>
  );
}
