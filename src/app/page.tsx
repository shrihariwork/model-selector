"use client";

import { useState, useMemo } from "react";
import { devices, models, TaskType } from "@/data/database";
import { calculateRequiredRAM } from "@/lib/calculator";
import { Sidebar } from "@/components/Sidebar";
import { ModelCard } from "@/components/ModelCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Bot } from "lucide-react";

export default function Home() {
  const [selectedDeviceId, setSelectedDeviceId] = useState(devices[0].id);
  const [customRamGB, setCustomRamGB] = useState(1.0);
  const [selectedTasks, setSelectedTasks] = useState<TaskType[]>(["Vision", "NLP", "Audio"]);

  const selectedDevice = useMemo(
    () => devices.find((d) => d.id === selectedDeviceId) || devices[0],
    [selectedDeviceId]
  );
  
  const isCustom = selectedDeviceId === "custom-device";
  const availableRamGB = isCustom ? customRamGB : selectedDevice.ramGB;

  const handleTaskToggle = (task: TaskType) => {
    setSelectedTasks((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  const filteredModels = useMemo(() => {
    return models.filter((model) => {
      // 1. Task filter
      if (!selectedTasks.includes(model.task)) return false;

      // 2. RAM filter
      const requiredRam = calculateRequiredRAM(model.paramsBillion, model.quantization);
      if (requiredRam > availableRamGB) return false;

      // 3. Format filter (Skip if custom)
      if (!isCustom) {
        if (!selectedDevice.supportedFormats.includes(model.format) && !selectedDevice.supportedFormats.includes("Any")) {
          return false;
        }
      }

      return true;
    });
  }, [models, selectedTasks, availableRamGB, isCustom, selectedDevice]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <Bot className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Edge AI Matcher</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <Sidebar
            selectedDeviceId={selectedDeviceId}
            onDeviceChange={setSelectedDeviceId}
            customRamGB={customRamGB}
            onCustomRamChange={setCustomRamGB}
            selectedTasks={selectedTasks}
            onTaskToggle={handleTaskToggle}
          />

          <div className="flex-1 w-full">
            <div className="mb-6 flex items-center justify-between bg-card/50 border border-border/50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                Compatible Models
                <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-sm font-bold">
                  {filteredModels.length}
                </span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Showing models compatible with <span className="font-semibold text-foreground">{selectedDevice.name}</span>
              </p>
            </div>

            {filteredModels.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredModels.map((model) => (
                  <ModelCard
                    key={model.id}
                    model={model}
                    requiredRamGB={calculateRequiredRAM(model.paramsBillion, model.quantization)}
                    availableRamGB={availableRamGB}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-card/30 border border-border/30 rounded-lg border-dashed">
                <Bot className="w-12 h-12 text-muted-foreground mb-4 opacity-20" />
                <h3 className="text-lg font-medium">No Compatible Models Found</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                  Try adjusting your hardware configurations or selecting different task types to see more models.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
