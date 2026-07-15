/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  AlertCircle,
  FileText,
  Award,
  ShieldAlert,
  ClipboardList,
  Activity,
  Calendar,
  X,
  Mail,
  Send,
  CheckCircle2,
  MailCheck,
  CalendarCheck,
  LogOut,
  AlertTriangle,
} from "lucide-react";
import { candidates, type Candidate } from "./data";

export default function App() {
  const [activeCandidateId, setActiveCandidateId] = useState<string>(
    candidates[0]?.id || "",
  );
  const [activeTab, setActiveTab] = useState("fortalezas");

  const handleSelectCandidate = (candidateId: string, tab?: string) => {
    setActiveCandidateId(candidateId);

    // Always find fresh active candidate data
    const newCandidate = candidates.find((c) => c.id === candidateId);
    if (!newCandidate) return;

    if (tab) {
      setActiveTab(tab);
    } else if (newCandidate.star?.length === 0 && activeTab === "star") {
      setActiveTab("fortalezas");
    }
  };

  const db = candidates.find((c) => c.id === activeCandidateId) as Candidate;

  // Safe checks if db doesn't exist
  if (!db) {
    return (
      <div className="p-8 text-center text-gray-500">
        Agrega candidatos al archivo data.ts
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#F3F4F6] text-gray-900 font-sans antialiased overflow-hidden">
      {/* HEADER EJECUTIVO */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10 shrink-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] via-zinc-500 to-gray-50 p-[1.5px] flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-md flex items-center justify-center">
              <span className="font-extrabold text-[#D4AF37] text-base tracking-wider font-serif">
                P
              </span>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-tight text-[#1F2937] flex items-center gap-2">
              PROMETEO{" "}
              <span className="text-[9px] bg-gray-100 text-[#D4AF37] px-2 py-0.5 rounded-full font-medium border border-gray-300 hidden sm:inline-block">
                AUDITORÍA DE TALENTO
              </span>
            </h1>
            <p className="text-[11px] text-gray-600">
              División de Energía & Operaciones
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-gray-600 uppercase tracking-wider block">
              Puesto Vacante
            </span>
            <span className="text-xs font-semibold text-[#1F2937]">
              Jefe de Mantenimiento Naval
            </span>
          </div>
          <div className="h-8 w-[1.5px] bg-gray-100 hidden sm:block"></div>
          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-gray-600 uppercase tracking-wider block">
              Última Actualización
            </span>
            <span className="text-xs font-bold text-[#D4AF37]">Jun 2026</span>
          </div>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL */}
      <main className="flex-1 w-full min-w-0 flex flex-col md:flex-row min-h-0 overflow-hidden relative">
        {/* BARRA LATERAL IZQUIERDA: TARJETAS DE CANDIDATOS */}
        <section className="w-full md:w-[320px] lg:w-[360px] xl:w-[400px] md:h-full bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col p-5 shrink-0 overflow-y-auto gap-5 z-20 max-h-[35vh] md:max-h-none custom-scrollbar">
          <div>
            <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
              AUDITORÍA GRUPAL
            </span>
            <h2 className="text-lg font-bold text-[#1F2937] tracking-tight">
              Evaluación Comparativa
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Haga clic en un candidato para activarlo, o use sus accesos
              rápidos para ir directo a la sección deseada.
            </p>
          </div>

          {/* TARJETAS RENDERIZADAS DINÁMICAMENTE */}
          {candidates.map((candidate) => {
            const isActive = activeCandidateId === candidate.id;

            // Map theme strictly to fully realized tailwind classes
            let themeStyles = {
              text: "text-[#D4AF37]",
              bgLight: "bg-[#D4AF37]/10",
              borderLight: "border-[#D4AF37]/20",
              border: "border-[#D4AF37]/40",
              shadow: "shadow-[0_0_15px_rgba(212,175,55,0.08)]",
              bgIndicator: "bg-[#D4AF37]",
            };

            if (candidate.theme === "danger" || candidate.theme === "rose") {
              themeStyles = {
                text: "text-rose-700",
                bgLight: "bg-rose-50",
                borderLight: "border-rose-200",
                border: "border-rose-400",
                shadow: "shadow-[0_0_15px_rgba(225,29,72,0.08)]",
                bgIndicator: "bg-rose-500",
              };
            } else if (candidate.theme === "amber") {
              themeStyles = {
                text: "text-amber-700",
                bgLight: "bg-amber-50",
                borderLight: "border-amber-200",
                border: "border-amber-400",
                shadow: "shadow-[0_0_15px_rgba(217,119,6,0.08)]",
                bgIndicator: "bg-amber-500",
              };
            } else if (candidate.theme === "emerald") {
              themeStyles = {
                text: "text-emerald-700",
                bgLight: "bg-emerald-50",
                borderLight: "border-emerald-200",
                border: "border-emerald-400",
                shadow: "shadow-[0_0_15px_rgba(4,120,87,0.08)]",
                bgIndicator: "bg-emerald-600",
              };
            }

            // TABS DINÁMICOS
            const tabs = [
              { key: "fortalezas", label: "Fortalezas Match" },
              { key: "fit", label: "Fit Técnico" },
              { key: "cumplimiento", label: "Cumplimiento" },
            ];
            if (candidate.star && candidate.star.length > 0) {
              tabs.push({ key: "star", label: "Entrevista" });
            }

            return (
              <div
                key={candidate.id}
                onClick={() => handleSelectCandidate(candidate.id)}
                className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden shrink-0 ${
                  isActive
                    ? `bg-[#E5E7EB] ${themeStyles.border} ${themeStyles.shadow}`
                    : "bg-[#F3F4F6] border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between items-start mb-2.5 gap-2">
                  <span
                    className={`text-[7px] tracking-widest sm:text-[8px] font-bold ${themeStyles.text} ${themeStyles.bgLight} border ${themeStyles.borderLight} px-2 py-0.5 rounded-full leading-none shrink-0`}
                  >
                    {candidate.badge}
                  </span>
                  <span
                    className={`text-[8px] sm:text-[9px] font-extrabold flex items-center justify-end ${candidate.theme !== "gold" ? themeStyles.text : "text-[#1F2937]"} text-right flex-1 leading-tight uppercase tracking-widest`}
                  >
                    {candidate.status}
                  </span>
                </div>
                <div className="flex gap-2.5 items-center">
                  {candidate.avatar ? (
                    <img
                      src={candidate.avatar}
                      alt={candidate.name}
                      className="w-10 h-10 rounded-full border border-gray-300 object-cover shrink-0 transition-transform duration-300 hover:scale-[2.5] hover:shadow-lg hover:z-[100] relative origin-left"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full border border-gray-300 bg-gray-200 shrink-0"></div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#1F2937] text-[13px] leading-tight truncate">
                      {candidate.name}
                    </h3>
                    <p className="text-[11px] text-gray-600 mt-0.5 truncate">
                      {candidate.title}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5 truncate">
                      {candidate.school}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectCandidate(candidate.id, tab.key);
                      }}
                      className={`py-2 px-2.5 hover:bg-gray-100 border border-gray-300 text-[10px] font-semibold rounded-lg transition-all text-left flex items-center gap-1.5 ${
                        isActive && activeTab === tab.key
                          ? `bg-gray-100 text-[#1F2937] ${themeStyles.border}`
                          : "bg-white/50 text-gray-600 hover:text-[#1F2937]"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full shrink-0 ${isActive && activeTab === tab.key ? themeStyles.bgIndicator : "bg-zinc-500"}`}
                      ></span>{" "}
                      <span className="truncate">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          {/* PIE DE LA BARRA LATERAL */}
          <div className="mt-auto pt-6 text-center space-y-2 hidden lg:block">
            <div className="inline-flex items-center gap-2 bg-[#F3F4F6] border border-gray-200 rounded-lg p-3 text-left w-full">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0"></div>
              <p className="text-[10px] text-gray-600 leading-normal">
                Bajo Protocolo de Evidencia Líquida. Toda información ha sido
                cruzada directamente con los entregables de los candidatos.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200/80 rounded-lg p-3 text-left w-full">
              <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <p className="text-[9px] font-medium text-gray-600 leading-normal">
                Herramienta de soporte analítico basada en evidencia documental.
                La decisión final corresponde al líder solicitante.
              </p>
            </div>
          </div>
        </section>

        {/* ÁREA DE TRABAJO DERECHA (PANELES DINÁMICOS) */}
        <section className="flex-1 flex flex-col bg-[#F3F4F6] overflow-y-auto pb-4 custom-scrollbar relative overflow-x-hidden min-w-0">
          {/* ENCABEZADO DE EXPEDIENTE DEL CANDIDATO SELECCIONADO */}
          <div className="p-3 md:p-4 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50 shrink-0 sticky top-0 z-10">
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-3 w-full">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {db.avatar && (
                  <div className="shrink-0 relative group z-20 hover:z-[100]">
                    <div className="w-10 h-10 sm:w-12 h-12 rounded-full border-2 border-gray-300 overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-[2.5] group-hover:shadow-2xl origin-left">
                      <img
                        src={db.avatar}
                        alt={db.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="text-[9px] font-bold tracking-widest text-[#D4AF37] uppercase">
                      VISTA DETALLADA DEL EXPEDIENTE
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#1F2937] tracking-tight truncate">
                      {db.name}
                    </h2>
                    <span className="text-[9px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded-full font-semibold border border-[#D4AF37]/20 uppercase shrink-0">
                      {db.title}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-gray-600 italic border-l-2 border-[#D4AF37] pl-2 leading-tight max-w-none xl:max-w-3xl hidden sm:block truncate">
                    {db.sub}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full lg:w-auto shrink-0 overflow-x-auto pb-1 lg:pb-0">
                <a
                  href={db.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-[#1F2937] font-bold text-[9px] px-2.5 py-1.5 rounded-lg flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors shadow-sm shrink-0 border border-gray-300"
                >
                  <FileText className="w-3.5 h-3.5" />
                  VER CV
                </a>
                <div className="flex items-center gap-2 shrink-0 bg-white border border-gray-200 p-1.5 px-3 rounded-lg shadow-sm">
                  <div className="text-center whitespace-nowrap">
                    <span className="text-[8px] text-gray-400 block uppercase font-bold tracking-widest leading-none mb-1">
                      DICTAMEN
                    </span>
                    <span
                      className={`text-[9px] font-bold px-2 py-1 rounded-full block uppercase leading-none tracking-widest border ${db.theme === "danger" || db.theme === "rose" ? "text-rose-700 bg-rose-50 border-rose-200" : db.theme === "amber" ? "text-amber-700 bg-amber-50 border-amber-200" : db.theme === "emerald" ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20"}`}
                    >
                      {db.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PESTAÑA 3: CUMPLIMIENTO */}
            <div
              className={`grid grid-cols-2 gap-1.5 mt-3 overflow-x-auto pb-0.5 ${db.star && db.star.length > 0 ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}
            >
              {[
                { key: "fortalezas", label: "Fortalezas Match" },
                { key: "fit", label: "Fit Técnico" },
                { key: "cumplimiento", label: "Cumplimiento" },
              ]
                .concat(
                  db.star && db.star.length > 0
                    ? [{ key: "star", label: "Entrevista" }]
                    : [],
                )
                .map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg font-bold text-[10px] sm:text-[11px] uppercase tracking-wider border transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                      activeTab === tab.key
                        ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_3px_12px_rgba(212,175,55,0.18)]"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-[#1F2937]"
                    }`}
                  >
                    {tab.key === "fortalezas" && (
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    )}
                    {tab.key === "fit" && (
                      <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    )}
                    {tab.key === "cumplimiento" && (
                      <ClipboardList className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    )}
                    {tab.key === "star" && (
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    )}
                    {tab.label}
                  </button>
                ))}
            </div>
          </div>

          {/* CONTENIDOS DINÁMICOS DEL ESPACIO DE TRABAJO */}
          <div className="p-4 md:p-5 flex-1 space-y-4">
            {/* PESTAÑA 1: FORTALEZAS DE MATCH */}
            {activeTab === "fortalezas" && (
              <div className="space-y-6 animate-[fadeIn_300ms_ease-out]">
                <div>
                  <h3 className="text-sm font-bold text-[#1F2937] uppercase tracking-widest flex items-center gap-2">
                    <Award className="text-[#D4AF37] w-4 h-4" />
                    Fortalezas de Competencias Técnicas Evaluadas
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Cotejo directo entre las competencias explícitas del perfil
                    y la trayectoria comprobada en documentos de soporte.
                  </p>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
                  {db.fortalezas.map((f, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between shadow-sm"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-0.5 rounded uppercase tracking-wider">
                            {f.impact}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono">
                            ID: F-{i + 1}
                          </span>
                        </div>
                        <h4 className="font-bold text-[#1F2937] text-xs mt-3 uppercase tracking-wide">
                          {f.req}
                        </h4>
                        <div className="mt-3 p-3 rounded-lg bg-[#F3F4F6] border border-gray-200/80 text-xs text-gray-600 leading-relaxed font-sans text-justify">
                          <span className="text-[9px] text-gray-500 font-semibold block mb-1 uppercase tracking-wider">
                            Evidencia textual del CV:
                          </span>
                          "{f.ev}"
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center text-[10px] text-gray-600 pt-3 border-t border-gray-200/50">
                        <span>
                          Nivel de Dominio:{" "}
                          <strong className="text-[#1F2937] uppercase font-bold">
                            {f.level}
                          </strong>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {db.riesgos && db.riesgos.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-[#1F2937] uppercase tracking-widest flex items-center gap-2">
                      <AlertTriangle className="text-red-500 w-4 h-4" />
                      Riesgos Técnicos y Mitigaciones
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 mb-4">
                      Áreas de oportunidad identificadas y estrategias de compensación sugeridas para asegurar el éxito operativo.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {db.riesgos.map((r, i) => (
                        <div
                          key={i}
                          className="bg-red-50/30 border border-red-100 rounded-xl p-5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                                r.impact === 'Alto' ? 'text-red-700 bg-red-100 border border-red-200' :
                                r.impact === 'Medio' ? 'text-amber-700 bg-amber-100 border border-amber-200' :
                                'text-blue-700 bg-blue-100 border border-blue-200'
                              }`}>
                                Impacto: {r.impact}
                              </span>
                              <span className="text-[10px] text-gray-500 font-mono">
                                ID: R-{i + 1}
                              </span>
                            </div>
                            <h4 className="font-bold text-red-900 text-xs mt-3 uppercase tracking-wide">
                              {r.risk}
                            </h4>
                            <div className="mt-3 p-3 rounded-lg bg-white border border-red-100/80 text-xs text-gray-700 leading-relaxed font-sans shadow-sm text-justify">
                              <span className="text-[9px] text-gray-500 font-semibold block mb-1 uppercase tracking-wider">
                                Sugerencia de Mitigación:
                              </span>
                              {r.mitigation}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* PESTAÑA 2: FIT TÉCNICO */}
            {activeTab === "fit" && (
              <div className="space-y-6 animate-[fadeIn_300ms_ease-out]">
                <div>
                  <h3 className="text-sm font-bold text-[#1F2937] uppercase tracking-widest flex items-center gap-2">
                    <Activity className="text-[#D4AF37] w-4 h-4" />
                    Análisis de Integración y Viabilidad Operativa
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Evaluación cualitativa de habilidades, nivel de
                    adaptabilidad y tracción inmediata en la Dirección de
                    Energía.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                  {db.fit.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between hover:border-gray-300 transition-all duration-300 shadow-sm"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-[#D4AF37] uppercase tracking-wider">
                            {item.label}
                          </span>
                          <span className="font-bold text-[#1F2937] bg-gray-100 px-2 py-0.5 rounded text-[10px]">
                            {item.score}
                          </span>
                        </div>
                        <div className="w-full bg-[#F3F4F6] rounded-full h-1.5 border border-gray-200 overflow-hidden">
                          <div
                            className="bg-[#D4AF37] h-full rounded-full transition-all duration-500"
                            style={{
                              width: item.score === "Excede" ? "100%" : "80%",
                            }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed font-sans text-justify">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PESTAÑA 3: CUMPLIMIENTO */}
            {activeTab === "cumplimiento" && (
              <div className="space-y-6 animate-[fadeIn_300ms_ease-out]">
                <div>
                  <h3 className="text-sm font-bold text-[#1F2937] uppercase tracking-widest flex items-center gap-2">
                    <ClipboardList className="text-[#D4AF37] w-4 h-4" />
                    Scorecard de Cumplimiento
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Evaluación ponderada de requisitos corporativos y validaciones físicas.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {db.scorecard.map((row, index) => (
                    <div key={index} className="bg-white border border-gray-200/80 rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)] transition-all duration-300">
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white to-gray-50/30">
                        <div className="space-y-1.5 flex-1">
                          <h4 className="text-xs sm:text-sm font-bold text-[#1F2937] uppercase tracking-wider flex items-center gap-2">
                            {row.r}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-gray-500 max-w-2xl font-medium">
                            {row.req}
                          </p>
                        </div>
                        <div className="shrink-0 self-start sm:self-center">
                          <span className={`inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] border ${["Cumple", "Excede"].includes(row.ob) ? "text-emerald-700 bg-emerald-50 border-emerald-200/80 shadow-sm shadow-emerald-100/50" : row.ob === "Cumple Parcialmente" ? "text-amber-700 bg-amber-50 border-amber-200/80 shadow-sm shadow-amber-100/50" : "text-rose-700 bg-rose-50 border-rose-200/80 shadow-sm shadow-rose-100/50"}`}>
                            {row.ob}
                          </span>
                        </div>
                      </div>

                      {row.subItems && row.subItems.length > 0 && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                          <div className="pt-4 border-t border-gray-100/80">
                            <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-3 flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
                              Evidencia Validada
                            </span>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                              {row.subItems.map((sub, subIdx) => {
                                const isPositive = ["Cumple", "Excede", "Acreditado", "Superado", "Cumple Parcialmente", "Match Operativo"].includes(sub.ob) || sub.ob.startsWith("Supera") || sub.ob.startsWith("Match") || sub.ob.startsWith("Competente");
                                const isPartial = sub.ob === "Cumple Parcialmente" || sub.ob === "Condicionado" || sub.ob === "Pendiente";
                                
                                return (
                                  <div key={subIdx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F9FAFB] border border-gray-100/80 transition-colors hover:bg-gray-100/50 hover:border-gray-200/60">
                                    <div className="mt-0.5 shrink-0">
                                      {isPositive ? (
                                        isPartial ? <AlertCircle className="w-4 h-4 text-amber-500" /> : <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                      ) : isPartial ? (
                                        <AlertCircle className="w-4 h-4 text-amber-500" />
                                      ) : (
                                        <X className="w-4 h-4 text-rose-500" />
                                      )}
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                      <div className="flex justify-between items-start gap-2 mb-1.5">
                                        <h5 className="text-[11px] font-bold text-[#1F2937] leading-tight pr-2">{sub.name}</h5>
                                        <span className={`shrink-0 inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${isPositive ? (isPartial ? "text-amber-700 bg-amber-50 border-amber-200/60" : "text-emerald-700 bg-emerald-50 border-emerald-200/60") : isPartial ? "text-amber-700 bg-amber-50 border-amber-200/60" : "text-rose-700 bg-rose-50 border-rose-200/60"}`}>
                                          {sub.ob}
                                        </span>
                                      </div>
                                      <p className="text-[10px] text-gray-500 leading-snug">{sub.status}</p>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PESTAÑA 4: ENTREVISTA STAR LITERAL */}
            {activeTab === "star" && db.star && db.star.length > 0 && (
              <div className="space-y-6 animate-[fadeIn_300ms_ease-out]">
                <div>
                  <h3 className="text-sm font-bold text-[#1F2937] uppercase tracking-widest flex items-center gap-2">
                    <FileText className="text-[#D4AF37] w-4 h-4" />
                    Declaraciones y Transcripciones de la Entrevista
                    (Metodología STAR)
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Extracto de las respuestas proporcionadas formalmente por el
                    candidato para cada escenario técnico del sector.
                  </p>
                </div>
                <div className="space-y-6">
                  {db.star.map((b, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl p-5 space-y-4 shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-gray-100 pb-3">
                        <h4 className="font-bold text-[#1F2937] text-xs uppercase tracking-wide flex items-start gap-1.5 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1 shrink-0"></span>
                          {b.q}
                        </h4>
                        <span className="text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded border border-[#D4AF37]/20 uppercase tracking-widest self-start sm:self-auto shrink-0">
                          Validación STAR
                        </span>
                      </div>

                      <div className="py-2 space-y-2.5 border-b border-gray-200/30 text-xs text-gray-700">
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider shrink-0 sm:w-28 mt-0.5">
                            Competencia:
                          </span>
                          <span className="font-bold text-[#D4AF37]">
                            {b.competencia}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider shrink-0 sm:w-28 mt-0.5">
                            Pregunta Base:
                          </span>
                          <span className="text-gray-600 italic">
                            "{b.pregunta}"
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-xs font-sans">
                        <div className="space-y-4">
                          <div className="p-4 bg-[#F3F4F6]/60 border border-gray-100 rounded-lg">
                            <span className="text-[9px] font-bold text-[#1F2937] uppercase tracking-wider block mb-2 text-gray-600">
                              Situación (S)
                            </span>
                            <p className="text-gray-700 leading-relaxed text-justify">
                              "{b.s}"
                            </p>
                          </div>
                          <div className="p-4 bg-[#F3F4F6]/60 border border-gray-100 rounded-lg">
                            <span className="text-[9px] font-bold text-[#1F2937] uppercase tracking-wider block mb-2 text-gray-600">
                              Tarea (T)
                            </span>
                            <p className="text-gray-700 leading-relaxed text-justify">
                              "{b.t}"
                            </p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-[#F3F4F6]/60 border border-[#D4AF37]/20 rounded-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37]/5 rounded-full blur-xl"></div>
                            <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                              Acción (A)
                            </span>
                            <p className="text-[#1F2937] leading-relaxed relative z-10 text-justify">
                              "{b.a}"
                            </p>
                          </div>
                          <div className="p-4 bg-[#F3F4F6]/60 border border-[#D4AF37]/20 rounded-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37]/5 rounded-full blur-xl"></div>
                            <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                              Resultado (R)
                            </span>
                            <p className="text-[#1F2937] leading-relaxed font-semibold relative z-10 text-justify">
                              "{b.r}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NOTA FIJA CRÍTICA: BRECHAS SUBSANABLES Y CURSOS FALTANTES (Requerimiento de usuario) */}
            <div className="mt-8 border border-[#D4AF37]/30 bg-gradient-to-r from-white to-white/95 rounded-xl p-5 sm:p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1.5 z-10">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#1F2937] uppercase tracking-widest flex items-center gap-2">
                    Auditoría de Brechas Subsanables & Cursos Faltantes
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed max-w-4xl text-justify">
                    {db.gaps}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Estilos globales */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
