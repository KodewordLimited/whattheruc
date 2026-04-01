"use client";

import { useState } from "react";
import Image from "next/image";

interface VehicleData {
  fuelType: string;
  model: string;
  year: string;
  mileagePerKm?: number;
}

export default function Calculator() {
  const [licensePlate, setLicensePlate] = useState("");
  const [averageDriving, setAverageDriving] = useState("14000");
  const [result, setResult] = useState<{
    cost: string;
    message: string;
    electricityCost: string;
    carModel: string;
    year: string;
    fuelType: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  async function calculateRUC() {
    if (!licensePlate.trim()) return;
    setLoading(true);

    const apiUrl = `/api/vehicle?search=${encodeURIComponent(licensePlate)}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }

      const data: VehicleData = await response.json();
      const fuelType = data.fuelType;
      const carModel = data.model;
      const year = data.year;
      const mileagePerKm = data.mileagePerKm;
      const km = Number(averageDriving);

      let rucPer1000Km: number;
      let rucMessage: string;
      let electricityCost = 0;

      switch (fuelType) {
        case "Diesel":
          rucPer1000Km = 76;
          rucMessage = "Annual RUC";
          break;
        case "Electric":
          rucPer1000Km = 76;
          rucMessage = "Annual RUC";
          if (mileagePerKm) {
            electricityCost = km * mileagePerKm * 0.35;
          }
          break;
        case "HybridPlugin":
          rucPer1000Km = 38;
          rucMessage = "Annual RUC";
          break;
        case "Petrol":
          rucPer1000Km = 0;
          rucMessage = "No RUC for this vehicle.";
          break;
        default:
          rucPer1000Km = 0;
          rucMessage = "No RUC for this vehicle.";
      }

      const ruc = (km / 1000) * rucPer1000Km;
      const rucDisplay = rucPer1000Km > 0 ? ruc.toFixed(0) : "0";

      const electricityMessage =
        fuelType === "Electric" && electricityCost > 0
          ? `But you will only pay $${electricityCost.toFixed(2)} in electricity per year assuming you pay average household electricity rates of $0.35/kWh`
          : "";

      setResult({
        cost: "$" + rucDisplay,
        message: rucMessage,
        electricityCost: electricityMessage,
        carModel,
        year,
        fuelType,
      });

      if (typeof window !== "undefined" && (window as never as Record<string, unknown>).mixpanel) {
        (window as never as Record<string, { track: (name: string, data: Record<string, string>) => void }>).mixpanel.track("click", {
          "clicked element": "Calculate",
          "custom attributes": JSON.stringify({ "data-action": "calculate" }),
        });
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      setResult({
        cost: "Error",
        message,
        electricityCost: "",
        carModel: "",
        year: "",
        fuelType: "",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="calculator-container">
      {/* Input card */}
      <div className="calculator-wrapper">
        <div className="centered">
          We look up your licence plate with the NZTA – we never store it.
        </div>
        <div className="spacer-16" />
        <input
          placeholder="RUC123"
          className="input-lp"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calculateRUC()}
        />
        <div className="spacer-16" />
        <div>Average driving per year (km)</div>
        <div className="spacer-16" />
        <input
          type="number"
          className="small-input"
          value={averageDriving}
          onChange={(e) => setAverageDriving(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calculateRUC()}
        />
        <div className="spacer-16" />
        <button className="button" onClick={calculateRUC} disabled={loading}>
          {loading ? "Loading..." : "Calculate"}
        </button>
        <div className="spacer-16" />
        <div className="text">
          Brought to you by the creators of{" "}
          <a
            href="https://www.getroadtrip.app/?utm_source=whattheruc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roadtrip Fuel Calculator
          </a>
        </div>
      </div>

      {/* Results card */}
      {result && (
        <div
          className="calculator-wrapper top"
          style={{ display: "flex" }}
        >
          <div className="cost">{result.cost}</div>
          <div className="spacer-8" />
          <div className="costmessage">{result.message}</div>
          {result.electricityCost && (
            <>
              <div className="spacer-16" />
              <div className="costmessage">{result.electricityCost}</div>
            </>
          )}
          {result.carModel && (
            <>
              <div className="spacer-16" />
              <div className="car">
                <Image src="/car.svg" width={40} height={40} alt="Car icon" />
                <div className="vflex">
                  <div className="text bold">{result.carModel}</div>
                  <div className="hflex">
                    <div className="text">{result.year}</div>
                    <div className="text"> – </div>
                    <div className="text">{result.fuelType}</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
