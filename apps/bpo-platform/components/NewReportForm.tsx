"use client";

import { useState, useTransition } from "react";
import { createReportAction, createClientAction } from "../app/actions";
import { SubmitButton } from "./SubmitButton";
import { reportTypes } from "../lib/form-sections";
import type { ClientRecord } from "../lib/types";

const stateOptions = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
  "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY",
  "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
  "WI", "WY", "DC", "AS", "GU", "MP", "PR", "VI"
];


const assignmentIntentOptions = [
  { value: "general_bpo", label: "General BPO" },
  { value: "seller_due_diligence", label: "Seller due diligence" },
  { value: "buyer_due_diligence", label: "Buyer due diligence" },
  { value: "investor_analysis", label: "Investor analysis" },
  { value: "professional_support", label: "Professional support" },
  { value: "default_distressed", label: "Default / distressed property" }
];

const propertyTypeOptions = [
  { value: "single_family", label: "Single family" },
  { value: "multi_unit", label: "Multi-unit" },
  { value: "condo_townhome", label: "Condo / townhome" },
  { value: "vacant_lot", label: "Vacant lot" },
  { value: "mixed_use", label: "Mixed use" },
  { value: "unknown", label: "Unknown" }
];

const accessOptions = [
  { value: "full_interior", label: "Full interior access" },
  { value: "exterior_only", label: "Exterior only" },
  { value: "drive_by", label: "Drive-by" },
  { value: "restricted", label: "Restricted access" },
  { value: "vacant_land", label: "Vacant land" }
];

const conditionOptions = [
  { value: "market_ready", label: "Market ready" },
  { value: "average", label: "Average" },
  { value: "needs_repairs", label: "Needs repairs" },
  { value: "distressed", label: "Distressed" },
  { value: "after_repair", label: "After-repair condition" },
  { value: "unknown", label: "Unknown" }
];

const valuationGoalOptions = [
  { value: "as_is", label: "As-is value" },
  { value: "after_repair", label: "After-repair value" },
  { value: "rental_income", label: "Rental / income support" },
  { value: "lot_feasibility", label: "Lot feasibility" },
  { value: "reconciliation", label: "Value reconciliation" },
  { value: "support_only", label: "Support-only documentation" }
];

interface NewReportFormProps {
  initialClients: ClientRecord[];
}

export function NewReportForm({ initialClients }: NewReportFormProps) {
  const [clientList, setClientList] = useState<ClientRecord[]>(initialClients);
  const [selectedClientId, setSelectedClientId] = useState("");
  const [, startTransition] = useTransition();

  // Client fields state
  const [clientCompany, setClientCompany] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientState, setClientState] = useState("");
  const [clientZip, setClientZip] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [newCompany, setNewCompany] = useState("");
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [newZip, setNewZip] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isSubmittingClient, setIsSubmittingClient] = useState(false);
  const [modalError, setModalError] = useState("");

  const handleClientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    
    if (val === "new") {
      setShowModal(true);
      // Keep previous selected client ID or empty, do not change dropdown immediately
      return;
    }

    setSelectedClientId(val);
    
    if (val === "") {
      setClientCompany("");
      setClientName("");
      setClientAddress("");
      setClientCity("");
      setClientState("");
      setClientZip("");
      setClientPhone("");
      setClientEmail("");
    } else {
      const client = clientList.find((c) => c.id === val);
      if (client) {
        setClientCompany(client.company || "");
        setClientName(client.contact || "");
        setClientAddress(client.address || "");
        setClientCity(client.city || "");
        setClientState(client.state || "");
        setClientZip(client.zip || "");
        setClientPhone(client.phone || "");
        setClientEmail(client.email || "");
      }
    }
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName && !newCompany) {
      setModalError("Client name (contact) or company name is required.");
      return;
    }

    setIsSubmittingClient(true);
    setModalError("");

    try {
      const client = await createClientAction({
        company: newCompany,
        contact: newName,
        address: newAddress,
        city: newCity,
        state: newState,
        zip: newZip,
        phone: newPhone,
        email: newEmail
      });

      if (client) {
        setClientList((prev) =>
          [...prev, client].sort((a, b) =>
            (a.company || a.contact).localeCompare(b.company || b.contact)
          )
        );

        // Autofill client fields
        setClientCompany(client.company || "");
        setClientName(client.contact || "");
        setClientAddress(client.address || "");
        setClientCity(client.city || "");
        setClientState(client.state || "");
        setClientZip(client.zip || "");
        setClientPhone(client.phone || "");
        setClientEmail(client.email || "");

        // Set selected client dropdown
        setSelectedClientId(client.id);

        // Reset modal fields and close
        setNewCompany("");
        setNewName("");
        setNewAddress("");
        setNewCity("");
        setNewState("");
        setNewZip("");
        setNewPhone("");
        setNewEmail("");
        setShowModal(false);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to create client.";
      setModalError(message);
    } finally {
      setIsSubmittingClient(false);
    }
  };

  return (
    <>
      <form
        action={(formData) => {
          startTransition(async () => {
            await createReportAction(formData);
          });
        }}
        className="card mt-8 grid gap-5 p-6 md:grid-cols-2"
      >
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Project Title</span>
          <input name="title" required placeholder="123 Main St BPO" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Report Type</span>
          <select name="reportType" required defaultValue="BPO" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {reportTypes.map((type) => (
              <option value={type} key={type}>{type}</option>
            ))}
          </select>
        </label>

        <div className="md:col-span-2 border-t border-slate-200 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-950">Client information</h2>
              <p className="mt-1 text-sm text-slate-600">Choose a saved client or enter a new client. New details are saved for future reports.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="-ml-0.5 mr-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Client
            </button>
          </div>
        </div>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-800">Saved Client</span>
          <select
            name="clientId"
            value={selectedClientId}
            onChange={handleClientChange}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select a saved client (or enter custom details below)</option>
            {clientList.map((client) => (
              <option value={client.id} key={client.id}>
                {[client.company, client.contact, client.city, client.state].filter(Boolean).join(" - ")}
              </option>
            ))}
            <option value="new" className="text-blue-600 font-semibold">+ Create new client...</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-800">Company</span>
          <input
            name="clientCompany"
            value={clientCompany}
            onChange={(e) => setClientCompany(e.target.value)}
            autoComplete="organization"
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Contact</span>
          <input
            name="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            autoComplete="name"
            placeholder="Primary contact name"
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-800">Client Address</span>
          <input
            name="clientAddress"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            autoComplete="street-address"
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </label>
        <div className="grid gap-5 md:col-span-2 md:grid-cols-4">
          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-slate-800">Client City</span>
            <input
              name="clientCity"
              value={clientCity}
              onChange={(e) => setClientCity(e.target.value)}
              autoComplete="address-level2"
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-800">Client State</span>
            <select
              name="clientState"
              value={clientState}
              onChange={(e) => setClientState(e.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">State</option>
              {stateOptions.map((state) => <option value={state} key={state}>{state}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-800">Client ZIP Code</span>
            <input
              name="clientZip"
              value={clientZip}
              onChange={(e) => setClientZip(e.target.value)}
              autoComplete="postal-code"
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>
        <div className="grid gap-5 md:col-span-2 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-800">Contact Number</span>
            <input
              name="clientPhone"
              type="tel"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              autoComplete="tel"
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-800">Contact Email</span>
            <input
              name="clientEmail"
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              autoComplete="email"
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>

        <div className="md:col-span-2 border-t border-slate-200 pt-5">
          <h2 className="text-lg font-bold text-slate-950">Guided report questions</h2>
          <p className="mt-1 text-sm text-slate-600">These choices recommend the right forms. You can adjust the package on the next screen.</p>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-slate-800">Assignment Intent</span>
          <select name="assignmentIntent" required defaultValue="general_bpo" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {assignmentIntentOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Valuation Goal</span>
          <select name="valuationGoal" required defaultValue="as_is" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {valuationGoalOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Street Address</span>
          <input name="address" required autoComplete="street-address" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Unit</span>
          <input name="unit" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <div className="grid gap-5 md:col-span-2 md:grid-cols-4">
          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-slate-800">City</span>
            <input name="city" required autoComplete="address-level2" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-800">State</span>
            <input name="state" required maxLength={2} placeholder="PA" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm uppercase outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-800">ZIP</span>
            <input name="zip" required autoComplete="postal-code" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Parcel ID</span>
          <input name="parcelId" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Property Type</span>
          <select name="propertyType" required defaultValue="single_family" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {propertyTypeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <div className="grid gap-5 md:col-span-2 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-800">Property Access</span>
            <select name="propertyAccess" required defaultValue="exterior_only" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
              {accessOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-800">Property Condition</span>
            <select name="propertyCondition" required defaultValue="average" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
              {conditionOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
          </label>
        </div>
        <div className="md:col-span-2">
          <SubmitButton>Create report</SubmitButton>
        </div>
      </form>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50">
              <h3 className="text-base font-bold text-slate-900">Add New Client</h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="p-6 space-y-4">
              {modalError && (
                <div className="rounded-md bg-red-50 p-3 text-sm font-medium text-red-800 border border-red-200">
                  {modalError}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">Company</span>
                  <input
                    type="text"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    placeholder="Company Name"
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">Contact Name</span>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Primary contact POC"
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs font-semibold text-slate-700">Street Address</span>
                <input
                  type="text"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="Street address"
                  className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block sm:col-span-1.5">
                  <span className="text-xs font-semibold text-slate-700">City</span>
                  <input
                    type="text"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="City"
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">State</span>
                  <select
                    value={newState}
                    onChange={(e) => setNewState(e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">State</option>
                    {stateOptions.map((st) => <option value={st} key={st}>{st}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">ZIP Code</span>
                  <input
                    type="text"
                    value={newZip}
                    onChange={(e) => setNewZip(e.target.value)}
                    placeholder="ZIP"
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">Phone Number</span>
                  <input
                    type="tel"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="Phone"
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">Email Address</span>
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Email"
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingClient}
                  className="inline-flex justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition disabled:bg-blue-400 focus:outline-none"
                >
                  {isSubmittingClient ? "Saving..." : "Save Client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
