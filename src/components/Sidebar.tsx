"use client";

import { Device, devices, TaskType } from "@/data/database";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Cpu, HardDrive, Zap } from "lucide-react";

interface SidebarProps {
  selectedDeviceId: string;
  onDeviceChange: (id: string) => void;
  customRamGB: number;
  onCustomRamChange: (ram: number) => void;
  selectedTasks: TaskType[];
  onTaskToggle: (task: TaskType) => void;
}

export function Sidebar({
  selectedDeviceId,
  onDeviceChange,
  customRamGB,
  onCustomRamChange,
  selectedTasks,
  onTaskToggle,
}: SidebarProps) {
  const selectedDevice = devices.find((d) => d.id === selectedDeviceId) || devices[0];
  const isCustom = selectedDeviceId === "custom-device";

  const taskOptions: TaskType[] = ["Vision", "NLP", "Audio"];

  return (
    <div className="w-full md:w-80 flex flex-col gap-6">
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Hardware Config
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Select Edge Device</Label>
            <Select value={selectedDeviceId} onValueChange={onDeviceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a device" />
              </SelectTrigger>
              <SelectContent>
                {devices.map((device) => (
                  <SelectItem key={device.id} value={device.id}>
                    {device.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {!isCustom && (
            <div className="space-y-4 p-4 rounded-lg bg-muted/50 border border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <HardDrive className="w-4 h-4" /> RAM
                </span>
                <span className="font-medium text-sm">
                  {selectedDevice.ramGB >= 1
                    ? `${selectedDevice.ramGB} GB`
                    : `${selectedDevice.ramGB * 1000} MB`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4" /> TOPS
                </span>
                <span className="font-medium text-sm">
                  {selectedDevice.npuTops > 0 ? selectedDevice.npuTops : "N/A"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Compute
                </span>
                <div className="flex gap-1">
                  {selectedDevice.computeType.map((ct) => (
                    <Badge key={ct} variant="secondary" className="text-xs">
                      {ct}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isCustom && (
            <div className="space-y-4 p-4 rounded-lg bg-muted/50 border border-border/50">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm text-muted-foreground flex items-center gap-2">
                    <HardDrive className="w-4 h-4" /> Custom RAM
                  </Label>
                  <span className="font-medium text-sm text-primary">
                    {customRamGB >= 1 ? `${customRamGB.toFixed(1)} GB` : `${Math.round(customRamGB * 1000)} MB`}
                  </span>
                </div>
                <Slider
                  min={0.05}
                  max={32}
                  step={0.05}
                  value={[customRamGB]}
                  onValueChange={(vals) => onCustomRamChange(vals[0])}
                  className="py-2"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-muted-foreground">Task Type</Label>
            <div className="space-y-2">
              {taskOptions.map((task) => (
                <div key={task} className="flex items-center space-x-2">
                  <Checkbox
                    id={`task-${task}`}
                    checked={selectedTasks.includes(task)}
                    onCheckedChange={() => onTaskToggle(task)}
                  />
                  <Label
                    htmlFor={`task-${task}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {task}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
