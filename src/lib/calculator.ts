export function calculateRequiredRAM(
  paramsBillion: number,
  quantization: "FP32" | "FP16" | "INT8" | "INT4",
  overheadMultiplier: number = 1.2
): number {
  let bytesPerParam = 4; // FP32

  switch (quantization) {
    case "FP16":
      bytesPerParam = 2;
      break;
    case "INT8":
      bytesPerParam = 1;
      break;
    case "INT4":
      bytesPerParam = 0.5;
      break;
  }

  // (params * bytesPerParam) / 1,000,000,000 is equivalent to paramsBillion * bytesPerParam
  // because paramsBillion is already scaled down by 1 billion.
  const requiredRAM = paramsBillion * bytesPerParam;

  return requiredRAM * overheadMultiplier;
}
