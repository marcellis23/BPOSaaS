"use client";

import { useState } from "react";
import { createClientAction } from "../app/actions";
import type { ClientRecord } from "../lib/types";

const stateOptions = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
  "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY",
  "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
  "WI", "WY", "DC", "AS", "GU", "MP", "PR", "VI"
];

interface SidebarClientSectionProps {
  initialClients: ClientRecord[];
  defaultValues: {
    clientId?: string;
    clientCompany?: string;
    clientName?: string;
    clientAddress?: string;
    clientCity?: string;
    clientState?: string;
    clientZip?: string;
    clientPhone?: string;
    clientEmail?: string;
  };
}

export function SidebarClientSection({ initialClients, defaultValues }: SidebarClientSectionProps) {
  const [clientList, setClientList] = useState<ClientRecord[]>(initialClients);
  const [selectedClientId, setSelectedClientId] = useState(defaultValues.clientId || "");

  // Client fields state
  const [clientCompany, setClientCompany] = useState(defaultValues.clientCompany || "");
  const [clientName, setClientName] = useState(defaultValues.clientName || "");
  const [clientAddress, setClientAddress] = useState(defaultValues.clientAddress || "");
  const [clientCity, setClientCity] = useState(defaultValues.clientCity || "");
  const [clientState, setClientState] = useState(defaultValues.clientState || "");
  const [clientZip, setClientZip] = useState(defaultValues.clientZip || "");
  const [clientPhone, setClientPhone] = useState(defaultValues.clientPhone || "");
  const [clientEmail, setClientEmail] = useState(defaultValues.clientEmail || "");

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
      <div className="border-t border-slate-200 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-950">Client information</h3>
            <p className="mt-1 text-xs text-slate-500">Choose a saved client or update this report&apos;s client details.</p>
          </div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="-ml-0.5 mr-1 h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Client
          </button>
        </div>
      </div>

      <select
        name="clientId"
        value={selectedClientId}
        onChange={handleClientChange}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">New client / entered below</option>
        {clientList.map((client) => (
          <option value={client.id} key={client.id}>
            {[client.company, client.contact, client.city, client.state].filter(Boolean).join(" - ")}
          </option>
        ))}
        <option value="new" className="text-blue-600 font-semibold">+ Create new client...</option>
      </select>

      <input
        name="clientCompany"
        value={clientCompany}
        onChange={(e) => setClientCompany(e.target.value)}
        placeholder="Client company"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />
      <input
        name="clientName"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        placeholder="Client contact"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />
      <input
        name="clientAddress"
        value={clientAddress}
        onChange={(e) => setClientAddress(e.target.value)}
        placeholder="Client address"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />

      <div className="grid grid-cols-4 gap-2">
        <input
          name="clientCity"
          value={clientCity}
          onChange={(e) => setClientCity(e.target.value)}
          placeholder="City"
          className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
        <select
          name="clientState"
          value={clientState}
          onChange={(e) => setClientState(e.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">State</option>
          {stateOptions.map((state) => <option value={state} key={state}>{state}</option>)}
        </select>
        <input
          name="clientZip"
          value={clientZip}
          onChange={(e) => setClientZip(e.target.value)}
          placeholder="ZIP"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <input
          name="clientPhone"
          value={clientPhone}
          onChange={(e) => setClientPhone(e.target.value)}
          placeholder="Contact number"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
        <input
          name="clientEmail"
          type="email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          placeholder="Contact email"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-left">
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
                <label className="block">
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
