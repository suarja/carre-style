"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ENVIRONNEMENT_VARIABLES } from "@/lib/constants/info";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const result = await emailjs.sendForm(
        ENVIRONNEMENT_VARIABLES.EMAILJS_SERVICE_ID!,
        ENVIRONNEMENT_VARIABLES.EMAILJS_TEMPLATE_ID!,
        form.current as HTMLFormElement,
        ENVIRONNEMENT_VARIABLES.EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setSubmitError(
        "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-1"
          >
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white mb-1"
          >
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-white mb-1"
          >
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="devis-beton">Devis Béton Imprimé</option>
            <option value="devis-carrelage">Devis Carrelage</option>
            <option value="information">Demande d'information</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-1"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
        ></textarea>
      </div>

      {submitSuccess && (
        <div className="p-4 bg-green-900/50 text-green-300 border border-green-700 rounded-md">
          Votre message a été envoyé avec succès. Nous vous contacterons dans
          les plus brefs délais.
        </div>
      )}

      {submitError && (
        <div className="p-4 bg-red-900/50 text-red-300 border border-red-700 rounded-md">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary flex items-center gap-2"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        {!isSubmitting && <Send size={18} />}
      </button>
    </form>
  );
}
