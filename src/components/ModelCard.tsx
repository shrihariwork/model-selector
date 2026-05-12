"use client";

import { Model } from "@/data/database";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Cpu, HardDrive, Layers } from "lucide-react";

interface ModelCardProps {
  model: Model;
  requiredRamGB: number;
  availableRamGB: number;
}

export function ModelCard({ model, requiredRamGB, availableRamGB }: ModelCardProps) {
  const ramPercentage = Math.min((requiredRamGB / availableRamGB) * 100, 100);
  const isOverLimit = requiredRamGB > availableRamGB;
  const isNearLimit = ramPercentage > 85;

  let progressColor = "bg-primary";
  if (isOverLimit || isNearLimit) {
    progressColor = "bg-destructive";
  }

  const formatRam = (gb: number) => {
    return gb >= 1 ? `${gb.toFixed(2)} GB` : `${Math.round(gb * 1000)} MB`;
  };

  return (
    <Card className="flex flex-col h-full border-border/50 bg-card hover:border-primary/50 transition-colors group">
      <CardHeader className="flex-none pb-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
              {model.name}
            </CardTitle>
            <CardDescription className="mt-1 line-clamp-2">
              {model.description}
            </CardDescription>
          </div>
          <Badge variant="outline" className="shrink-0 bg-background">
            {model.task}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center gap-1 text-xs">
              <Layers className="w-3 h-3" />
              {model.paramsBillion >= 1 
                ? `${model.paramsBillion}B Params` 
                : `${Math.round(model.paramsBillion * 1000)}M Params`}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 text-xs">
              <Cpu className="w-3 h-3" />
              {model.quantization}
            </Badge>
            <Badge className="flex items-center gap-1 text-xs">
              {model.format}
            </Badge>
          </div>
        </div>

        <div className="space-y-2 pt-4 border-t border-border/50 mt-auto">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <HardDrive className="w-4 h-4" /> RAM Usage
            </span>
            <span className={`font-medium ${isOverLimit ? 'text-destructive' : ''}`}>
              {formatRam(requiredRamGB)} / {formatRam(availableRamGB)}
            </span>
          </div>
          <Progress 
            value={ramPercentage} 
            className="h-2"
            indicatorClassName={progressColor}
          />
          {isOverLimit && (
            <p className="text-xs text-destructive mt-1 font-medium">
              Requires more RAM than available
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
